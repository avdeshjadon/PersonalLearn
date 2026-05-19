// Utility functions for notes app

/**
 * Extract number from slug (e.g., "01-what-is-program" -> 1)
 */
export const getNumberFromSlug = (slug) => {
  if (!slug) return null;
  const m = slug.match(/^0*([0-9]{1,3})/);
  return m ? parseInt(m[1], 10) : null;
};

/**
 * Clean title by removing number prefix
 */
export const cleanTitle = (title) => {
  if (!title) return '';
  return title.replace(/^\s*\(?\d{1,3}\)?\s*[\)\.-]?\s*/, '').trim();
};

/**
 * Extract title from markdown content
 */
export const extractTitleFromMarkdown = (content) => {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled';
};

/**
 * Process markdown content for ASCII diagrams
 */
export const processAsciiDiagrams = (content) => {
  return content.replace(/```([^`]+)```/g, (match, code) => {
    const hasBoxChars = ['┌', '│', '└', '─', '┐', '┘', '├', '┤', '┬', '┴']
      .some(char => code.includes(char));

    if (hasBoxChars) {
      return `<pre class="ascii-diagram"><code>${code.trim()}</code></pre>`;
    }
    return match;
  });
};

/**
 * Sort manifest items by number
 */
export const sortByNumber = (items) => {
  return [...items].sort((a, b) => {
    const na = getNumberFromSlug(a.slug);
    const nb = getNumberFromSlug(b.slug);
    if (na != null && nb != null) return na - nb;
    if (na != null) return -1;
    if (nb != null) return 1;
    return a.title.localeCompare(b.title);
  });
};

/**
 * Filter structure based on search query
 */
export const filterStructure = (structure, manifest, query) => {
  if (!query) return structure;

  const lowerQuery = query.toLowerCase();
  return structure
    .map((group) => {
      const filteredItems = (group.items || []).filter((slug) => {
        const item = manifest.find((m) => m.slug === slug);
        if (!item) return false;
        return (
          item.title.toLowerCase().includes(lowerQuery) ||
          slug.toLowerCase().includes(lowerQuery)
        );
      });
      return { ...group, items: filteredItems };
    })
    .filter((group) => group.items.length > 0);
};
