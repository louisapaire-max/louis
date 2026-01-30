import React from 'react'
import { Phone } from 'lucide-react'
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

        <div className="rsvp-contact">
          <p>Une question ? Contactez-nous :</p>
          <div className="rsvp-contact-phones">
            <div className="contact-item">
              <span><strong>Louis :</strong> 07 59 66 40 39</span>
              <a href="tel:0759664039" className="call-btn" title="Appeler Louis">
                <Phone size={14} />
              </a>
            </div>
            <span className="separator">•</span>
            <div className="contact-item">
              <span><strong>Julie :</strong> 06 25 91 26 78</span>
              <a href="tel:0625912678" className="call-btn" title="Appeler Julie">
                <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVPSection
