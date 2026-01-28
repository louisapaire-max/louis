import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './ImageSlider.css'

function ImageSlider({ images, alt = "Images" }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    // Bloquer le scroll quand la lightbox est ouverte
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <div className="image-slider">
        <div 
          className="slider-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="slider-slide"
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={image} 
                alt={`${alt} ${index + 1}`}
                className="slider-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
            <X size={32} />
          </button>
          
          {images.length > 1 && (
            <>
              <button 
                className="lightbox-prev" 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Image précédente"
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                className="lightbox-next" 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Image suivante"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[lightboxIndex]} 
              alt={`${alt} ${lightboxIndex + 1}`}
              className="lightbox-image"
            />
            {images.length > 1 && (
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageSlider
