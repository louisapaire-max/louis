// Composant pour le bouton RSVP flottant
import React, { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import './FloatingRSVP.css'

function FloatingRSVP() {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearRSVP, setIsNearRSVP] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Afficher après 300px de scroll
      const shouldShow = scrollY > 300
      
      // Détecter si on est proche de la section RSVP
      const rsvpSection = document.getElementById('rsvp')
      if (rsvpSection) {
        const rsvpRect = rsvpSection.getBoundingClientRect()
        // Masquer si la section RSVP est visible à l'écran
        const isRSVPVisible = rsvpRect.top < windowHeight && rsvpRect.bottom > 0
        setIsNearRSVP(isRSVPVisible)
      }
      
      setIsVisible(shouldShow)
    }

    // Vérifier au chargement
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const rsvpSection = document.getElementById('rsvp')
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a 
      href="#rsvp" 
      className={`floating-rsvp ${isVisible && !isNearRSVP ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Confirmer votre présence"
    >
      <Mail size={18} className="floating-rsvp-icon" />
      <span className="floating-rsvp-text">Confirmer votre présence</span>
    </a>
  )
}

export default FloatingRSVP
