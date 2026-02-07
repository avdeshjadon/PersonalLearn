import { useState, useEffect, useCallback, useRef } from 'react';
import { marked } from 'marked';
import { getJavaStructure } from '../data/javaStructure';
import { getOopsStructure } from '../data/oopsStructure';
import { 
  extractTitleFromMarkdown, 
  processAsciiDiagrams, 
  sortByNumber,
  getNumberFromSlug 
} from '../utils/helpers';
import logger from '../utils/logger';

/**
 * Custom hook for managing notes data and content
 */
export const useNotes = (onGroupExpand) => {
  const [currentFolder, setCurrentFolder] = useState('java');
  const [manifest, setManifest] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [structure, setStructure] = useState([]);
  const [currentSlug, setCurrentSlug] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [articleContent, setArticleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const contentCache = useRef({});

  // Fetch markdown content
  const fetchMarkdownContent = useCallback(async (path, folder) => {
    const cacheKey = `${folder}/${path}`;
    if (contentCache.current[cacheKey]) {
      logger.debug('Cache Hit', cacheKey);
      return contentCache.current[cacheKey];
    }

    const response = await fetch(`/notes/${folder}/${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    const content = await response.text();
    contentCache.current[cacheKey] = content;
    return content;
  }, []);

  // Build manifest from structure
  const buildManifest = useCallback(async (folder) => {
    logger.time(`Build Manifest (${folder})`);
    
    const structureData = folder === 'java' ? getJavaStructure() : getOopsStructure();
    const fileList = [];

    structureData.forEach((group) => {
      if (group.items?.length) {
        group.items.forEach((slug) => fileList.push(`${slug}.md`));
      }
    });

    const manifestData = fileList.map((filename) => ({
      slug: filename.replace('.md', ''),
      title: filename.replace('.md', '').replace(/-/g, ' ').toUpperCase(),
      path: filename,
    }));

    // Load titles in parallel
    await Promise.all(
      manifestData.map(async (item) => {
        try {
          const content = await fetchMarkdownContent(item.path, folder);
          item.title = extractTitleFromMarkdown(content);
        } catch (e) {
          // Silent fail for title loading
        }
      })
    );

    logger.timeEnd(`Build Manifest (${folder})`);
    logger.success('Manifest Built', `${manifestData.length} topics loaded`);

    return { manifestData, structureData };
  }, [fetchMarkdownContent]);

  // Initialize
  useEffect(() => {
    const init = async () => {
      setIsLoading(true);

      const { manifestData, structureData } = await buildManifest(currentFolder);
      setManifest(manifestData);
      setStructure(structureData);

      const orderedData = sortByNumber(manifestData);
      setOrdered(orderedData);

      const hash = window.location.hash.slice(1);
      const initialSlug = hash || (orderedData.length > 0 ? orderedData[0].slug : '');

      if (initialSlug) {
        setCurrentSlug(initialSlug);
        logger.info('Initial Topic', initialSlug);
      }

      setIsLoading(false);
    };

    init();
  }, [currentFolder, buildManifest]);

  // Load article content when slug changes
  useEffect(() => {
    if (!currentSlug || manifest.length === 0) return;

    const loadContent = async () => {
      const item = manifest.find((x) => x.slug === currentSlug);
      if (!item) return;

      setIsLoading(true);

      try {
        const content = await fetchMarkdownContent(item.path, currentFolder);
        const processedContent = processAsciiDiagrams(content);
        const html = marked(processedContent);
        setArticleContent(html);

        // Update current index
        const idx = ordered.findIndex((x) => x.slug === currentSlug);
        setCurrentIndex(idx);

        // Auto-expand group
        const noteNum = getNumberFromSlug(currentSlug);
        if (noteNum != null && onGroupExpand) {
          for (let i = 0; i < structure.length; i++) {
            const items = structure[i].items || [];
            for (const it of items) {
              if (it === currentSlug || getNumberFromSlug(it) === noteNum) {
                onGroupExpand(i);
                break;
              }
            }
          }
        }
      } catch (error) {
        logger.error('Content Load Failed', error.message);
        setArticleContent(`
          <div style="padding: 40px; text-align: center; color: #d32f2f;">
            <h2>Error Loading Content</h2>
            <p>${error.message}</p>
          </div>
        `);
      }

      setIsLoading(false);
    };

    loadContent();
  }, [currentSlug, manifest, currentFolder, fetchMarkdownContent, ordered, structure, onGroupExpand]);

  // Handle popstate
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setCurrentSlug(hash);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to slug
  const navigateTo = useCallback((slug) => {
    setCurrentSlug(slug);
    window.history.pushState({ slug }, '', `#${slug}`);
  }, []);

  // Switch folder
  const switchFolder = useCallback((folder) => {
    if (folder !== currentFolder) {
      setCurrentFolder(folder);
      setCurrentSlug('');
      contentCache.current = {};
      window.location.hash = '';
    }
  }, [currentFolder]);

  // Prev/next items
  const prevItem = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const nextItem = currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;

  return {
    currentFolder,
    manifest,
    ordered,
    structure,
    currentSlug,
    articleContent,
    isLoading,
    prevItem,
    nextItem,
    navigateTo,
    switchFolder,
  };
};

export default useNotes;
