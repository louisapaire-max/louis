import React from 'react'
import { Calendar, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Hero.css'

function Hero() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section ref={ref} id="accueil" className={`hero scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-image-side">
            <div className="hero-image-wrapper">
              <img 
                src="/couple-cn-tower.jpg" 
                alt="Julie & Louis" 
                className="hero-main-image"
              />
            </div>
          </div>
          
          <div className="hero-text-side">
            <div className="hero-content">
              <div className="hero-label">Invitation au Mariage</div>
              <h1 className="hero-title">Julie <span className="ampersand">&</span> Louis</h1>
              <div className="hero-divider"></div>
              
              <div className="hero-details">
                <div className="hero-detail-item">
                  <Calendar size={20} strokeWidth={1} />
                  <p>Samedi 25 Avril 2026 — 11h00</p>
                </div>
                
                <div className="hero-detail-item">
                  <MapPin size={20} strokeWidth={1} />
                  <p>Hôtel de Ville de Clichy</p>
                </div>
              </div>
              
              <a href="#rsvp" className="hero-cta">
                Confirmer ma présence
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
