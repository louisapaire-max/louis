import React, { useState, useEffect } from 'react'
import { WEDDING_DATE, getTimeRemaining } from '../../utils/dateUtils'
import './Countdown.css'

function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(WEDDING_DATE))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(WEDDING_DATE))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown">
      <div className="countdown-container">
        <h2 className="countdown-title">Le Temps Restant</h2>
        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-number">{String(timeRemaining.days).padStart(2, '0')}</div>
            <div className="countdown-label">Jours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeRemaining.hours).padStart(2, '0')}</div>
            <div className="countdown-label">Heures</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeRemaining.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeRemaining.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">Secondes</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
