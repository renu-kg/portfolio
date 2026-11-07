import React, { useEffect } from 'react';

/**
 * Reusable Lightbox / Modal Component
 * Supports certificates, project screenshots, and artwork.
 * 
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Callback to close the modal
 * @param {string} imageSrc - Path or URL of the image
 * @param {string} title - Title of the item
 * @param {string} subtitle - Subtitle / Organization / Medium
 * @param {string} date - Date or credential info
 */
export default function Lightbox({ isOpen, onClose, imageSrc, title, subtitle, date }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Preview Lightbox"}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-img-wrapper">
          <img
            src={imageSrc}
            alt={title || "Preview"}
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-caption">
          <div className="lightbox-caption-meta">
            {title && <h4 className="lightbox-title">{title}</h4>}
            <div className="lightbox-sub">
              {subtitle && <span>{subtitle}</span>}
              {subtitle && date && <span className="meta-separator">·</span>}
              {date && <span>{date}</span>}
            </div>
          </div>

          <button
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close preview modal"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}

