import { useState, useCallback, useEffect, useRef } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import logger from "../utils/logger";

/**
 * Serializes all <mark> highlights inside a container into an array of objects.
 * Each object stores the text, color class, and an XPath-like position so we can
 * recreate them later.
 */
function serializeHighlights(container) {
  if (!container) return [];
  const marks = container.querySelectorAll("mark[data-hl]");
  const highlights = [];

  marks.forEach((mark) => {
    const color = mark.getAttribute("data-hl");
    const text = mark.textContent;

    // Build a simple path: index of the mark's parent relative to the container,
    // plus the text content so we can match it.
    const parent = mark.parentElement;
    const parentPath = getNodePath(parent, container);

    highlights.push({ text, color, parentPath });
  });

  return highlights;
}

/**
 * Build a simple path string for a node relative to a root.
 */
function getNodePath(node, root) {
  const parts = [];
  let current = node;
  while (current && current !== root) {
    const parent = current.parentElement;
    if (!parent) break;
    const children = Array.from(parent.children);
    const index = children.indexOf(current);
    parts.unshift(`${current.tagName.toLowerCase()}[${index}]`);
    current = parent;
  }
  return parts.join("/");
}

/**
 * Walk text nodes inside a container and wrap matching text with <mark>.
 */
function applyHighlightsFromData(container, highlights) {
  if (!container || !highlights || highlights.length === 0) return;

  highlights.forEach(({ text, color, parentPath }) => {
    // Try to find the parent element using the path
    let target = resolveNodePath(container, parentPath);
    if (!target) target = container;

    // Walk text nodes inside target to find & wrap the text
    const walker = document.createTreeWalker(
      target,
      NodeFilter.SHOW_TEXT,
      null,
    );
    let node;
    while ((node = walker.nextNode())) {
      const idx = node.textContent.indexOf(text);
      if (idx === -1) continue;

      // Already highlighted? Skip
      if (node.parentElement && node.parentElement.tagName === "MARK") continue;

      const range = document.createRange();
      range.setStart(node, idx);
      range.setEnd(node, idx + text.length);

      const mark = document.createElement("mark");
      mark.setAttribute("data-hl", color);
      mark.className = `hl-mark hl-${color}`;
      range.surroundContents(mark);
      break; // one match per highlight entry
    }
  });
}

/**
 * Resolve a path like "div[0]/p[2]/span[1]" to an actual DOM node.
 */
function resolveNodePath(root, path) {
  if (!path) return root;
  const parts = path.split("/");
  let current = root;
  for (const part of parts) {
    const match = part.match(/^(\w+)\[(\d+)\]$/);
    if (!match) return null;
    const [, , indexStr] = match;
    const index = parseInt(indexStr, 10);
    const children = Array.from(current.children);
    if (index >= children.length) return null;
    current = children[index];
  }
  return current;
}

/**
 * Custom hook for managing text highlighting with Firebase persistence.
 */
export const useHighlighter = (currentSlug) => {
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(null); // null = inactive
  const [isEraser, setIsEraser] = useState(false);
  const containerRef = useRef(null);
  const debounceTimer = useRef(null);

  // Available colors
  const colors = [
    { id: "yellow", label: "Yellow", hex: "#fff176" },
    { id: "green", label: "Green", hex: "#a5d6a7" },
    { id: "blue", label: "Blue", hex: "#90caf9" },
    { id: "pink", label: "Pink", hex: "#f48fb1" },
    { id: "orange", label: "Orange", hex: "#ffcc80" },
  ];

  // Toggle the tool popup
  const toggleTool = useCallback(() => {
    setIsToolOpen((prev) => !prev);
  }, []);

  // Close the tool popup
  const closeTool = useCallback(() => {
    setIsToolOpen(false);
  }, []);

  // Select a color
  const selectColor = useCallback((colorId) => {
    setActiveColor(colorId);
    setIsEraser(false);
    logger.info("Highlighter", `Color set: ${colorId}`);
  }, []);

  // Toggle eraser
  const toggleEraser = useCallback(() => {
    setIsEraser((prev) => {
      const newVal = !prev;
      if (newVal) setActiveColor(null);
      logger.info("Highlighter", newVal ? "Eraser enabled" : "Eraser disabled");
      return newVal;
    });
  }, []);

  // Deactivate everything
  const deactivate = useCallback(() => {
    setActiveColor(null);
    setIsEraser(false);
    setIsToolOpen(false);
  }, []);

  // Save highlights to Firebase (debounced)
  const saveHighlights = useCallback(() => {
    if (!containerRef.current || !currentSlug) return;

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      try {
        const data = serializeHighlights(containerRef.current);
        const docRef = doc(db, "highlights", currentSlug.replace(/\//g, "__"));
        await setDoc(docRef, {
          slug: currentSlug,
          highlights: data,
          updatedAt: new Date().toISOString(),
        });
        logger.success(
          "Highlighter",
          `Saved ${data.length} highlights for ${currentSlug}`,
        );
      } catch (err) {
        logger.error?.("Highlighter", `Save failed: ${err.message}`) ||
          console.error("Highlighter save failed:", err);
      }
    }, 800);
  }, [currentSlug]);

  // Load highlights from Firebase
  const loadHighlights = useCallback(async () => {
    if (!containerRef.current || !currentSlug) return;

    try {
      const docRef = doc(db, "highlights", currentSlug.replace(/\//g, "__"));
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const { highlights } = snap.data();
        applyHighlightsFromData(containerRef.current, highlights);
        logger.info(
          "Highlighter",
          `Loaded ${highlights.length} highlights for ${currentSlug}`,
        );
      }
    } catch (err) {
      logger.error?.("Highlighter", `Load failed: ${err.message}`) ||
        console.error("Highlighter load failed:", err);
    }
  }, [currentSlug]);

  // Handle text selection → highlight
  const handleMouseUp = useCallback(() => {
    if (!activeColor || isEraser) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);

    // Make sure the selection is inside our article container
    if (!containerRef.current?.contains(range.commonAncestorContainer)) return;

    try {
      const mark = document.createElement("mark");
      mark.setAttribute("data-hl", activeColor);
      mark.className = `hl-mark hl-${activeColor}`;
      range.surroundContents(mark);
      selection.removeAllRanges();
      saveHighlights();
    } catch (e) {
      // surroundContents can fail if selection crosses element boundaries
      // In that case, use extractContents approach
      try {
        const fragment = range.extractContents();
        const mark = document.createElement("mark");
        mark.setAttribute("data-hl", activeColor);
        mark.className = `hl-mark hl-${activeColor}`;
        mark.appendChild(fragment);
        range.insertNode(mark);
        selection.removeAllRanges();
        saveHighlights();
      } catch (e2) {
        console.warn("Highlight failed for complex selection:", e2);
      }
    }
  }, [activeColor, isEraser, saveHighlights]);

  // Handle eraser click on a highlight
  const handleEraserClick = useCallback(
    (e) => {
      if (!isEraser) return;

      const mark = e.target.closest("mark[data-hl]");
      if (!mark) return;

      // Unwrap the mark
      const parent = mark.parentNode;
      while (mark.firstChild) {
        parent.insertBefore(mark.firstChild, mark);
      }
      parent.removeChild(mark);
      parent.normalize(); // merge adjacent text nodes
      saveHighlights();
    },
    [isEraser, saveHighlights],
  );

  // Load highlights when content changes
  useEffect(() => {
    if (!currentSlug) return;
    // Small delay to let the DOM render first
    const timer = setTimeout(() => {
      loadHighlights();
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlug, loadHighlights]);

  // Whether the highlighter is in any active state
  const isActive = !!activeColor || isEraser;

  return {
    isToolOpen,
    isActive,
    activeColor,
    isEraser,
    colors,
    containerRef,
    toggleTool,
    closeTool,
    selectColor,
    toggleEraser,
    deactivate,
    handleMouseUp,
    handleEraserClick,
  };
};

export default useHighlighter;
