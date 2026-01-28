import React from 'react'
import './SectionDivider.css'

function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="divider-line"></div>
      <div className="divider-icon">
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', opacity: 0.5 }} />
      </div>
      <div className="divider-line"></div>
    </div>
  )
}

export default SectionDivider
