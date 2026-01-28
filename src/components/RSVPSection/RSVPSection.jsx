import React, { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './RSVPSection.css'

function RSVPSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [status, setStatus] = useState('idle') // idle, submitting, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    allergies: '',
    activity: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulation d'envoi (vous pouvez connecter un service comme Formspree, EmailJS, etc.)
    setTimeout(() => {
      console.log('Données RSVP:', formData)
      setStatus('success')
      
      // Reset après 5 secondes
      setTimeout(() => {
        setStatus('idle')
        setFormData({
          name: '',
          email: '',
          attendance: 'yes',
          guests: '1',
          allergies: '',
          activity: '',
          message: ''
        })
      }, 5000)
    }, 1500)
  }

  if (status === 'success') {
    return (
      <section id="rsvp" className="rsvp success-state">
        <div className="rsvp-container">
          <div className="success-card">
            <div className="success-icon">
              <Check size={48} strokeWidth={2} />
            </div>
            <h2 className="success-title">Merci infiniment !</h2>
            <p className="success-text">
              Votre réponse a bien été enregistrée. Nous avons hâte de partager ce moment avec vous.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} id="rsvp" className={`rsvp scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="rsvp-container">
        <h2 className="section-title">Confirmer Votre Présence</h2>
        <p className="rsvp-description">
          Merci de nous faire part de votre réponse avant le 1er Avril 2026.
        </p>

        <div className="rsvp-form-wrapper">
          <form className="integrated-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Nom complet */}
              <div className="form-group full-width">
                <label htmlFor="name">
                  Prénom & Nom <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Ex: Jean & Marie Dupont"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="form-group full-width">
                <label htmlFor="email">
                  Adresse email <span className="required">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Présence */}
              <div className="form-group">
                <label>
                  Serez-vous parmi nous ? <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className={`radio-label ${formData.attendance === 'yes' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="yes" 
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                    />
                    <span>Oui, avec plaisir</span>
                  </label>
                  <label className={`radio-label ${formData.attendance === 'no' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="no" 
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                    />
                    <span>Non, désolé(e)</span>
                  </label>
                  <label className={`radio-label ${formData.attendance === 'maybe' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="maybe" 
                      checked={formData.attendance === 'maybe'}
                      onChange={handleChange}
                    />
                    <span>Peut-être</span>
                  </label>
                </div>
              </div>

              {/* Nombre d'invités */}
              <div className="form-group">
                <label htmlFor="guests">
                  Nombre de personnes <span className="required">*</span>
                </label>
                <select 
                  id="guests" 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  disabled={formData.attendance === 'no'}
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes ou plus</option>
                </select>
              </div>

              {/* Activité après-midi */}
              <div className="form-group full-width">
                <label htmlFor="activity">
                  Activité de l'après-midi (17h) <span className="optional">— Optionnel</span>
                </label>
                <select 
                  id="activity" 
                  name="activity" 
                  value={formData.activity}
                  onChange={handleChange}
                  disabled={formData.attendance === 'no'}
                >
                  <option value="">À décider sur place</option>
                  <option value="detente">Détente & Lounge</option>
                  <option value="petanque">Tournoi de Pétanque</option>
                  <option value="balade">Balade en bord de Seine</option>
                  <option value="jeux">Jeux de société & Cartes</option>
                  <option value="danse">Initiation Danse</option>
                </select>
              </div>

              {/* Allergies */}
              <div className="form-group full-width">
                <label htmlFor="allergies">
                  Allergies ou restrictions alimentaires <span className="optional">— Optionnel</span>
                </label>
                <input 
                  type="text" 
                  id="allergies" 
                  name="allergies" 
                  placeholder="Ex: Sans gluten, végétarien, sans fruits de mer..."
                  value={formData.allergies}
                  onChange={handleChange}
                  disabled={formData.attendance === 'no'}
                />
              </div>

              {/* Message personnel */}
              <div className="form-group full-width">
                <label htmlFor="message">
                  Un mot pour nous <span className="optional">— Optionnel</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder="Vos souhaits, remarques ou demandes particulières..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                'Envoi en cours...'
              ) : (
                <>
                  Envoyer ma réponse
                  <Send size={18} style={{ marginLeft: '10px' }} />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="rsvp-notice">
          Vos données sont uniquement utilisées pour l'organisation de notre mariage et ne seront pas partagées.
        </p>
      </div>
    </section>
  )
}

export default RSVPSection
