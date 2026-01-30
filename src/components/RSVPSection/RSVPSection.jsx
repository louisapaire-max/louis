import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './RSVPSection.css'

function RSVPSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} id="rsvp" className={`rsvp scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="rsvp-container">
        <h2 className="section-title">Confirmer Votre Présence</h2>
        <p className="rsvp-description">
          Merci de nous faire part de votre réponse avant le <strong>1er Mars 2026</strong>.
        </p>
        <p className="rsvp-info-box">
          Afin de permettre à chacun de profiter pleinement de la fête, nous avons souhaité une célébration entre adultes.
        </p>

        <div className="rsvp-form-wrapper">
          <div className="google-form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfu86lfjedMFO5DMIWLg6elwnxxNlh_Ik4k9SKDAoxmUtmtqw/viewform?embedded=true"
              title="Formulaire RSVP"
              loading="lazy"
              allowFullScreen
            >
              Chargement…
            </iframe>
          </div>
        </div>

        <p className="rsvp-notice">
          Vos données sont uniquement utilisées pour l'organisation de notre mariage et ne seront pas partagées.
        </p>
      </div>
    </section>
  )
}

export default RSVPSection
