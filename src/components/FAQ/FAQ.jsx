import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './FAQ.css'

function FAQ() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const infoCards = [
    {
      title: "Transport & parking",
      lines: [
        "Métro : ligne 13 (Mairie de Clichy)",
        "RER : ligne C (Asnières-sur-Seine) + 10 min à pied",
        "Parking : Indigo Clichy Hôtel de Ville + parking du Splash"
      ]
    },
    {
      title: "Tenue conseillée",
      text: "Élégante et confortable, adaptée à une journée de célébration et de balades."
    },
    {
      title: "Cadeaux",
      text: "Votre présence suffit. Une urne sera disponible sur place pour ceux qui souhaitent participer à notre voyage de noces."
    }
  ]

  const faqs = [
    {
      question: "Quel est le code vestimentaire ?",
      answer: "Nous suggérons une tenue élégante et festive. Bien qu'aucun code strict ne soit imposé, nous vous remercions de privilégier une tenue de cérémonie."
    },
    {
      question: "Les enfants sont-ils conviés ?",
      answer: "Les enfants sont les bienvenus. Nous vous prions de nous confirmer leur présence via le formulaire RSVP pour une organisation optimale."
    },
    {
      question: "Stationnement à proximité",
      answer: "Des parkings sont disponibles à proximité de l'Hôtel de Ville de Clichy ainsi qu'au restaurant Splash. Les détails et itinéraires sont consultables dans la section 'Lieux'."
    },
    {
      question: "Date limite de confirmation",
      answer: "Nous vous remercions de bien vouloir confirmer votre présence via le formulaire en ligne avant le 1er avril 2026."
    },
    {
      question: "Options végétariennes",
      answer: "Des alternatives végétariennes sont prévues pour l'ensemble de la réception. N'hésitez pas à nous préciser vos préférences."
    },
    {
      question: "Allergies et restrictions alimentaires",
      answer: "Veuillez nous signaler toute allergie ou restriction via le formulaire RSVP afin que nous puissions adapter le menu en conséquence."
    },
    {
      question: "Liste de mariage",
      answer: "Votre présence à nos côtés est notre plus beau présent. Pour ceux qui souhaitent nous témoigner une attention particulière, une contribution à notre voyage de noces sera possible via une urne sur place."
    },
    {
      question: "Organisation de la journée",
      answer: "La cérémonie civile débutera à 11h à l'Hôtel de Ville de Clichy. Elle sera suivie d'une réception au Splash à partir de 12h30. L'après-midi sera agrémenté d'activités au choix."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} id="faq" className={`faq scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="faq-container">
        <h2 className="section-title">Informations Pratiques</h2>
        <p className="faq-intro">
          Détails complémentaires pour faciliter votre venue et l'organisation de cette journée.
        </p>
        <div className="info-cards">
          {infoCards.map((card) => (
            <div key={card.title} className="info-card">
              <h3 className="info-card-title">{card.title}</h3>
              {card.text && <p className="info-card-text">{card.text}</p>}
              {card.lines && (
                <ul className="info-card-list">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} size={20} />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                aria-hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
