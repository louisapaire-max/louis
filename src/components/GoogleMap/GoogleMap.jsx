import React, { useState } from 'react'
import { MapPin, Utensils, ParkingSquare, Navigation, Map, X } from 'lucide-react'
import ImageSlider from '../ImageSlider/ImageSlider'
import './GoogleMap.css'

function GoogleMap() {
  // URLs d'intégration simplifiées et robustes
  const mairieClichyUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.6599483904115!2d2.302299275062527!3d48.90281749758091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0c98bdd535%3A0x7ea52a513742d02a!2sMairie%20de%20Clichy!5e0!3m2!1sfr!2sfr!4v1738097500000!5m2!1sfr!2sfr"
  
  const splashRestaurantUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.4411135431627!2d2.288258676233157!3d48.91146717133989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f34e9679a01%3A0xc9224b4c63dd22b9!2sSplash!5e0!3m2!1sfr!2sfr!4v1738097500000!5m2!1sfr!2sfr"

  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section id="lieux" className="google-map">
      <div className="map-container">
        <h2 className="section-title">Les lieux de la journée</h2>
        
        {/* Section Mairie */}
        <div className="location-section">
          <div className="location-card">
            <div className="location-header">
              <div className="location-icon-circle">
                <MapPin size={24} />
              </div>
              <h3 className="location-label">La Cérémonie Civile</h3>
              <h4 className="location-name">Mairie de Clichy</h4>
              <p className="location-address">80 Boulevard Jean Jaurès, 92110 Clichy</p>
              <p className="location-time">25 Avril 2026 à 11h00</p>
            </div>

            <div className="location-content-vertical">
              <div 
                className="location-photo-box"
                onClick={() => setLightboxOpen(true)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
                aria-label="Agrandir l'image"
              >
                <img src="/mairie-clichy.jpg" alt="Mairie de Clichy" className="location-image" />
              </div>

              <div className="mini-separator">
                <span>Localisation</span>
              </div>

              <div className="location-map-box">
                <iframe
                  src={mairieClichyUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mairie de Clichy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Bloc Parking Mairie */}
              <div className="parking-info">
                <div className="parking-header">
                  <ParkingSquare size={20} />
                  <span>Parking conseillé</span>
                </div>
                <p className="parking-name">Parking Indigo Clichy Hôtel de Ville</p>
                <p className="parking-address">80 Boulevard Jean Jaurès, 92110 Clichy</p>
                <div className="parking-actions">
                  <a href="https://www.google.com/maps/search/Parking+Indigo+Clichy+H%C3%B4tel+de+Ville" target="_blank" rel="noopener noreferrer" className="parking-link">
                    <Map size={14} style={{ marginRight: '6px' }} />
                    Maps
                  </a>
                  <a href="https://www.waze.com/ul?q=Parking%20Indigo%20Clichy%20H%C3%B4tel%20de%20Ville" target="_blank" rel="noopener noreferrer" className="parking-link">
                    <Navigation size={14} style={{ marginRight: '6px' }} />
                    Waze
                  </a>
                </div>
              </div>
            </div>

            <div className="location-footer">
              <div className="btn-group">
                <a href="https://www.google.com/maps/dir/?api=1&destination=48.902817,2.302299" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Navigation size={18} style={{ marginRight: '8px' }} />
                  Itinéraire Mairie
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Mairie%20de%20Clichy" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Map size={18} style={{ marginRight: '8px' }} />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Restaurant */}
        <div className="location-section">
          <div className="location-card">
            <div className="location-header">
              <div className="location-icon-circle">
                <Utensils size={24} />
              </div>
              <h3 className="location-label">Le Déjeuner</h3>
              <h4 className="location-name">Splash</h4>
              <p className="location-address">Port Van Gogh, 92600 Asnières-sur-Seine</p>
              <p className="location-time">À partir de 12h30</p>
            </div>
            
            <div className="location-content-vertical">
              <div className="location-photo-box">
                <ImageSlider 
                  images={['/splash-1.jpg', '/splash-2.jpg', '/splash-3.jpg', '/splash-4.jpg']}
                  alt="Splash"
                />
              </div>

              <div className="mini-separator">
                <span>Localisation</span>
              </div>

              <div className="location-map-box">
                <iframe
                  src={splashRestaurantUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Splash"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Bloc Parking Splash */}
              <div className="parking-info">
                <div className="parking-header">
                  <ParkingSquare size={20} />
                  <span>Parking conseillé</span>
                </div>
                <p className="parking-name">Parking du Restaurant (Port Van Gogh)</p>
                <p className="parking-address">Entrée directe via le Port Van Gogh</p>
                <div className="parking-actions">
                  <a href="https://www.google.com/maps/place/Port+Van+Gogh,+92600+Asni%C3%A8res-sur-Seine" target="_blank" rel="noopener noreferrer" className="parking-link">
                    <Map size={14} style={{ marginRight: '6px' }} />
                    Maps
                  </a>
                  <a href="https://www.waze.com/ul?ll=48.911467,2.288258&navigate=yes" target="_blank" rel="noopener noreferrer" className="parking-link">
                    <Navigation size={14} style={{ marginRight: '6px' }} />
                    Waze
                  </a>
                </div>
              </div>
            </div>

            <div className="location-footer">
              <div className="btn-group">
                <a href="https://www.google.com/maps/dir/?api=1&destination=48.911467,2.288258" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Navigation size={18} style={{ marginRight: '8px' }} />
                  Itinéraire Restaurant
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Splash%20Asni%C3%A8res-sur-Seine" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Map size={18} style={{ marginRight: '8px' }} />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="location-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button className="location-lightbox-close" onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          <div className="location-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/mairie-clichy.jpg" alt="Mairie de Clichy" className="location-lightbox-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default GoogleMap
