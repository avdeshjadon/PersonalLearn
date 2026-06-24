import { useState, useEffect, useCallback, useRef } from "react";
import { marked } from "marked";
import { getJavaStructure } from "../data/javaStructure";
import { getPostmanStructure } from "../data/postmanStructure";
import {
  extractTitleFromMarkdown,
  processAsciiDiagrams,
  sortByNumber,
  getNumberFromSlug,
} from "../../../utils/helpers";
import logger from "../../../utils/logger";

/**
 * Custom hook for managing notes data and content
 */
export const useNotes = (onGroupExpand) => {
  // Restore folder from localStorage or default to 'java'
  const [currentFolder, setCurrentFolder] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("currentFolder") || "java";
    }
    return "java";
  });
  const [manifest, setManifest] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [structure, setStructure] = useState([]);
  const [currentSlug, setCurrentSlug] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [articleContent, setArticleContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const contentCache = useRef({});

  // Fetch markdown content
  const fetchMarkdownContent = useCallback(async (path, folder) => {
    const cacheKey = `${folder}/${path}`;
    if (contentCache.current[cacheKey]) {
      logger.debug("Cache Hit", cacheKey);
      return contentCache.current[cacheKey];
    }

    const url = `${import.meta.env.VITE_API_URL || ''}/api/notes/${folder}/${path}`;
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    const content = await response.text();
    
    // Log directly to Chrome Console to prove it came from the backend
    console.log(`[🌐 FETCH SUCCESS] Downloaded "${path}" directly from MongoDB Backend (URL: ${url})`);
    
    contentCache.current[cacheKey] = content;
    return content;
  }, []);

  // Build manifest from structure
  const buildManifest = useCallback(
    async (folder) => {
      logger.time(`Build Manifest (${folder})`);

      const structureData =
        folder === "java"
          ? getJavaStructure()
          : getPostmanStructure();
      const fileList = [];

      structureData.forEach((group) => {
        if (group.items?.length) {
          group.items.forEach((slug) => fileList.push(`${slug}.md`));
        }
      });

      const manifestData = fileList.map((filename) => ({
        slug: filename.replace(".md", ""),
        title: filename.replace(".md", "").replace(/-/g, " ").toUpperCase(),
        path: filename,
      }));

      logger.timeEnd(`Build Manifest (${folder})`);
      logger.success("Manifest Built", `${manifestData.length} topics loaded`);

      return { manifestData, structureData };
    },
    [fetchMarkdownContent],
  );

  // Initialize
  useEffect(() => {
    let ignore = false;
    const init = async () => {
      // Interview mode doesn't use the manifest system — content is loaded separately in App.jsx
      if (currentFolder === "interview") {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const { manifestData, structureData } =
        await buildManifest(currentFolder);
        
      if (ignore) return;

      setManifest(manifestData);
      setStructure(structureData);

      const orderedData = sortByNumber(manifestData);
      setOrdered(orderedData);

      const hash = window.location.hash.slice(1);
      // Default to roadmap for each folder, fallback to first item
      const defaultSlug =
        currentFolder === "java"
          ? "00-java-roadmap"
          : currentFolder === "postman"
            ? "postman-complete"
            : orderedData.length > 0
              ? orderedData[0].slug
              : "";
      const initialSlug = hash || defaultSlug;

      if (initialSlug) {
        setCurrentSlug(initialSlug);
        logger.info("Initial Topic", initialSlug);
      }

      setIsLoading(false);
    };

    init();
    return () => { ignore = true; };
  }, [currentFolder, buildManifest]);

  // Load article content when slug changes
  useEffect(() => {
    if (!currentSlug || manifest.length === 0) return;
    let ignore = false;

    const loadContent = async () => {
      const item = manifest.find((x) => x.slug === currentSlug);
      if (!item) return;

      setIsLoading(true);

      try {
        const content = await fetchMarkdownContent(item.path, currentFolder);
        if (ignore) return;
        
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
        if (ignore) return;
        logger.error("Content Load Failed", error.message);
        setArticleContent(`
          <div style="padding: 40px; text-align: center; color: #d32f2f;">
            <h2>Error Loading Content</h2>
            <p>${error.message}</p>
          </div>
        `);
      }

      if (!ignore) setIsLoading(false);
    };

    loadContent();
    return () => { ignore = true; };
  }, [
    currentSlug,
    manifest,
    currentFolder,
    fetchMarkdownContent,
    ordered,
    structure,
    onGroupExpand,
  ]);

  // Handle popstate
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setCurrentSlug(hash);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Navigate to slug
  const navigateTo = useCallback((slug) => {
    setCurrentSlug(slug);
    window.history.pushState({ slug }, "", `#${slug}`);
  }, []);

  // Switch folder
  const switchFolder = useCallback(
    (folder) => {
      if (folder !== currentFolder) {
        setCurrentFolder(folder);
        localStorage.setItem("currentFolder", folder);
        setCurrentSlug("");
        contentCache.current = {};
        window.location.hash = "";
      }
    },
    [currentFolder],
  );

  // Prev/next items
  const prevItem = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const nextItem =
    currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;

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
