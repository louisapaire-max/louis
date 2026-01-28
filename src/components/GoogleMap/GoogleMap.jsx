import React, { useState } from 'react'
import { MapPin, Utensils, Map, X, Copy } from 'lucide-react'
import './GoogleMap.css'

const locations = [
  {
    icon: <MapPin size={24} />,
    label: 'La Cérémonie Civile',
    name: 'Mairie de Clichy',
    address: '80 Boulevard Jean Jaurès, 92110 Clichy',
    time: '25 Avril 2026 à 11h00',
    image: '/mairie-clichy.jpg',
    mapLink: 'https://www.google.com/maps/dir/?api=1&destination=48.902817,2.302299',
    mapLabel: 'Mairie — Voir sur Google Maps',
    parking: {
      name: 'Parking Indigo Clichy Hôtel de Ville',
      address: '80 Boulevard Jean Jaurès, 92110 Clichy',
      map: 'https://www.google.com/maps/search/Parking+Indigo+Clichy+H%C3%B4tel+de+Ville',
      mapLabel: 'Parking conseillé (Indigo) — Voir sur Google Maps'
    }
  },
  {
    icon: <Utensils size={24} />,
    label: 'Le Déjeuner',
    name: 'Splash',
    address: 'Port Van Gogh, 92600 Asnières-sur-Seine',
    time: 'À partir de 12h30',
    image: '/splash-1.jpg',
    mapLink: 'https://www.google.com/maps/dir/?api=1&destination=48.911467,2.288258',
    mapLabel: 'Restaurant — Voir sur Google Maps',
    parking: {
      name: 'Parking du Restaurant (Port Van Gogh)',
      address: 'Entrée directe via le Port Van Gogh',
      map: 'https://www.google.com/maps/place/Port+Van+Gogh,+92600+Asni%C3%A8res-sur-Seine',
      mapLabel: 'Parking conseillé — Voir sur Google Maps'
    }
  }
]

function GoogleMap() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(locations[0].image)

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
  }

  const openLightbox = (src) => {
    setLightboxImage(src)
    setLightboxOpen(true)
  }

  return (
    <section id="lieux" className="google-map">
      <div className="map-container">
        <h2 className="section-title">Les lieux de la journée</h2>

        {locations.map((location) => (
          <div key={location.name} className="location-section">
            <div className="location-card">
              <div className="location-header">
                <div className="location-icon-circle">{location.icon}</div>
                <h3 className="location-label">{location.label}</h3>
                <h4 className="location-name">{location.name}</h4>
                <p className="location-address">{location.address}</p>
                <p className="location-time">{location.time}</p>
              </div>

              <div className="location-content-vertical">
                <div
                  className="location-photo-box"
                  onClick={() => openLightbox(location.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(location.image)}
                  aria-label="Agrandir l'image"
                >
                  <img src={location.image} alt={location.name} className="location-image" />
                </div>

                <div className="mini-separator">
                  <span>Localisation</span>
                </div>

                <div className="location-address-row">
                  <span className="location-address-label">{location.name}</span>
                  <span className="location-address-text">{location.address}</span>
                  <button
                    type="button"
                    className="copy-icon-btn"
                    onClick={() => copyToClipboard(location.address)}
                    aria-label="Copier l'adresse"
                    title="Copier l'adresse"
                  >
                    <Copy size={16} />
                  </button>
                </div>

                <div className="location-buttons">
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button primary"
                  >
                    <Map size={16} style={{ marginRight: '6px' }} />
                    {location.mapLabel}
                  </a>

                  <a
                    href={location.parking.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button secondary"
                  >
                    <Map size={16} style={{ marginRight: '6px' }} />
                    {location.parking.mapLabel}
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="location-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button className="location-lightbox-close" onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          <div className="location-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Lieu" className="location-lightbox-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default GoogleMap
