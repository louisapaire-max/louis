import React from 'react'
import { Clock, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Program.css'

function Program() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  const events = [
    {
      time: "11h00",
      title: "Cérémonie Civile",
      location: "Hôtel de Ville de Clichy",
      description: "Célébration officielle de notre union en présence de nos proches.",
      icon: <MapPin size={16} />
    },
    {
      time: "12h00",
      title: "Déjeuner",
      location: "Splash",
      description: "Réception et déjeuner de célébration en bord de Seine.",
      icon: <MapPin size={16} />
    },
    {
      time: "17h00",
      title: "Après-midi",
      location: "Activités",
      description: "Moments de détente et activités au choix pour conclure la journée.",
      icon: <Clock size={16} />
    }
  ]

  return (
    <section ref={ref} id="programme" className={`program scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="program-container">
        <h2 className="section-title">Le Déroulement</h2>
        <p className="program-intro">Samedi 25 Avril 2026</p>
        
        <div className="program-timeline">
          {events.map((event, index) => (
            <div key={index} className="program-item">
              <div className="program-time-wrapper">
                <div className="program-time">{event.time}</div>
              </div>
              <div className="program-content">
                <p className="program-location">
                  {event.location}
                </p>
                <h3>{event.title}</h3>
                <p className="program-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
