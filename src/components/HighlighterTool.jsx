import { memo, useEffect, useRef } from 'react';

/**
 * Highlighter Tool - Pencil icon button with color picker popup
 */
const HighlighterTool = memo(({
  isOpen,
  isActive,
  activeColor,
  isEraser,
  colors,
  onToggle,
  onClose,
  onSelectColor,
  onToggleEraser,
  onDeactivate,
}) => {
  const popupRef = useRef(null);
  const btnRef = useRef(null);

  // Close popup on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        popupRef.current && !popupRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    // Delay to avoid immediate close
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="highlighter-wrapper">
      {/* Pencil Button */}
      <button
        ref={btnRef}
        className={`highlighter-toggle ${isActive ? 'active' : ''}`}
        title="Text Highlighter"
        aria-label="Text Highlighter"
        onClick={onToggle}
      >
        <i className="fa-solid fa-highlighter"></i>
        {isActive && (
          <span
            className="highlighter-indicator"
            style={{
              backgroundColor: isEraser
                ? '#ef5350'
                : colors.find(c => c.id === activeColor)?.hex || 'transparent',
            }}
          />
        )}
      </button>

      {/* Color Picker Popup */}
      {isOpen && (
        <div className="highlighter-popup" ref={popupRef}>
          <div className="highlighter-popup-header">
            <span className="highlighter-popup-title">Highlighter</span>
            {isActive && (
              <button
                className="highlighter-clear-btn"
                onClick={onDeactivate}
                title="Turn off highlighter"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="highlighter-colors">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`highlighter-color-btn ${activeColor === color.id ? 'selected' : ''}`}
                style={{ backgroundColor: color.hex }}
                title={color.label}
                onClick={() => onSelectColor(color.id)}
              >
                {activeColor === color.id && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
            ))}
          </div>

          <div className="highlighter-divider" />

          {/* Eraser */}
          <button
            className={`highlighter-eraser-btn ${isEraser ? 'active' : ''}`}
            onClick={onToggleEraser}
            title="Eraser - click on highlights to remove"
          >
            <i className="fa-solid fa-eraser"></i>
            <span>Eraser</span>
          </button>
        </div>
      )}
    </div>
  );
});

HighlighterTool.displayName = 'HighlighterTool';

export default HighlighterTool;
