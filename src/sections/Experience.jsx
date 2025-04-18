import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section className='education-section' id='Experience'>
          <div className="section-title">
            <h1>Work Experience</h1>
            <p>On the way to professionalism and exploring</p>
            <div className="underline"></div>
          </div>
    
          <div className="education-content">
            {[
              {
                title: 'Business Strategist at SystemSage Solutions',
                details: [
                  'I currently work as Business Strategist in SystemSage Solutions. We are a company working for revolutionising the agriculture and aquaculture sector of Bangladesh. I do business research and development, market analysis and sometimes take part in software develeopment of SystemSage',
                  'March,2025 - Present',
                ],
                link: 'https://systemsage.tech/',
              },
              {
                title: 'University Innovation Hub Program - RUET',
                details: [
                  'I took part in University Innovation Hub Program- RUET as software developer of Team SystemSage. I took part in growing the business plan of SystemSage and participated in pitch dek presentation. We were able to be the champion of the program and got 80000 BDT as pre-seed funding for our company. ',
                  'November 2024 - March 2025',
                ],
                link:'https://www.facebook.com/story.php?story_fbid=122196120134119414&id=61553582439464&rdid=9czJsP7BqGU7iYS6#',
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
                <div className='learn-more-btn-1'>
                <button className='learn-more-btn'>
                    <a 
                        href={edu.link}
                        target='_blank' 
                        className='email-link'
                    >
                        <p>Read More</p>
                    </a>
                </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
  )
}
