import React from 'react'
import { motion } from 'framer-motion'

export default function Media() {
  return (
    <section className='education-section' id='Media'>
      <div className="section-title">
        <h1>Media Coverage</h1>
        <p>Some highlights and coverage </p>
        <div className="underline"></div>
      </div>

      <div className="education-content">
        {[
          {
            image:'SBL-Logo-svg.svg',
            title: 'SystemSage Solutions team receives BDT 2,00,000 for being first runner-up',
            details: [
                'SystemSage Solutions team receives BDT 2,00,000 for being first runner-up at Youth Innovation Summit 2025 in Rajshahi-Rangpur division.',
            ],
            link: 'https://www.startupbangladesh.vc/anondopath-wins-the-youth-innovation-challenge/',
          },
          {
            image:'media2.png',
            title: 'SystemSage Solutions team receives BDT 80,000 for being champion',
            details: [
              'SystemSage Solutions team receives BDT 80,000 for being champion in UIHP-University Innovation Hub Program, RUET in Rajshahi and Rangpur division.',
            ],
            link:'https://www.facebook.com/story.php?story_fbid=122196120134119414&id=61553582439464&rdid=tStKnHbbdDILWdX2#',
          },
          {
            image:'media3.png',
            title: 'রাজশাহী-রংপুর স্টার্টআপ সামিটে রুয়েটের দখলে শীর্ষ তিন স্থান',
            details: [
              'রাজশাহী বিশ্ববিদ্যালয়ের রবীন্দ্র ভবনে অনুষ্ঠিত চূড়ান্ত পর্বে ৮ টি ফাইনালিস্ট দলের মধ্যে রুয়েটের টিম "SystemSage Solutions" দল প্রথম রানার আপ হয়েছে।',
            ],
            link:'https://www.jaijaidinbd.com/education/528825',
          },
          
        ].map((edu, i) => (
          <motion.div className="text-content-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            key={i}
          >
              <img src={edu.image} alt="1" id='image'/>
              <h2>{edu.title}</h2>
              <div className="underline small"></div>
             
              <p>{edu.details}</p>
            <div className="learn-more-btn-1">
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
