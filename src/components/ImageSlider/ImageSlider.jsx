import React, { useState, useEffect } from 'react'
import './ImageSlider.css'

function ImageSlider({ images, alt = "Images" }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change d'image toutes les 4 secondes

    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="image-slider">
      <div 
        className="slider-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-slide">
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
  )
}

export default ImageSlider
