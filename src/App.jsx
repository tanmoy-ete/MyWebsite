import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Media from './sections/Media'

export default function App() {
  return (
    <div className='root'>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Experience />
      <Achievements />
      <Media />
      <Footer />    
    </div>
  )
}


