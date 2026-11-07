import React, { useState } from 'react';

/**
 * Reusable ProjectPreview Component
 * Displays 16:9 project screenshots with support for:
 * - Single image or multiple images (1-2) with clean toggle tabs
 * - Editorial captions for each screenshot
 * - Click-to-enlarge via Lightbox
 * - Graceful placeholder fallback if image fails or is omitted
 * 
 * @param {Array} images - Array of { src, alt, caption }
 * @param {string} imageSrc - Optional single image path fallback
 * @param {string} title - Project title for alt text and placeholder
 * @param {string} subtitle - Short tech context for placeholder
 * @param {string} accentColor - Subtle pastel accent tag ('blue' | 'sage' | 'lavender' | 'peach')
 * @param {function} onImageClick - Callback when user clicks image to open in Lightbox
 * @param {string} objectFit - CSS object-fit ('cover' | 'contain')
 */
export default function ProjectPreview({
  images,
  imageSrc,
  title,
  subtitle,
  accentColor = 'blue',
  onImageClick,
  objectFit = 'cover'
}) {
  // Normalize image list
  const normalizedImages = React.useMemo(() => {
    if (Array.isArray(images) && images.length > 0) {
      return images;
    }
    if (imageSrc) {
      return [{ src: imageSrc, alt: title, caption: subtitle }];
    }
    return [];
  }, [images, imageSrc, title, subtitle]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [loadErrors, setLoadErrors] = useState({});

  const hasImages = normalizedImages.length > 0;
  const currentImage = hasImages ? normalizedImages[activeIndex] : null;
  const isCurrentError = currentImage ? Boolean(loadErrors[currentImage.src]) : true;

  const handleImageError = (src) => {
    setLoadErrors((prev) => ({ ...prev, [src]: true }));
  };

  const handlePreviewClick = () => {
    if (currentImage && !isCurrentError && onImageClick) {
      onImageClick({
        imageSrc: currentImage.src,
        title: title,
        subtitle: currentImage.caption || subtitle,
        date: currentImage.caption
      });
    }
  };

  return (
    <div className={`project-preview-wrapper accent-${accentColor}`}>
      <div
        className={`project-preview-container accent-${accentColor} ${onImageClick && !isCurrentError ? 'is-clickable' : ''}`}
        onClick={handlePreviewClick}
        role={onImageClick && !isCurrentError ? 'button' : undefined}
        tabIndex={onImageClick && !isCurrentError ? 0 : undefined}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onImageClick && !isCurrentError) {
            e.preventDefault();
            handlePreviewClick();
          }
        }}
        aria-label={onImageClick && !isCurrentError ? `Enlarge screenshot of ${title}` : undefined}
      >
        {hasImages && !isCurrentError && currentImage ? (
          <>
            <img
              src={currentImage.src}
              alt={currentImage.alt || `Screenshot preview of ${title}`}
              className="project-preview-image"
              style={{
                objectFit: currentImage.objectFit || objectFit,
                backgroundColor: (currentImage.objectFit || objectFit) === 'contain' ? '#FFFFFF' : undefined
              }}
              loading="lazy"
              onError={() => handleImageError(currentImage.src)}
            />

            {/* Subtle Zoom Hint on Hover */}
            {onImageClick && (
              <div className="preview-zoom-badge" aria-hidden="true">
                <span>View Fullscreen 🔍</span>
              </div>
            )}
          </>
        ) : (
          <div className="project-preview-placeholder">
            <div className="preview-placeholder-grid-bg"></div>
            <div className="preview-placeholder-content">
              <div className="preview-placeholder-badge">
                <span className="placeholder-dot"></span>
                <span>16:9 PREVIEW</span>
              </div>
              <div className="preview-placeholder-title">{title}</div>
              {subtitle && <div className="preview-placeholder-sub">{subtitle}</div>}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar with Image Toggle Controls & Caption */}
      {hasImages && (
        <div className="preview-controls-bar">
          <div className="preview-caption-text">
            {currentImage?.caption ? (
              <span>{currentImage.caption}</span>
            ) : (
              <span className="preview-caption-fallback">{title}</span>
            )}
          </div>

          {normalizedImages.length > 1 && (
            <div className="preview-toggle-pills" onClick={(e) => e.stopPropagation()}>
              {normalizedImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`preview-pill-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  aria-label={`Show view ${idx + 1}: ${img.caption || title}`}
                  title={img.caption || `View ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
