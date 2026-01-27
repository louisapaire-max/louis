import React from 'react'
import { ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './RSVPSection.css'

function RSVPSection() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJ6amk7k047J5Q-KhJwueRkqyRK0bI_lGFDCbWOsfRRZJpZA/viewform?embedded=true"

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} id="rsvp" className={`rsvp scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="rsvp-container">
        <h2 className="section-title">Confirmation de présence</h2>
        <p className="rsvp-description">
          Veuillez nous confirmer votre présence et nous faire part de vos éventuelles 
          contraintes alimentaires avant le 1er avril 2026.
        </p>
        <div className="rsvp-form-container">
          <iframe
            src={googleFormUrl}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rsvp-iframe"
          >
            Chargement…
          </iframe>
        </div>
        <p className="rsvp-alternative">
          Si le formulaire ne s'affiche pas,{' '}
          <a href={googleFormUrl.replace('?embedded=true', '')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            cliquez ici pour l'ouvrir dans un nouvel onglet
            <ExternalLink size={14} />
          </a>
        </p>
      </div>
    </section>
  )
}

export default RSVPSection
