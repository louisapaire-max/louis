import React from 'react'
import { Heart } from 'lucide-react'
import './SectionDivider.css'

function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="divider-line"></div>
      <div className="divider-icon">
        <Heart size={18} strokeWidth={1} />
      </div>
      <div className="divider-line"></div>
    </div>
  )
}

export default SectionDivider
