import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy(['accueil', 'programme', 'lieux', 'rsvp', 'faq'])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <a 
            href="#accueil" 
            className={`nav-logo ${!activeSection || activeSection === 'accueil' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Julie & Louis
          </a>
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#programme" 
                className={activeSection === 'programme' ? 'active' : ''}
                aria-current={activeSection === 'programme' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Le Programme
              </a>
            </li>
            <li>
              <a 
                href="#lieux" 
                className={activeSection === 'lieux' ? 'active' : ''}
                aria-current={activeSection === 'lieux' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Les Lieux
              </a>
            </li>
            <li>
              <a 
                href="#rsvp" 
                className={activeSection === 'rsvp' ? 'active' : ''}
                aria-current={activeSection === 'rsvp' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Répondre
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className={activeSection === 'faq' ? 'active' : ''}
                aria-current={activeSection === 'faq' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Informations
              </a>
            </li>
          </ul>
          <button
            type="button"
            className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
            aria-label="Fermer le menu"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
