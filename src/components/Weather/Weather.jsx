import React from 'react'
import { Sun, Cloud, CloudRain, CloudDrizzle, Zap, Snowflake, SunDim, Lightbulb } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Weather.css'

function Weather() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  // Données historiques pour le 25 avril
  const historicalData = [
    { year: '2025', temp: 15, main: 'Clouds', description: 'Éclaircies' },
    { year: '2024', temp: 13, main: 'Rain', description: 'Pluie faible' },
    { year: '2023', temp: 16, main: 'Clear', description: 'Ensoleillé' },
    { year: '2022', temp: 18, main: 'Clear', description: 'Grand soleil' }
  ]

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear': return <Sun className="weather-lucide-icon" />
      case 'Clouds': return <Cloud className="weather-lucide-icon" />
      case 'Rain': return <CloudRain className="weather-lucide-icon" />
      case 'Drizzle': return <CloudDrizzle className="weather-lucide-icon" />
      case 'Thunderstorm': return <Zap className="weather-lucide-icon" />
      case 'Snow': return <Snowflake className="weather-lucide-icon" />
      default: return <SunDim className="weather-lucide-icon" />
    }
  }

  // Calcul de la moyenne propre
  const averageTemp = historicalData.reduce((acc, curr) => acc + curr.temp, 0) / historicalData.length;

  return (
    <section ref={ref} className={`weather scroll-section ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="weather-container">
        <h2 className="weather-title">Précisions Météorologiques</h2>
        
        <div className="weather-summary">
          <p className="summary-text">
            Basé sur les relevés des quatre dernières années, nous anticipons pour le 25 avril 2026 
            une météo printanière avec une température moyenne de <strong>{averageTemp.toFixed(1)}°C</strong>.
          </p>
        </div>

        {/* Section Historique */}
        <div className="weather-history">
          <h3 className="history-title">Relevés historiques à Clichy-la-Garenne</h3>
          <div className="history-grid">
            {historicalData.map((item, index) => (
              <div key={index} className="history-card">
                <div className="history-year">{item.year}</div>
                <div className="history-icon">{getWeatherIcon(item.main)}</div>
                <div className="history-temp">{item.temp}°C</div>
                <div className="history-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather
