import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className='education-section' id='Education'>
      <div className="section-title">
        <h1>Education Life</h1>
        <p>Let me share my educational qualification</p>
        <div className="underline"></div>
      </div>

      <div className="education-content">
        {[
          {
            title: 'Rajshahi University of Engineering & Technology',
            details: [
              'B.Sc(Engineering) in Electronics & Telecommunication Engineering',
              'Session: 2022 - Present',
            ],
          },
          {
            title: 'Chittagong College',
            details: [
              'Passed Higher School Certificate(HSC) Exam in Science',
              'GPA : 5.00 out of 5.00',
              'Passing Year : 2022',
            ],
          },
          {
            title: 'Chittagong Collegiate School',
            details: [
              'Passed Secondary School Certificate(SSC) Exam in Science',
              'GPA : 5.00 out of 5.00',
              'Passing Year : 2020',
            ],
          },
        ].map((edu, i) => (
          <motion.div
            className="text-content-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            key={i}
          >
            <h2>{edu.title}</h2>
            <div className="underline small"></div>
            {edu.details.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
