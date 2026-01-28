import React, { useState } from 'react'
import { Calendar, MapPin, X, CalendarPlus } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Hero.css'

function Hero() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false)

  // Google Calendar link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mariage%20Julie%20%26%20Louis&dates=20260425T090000Z/20260425T200000Z&details=C%C3%A9r%C3%A9monie%20civile%20%C3%A0%2011h%20%C3%A0%20la%20Mairie%20de%20Clichy%2C%20puis%20r%C3%A9ception%20au%20Splash.&location=Mairie%20de%20Clichy%2C%2080%20Boulevard%20Jean%20Jaur%C3%A8s%2C%2092110%20Clichy`

  // iCal file content
  const generateICalFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Julie & Louis//Mariage//FR
BEGIN:VEVENT
UID:mariage-julie-louis-2026@julielouis.ovh
DTSTAMP:20260101T000000Z
DTSTART:20260425T090000Z
DTEND:20260425T200000Z
SUMMARY:Mariage Julie & Louis
DESCRIPTION:Cérémonie civile à 11h à la Mairie de Clichy, puis réception au Splash.
LOCATION:Mairie de Clichy, 80 Boulevard Jean Jaurès, 92110 Clichy
END:VEVENT
END:VCALENDAR`
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mariage-julie-louis.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setCalendarMenuOpen(false)
  }

  return (
    <>
      <section ref={ref} id="accueil" className={`hero scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-image-side">
              <div 
                className="hero-image-wrapper"
                onClick={() => setLightboxOpen(true)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
                aria-label="Agrandir l'image"
              >
                <img 
                  src="/couple-cn-tower.jpg" 
                  alt="Julie & Louis" 
                  className="hero-main-image"
                />
              </div>
            </div>
            
            <div className="hero-text-side">
              <div className="hero-content">
                <div className="hero-label">Invitation au mariage de</div>
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

                <div className="hero-buttons">
                  <a href="#rsvp" className="hero-cta">
                    Confirmer ma présence
                  </a>
                  
                  <div className="calendar-dropdown">
                    <button 
                      className="hero-cta-secondary"
                      onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                      aria-expanded={calendarMenuOpen}
                    >
                      <CalendarPlus size={18} />
                      Ajouter au calendrier
                    </button>
                    
                    {calendarMenuOpen && (
                      <div className="calendar-menu">
                        <a 
                          href={googleCalendarUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => setCalendarMenuOpen(false)}
                        >
                          Google Calendar
                        </a>
                        <button onClick={generateICalFile}>
                          Apple / Outlook (iCal)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox pour l'image Hero */}
      {lightboxOpen && (
        <div className="hero-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button 
            className="hero-lightbox-close" 
            onClick={() => setLightboxOpen(false)} 
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <div className="hero-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src="/couple-cn-tower.jpg" 
              alt="Julie & Louis" 
              className="hero-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
