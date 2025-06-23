import React from 'react'
import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <section className='education-section' id='Achievements'>
          <div className="section-title">
            <h1>Achievements & Recognition</h1>
            <p>Some honours and rewards of my works</p>
            <div className="underline"></div>
          </div>
    
          <div className="education-content">
            {[
              {
                title: 'Champion – UIHP RUET IC3 (World Bank & ICT Ministry, Bangladesh) (2024)',
                details: [
                  'Participation Recognition as a Software developer of SystemSage through a three-month entrepreneurship program, securing 80,000 BDT in pre-seed funding by winning the competitive startup challenge.',
                ],
                image:'achievement1.jpg',
              },
              {
                title: '1st Runner-Up – Youth Startup Summit (Bangladesh, 2025), Rajshahi & Rangpur',
                details: [
                  'Recongnition of taking part in pitch dek presentation as Business Analyst of SystemSage to top venture capitalists, funded 200,000 BDT by Youth Startup Summit, Rajshahi & Rangpur for being 1st runners-up. ',
                ],
                image:'achievement2.jpg',
              },
              {
                title: 'Semifinalist in BRANDAGE: An Inter-University Case Competition',
                details: [
                  'Certificate of Achievement for being semifinalist in BRANDAGE business case competition as a member of Team Misfits. I showed my problem solving skill and collaboration skill. ',
                ],
                image:'achievement3.jpg',
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
                <p>{edu.details}</p>
                <img src={edu.image} alt="1" />
              </motion.div>
            ))}
          </div>
        </section>
  )
}
