import React from 'react'
import { Heart } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Julie & Louis</p>
        <p>
          Célébration de notre union
          <Heart size={16} fill="var(--gold)" color="var(--gold)" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
        </p>
      </div>
    </footer>
  )
}

export default Footer
