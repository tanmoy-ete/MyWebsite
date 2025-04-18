import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about-section" id="About">
      <div className="section-title">
        <h1>About Me</h1>
        <p>Let's know something about me</p>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <motion.div
          className="text-content-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2>Developing With a Passion While Exploring The World.</h2>
          <div className="underline small"></div>
          <p>
            I'm an undergraduate student with a strong interest in building impactful software solutions that merge technology and creativity. My journey began with a curiosity for how things work, which naturally led me to the world of coding. Whether it’s crafting responsive websites, developing smart IoT systems, or exploring AI integration, I love turning ideas into reality. Beyond the screen, I enjoy exploring new places, learning from different cultures, and drawing inspiration from the world around me. I believe in continuous growth and using technology to make a meaningful difference.
          </p>
        </motion.div>

        <motion.div
          className="image-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="image-wrapper">
            <img src="images.jpeg" alt="Laptop on table" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
