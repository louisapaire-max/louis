import React from 'react'
import {
  Header,
  Hero,
  Countdown,
  SectionDivider,
  Program,
  GoogleMap,
  RSVPSection,
  FAQ,
  Weather,
  Footer,
  ScrollToTop
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionDivider />
      <Countdown />
      <SectionDivider />
      <Program />
      <SectionDivider />
      <GoogleMap />
      <SectionDivider />
      <RSVPSection />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Weather />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
