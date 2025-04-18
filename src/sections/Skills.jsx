import React from 'react'
import { motion } from 'framer-motion';

export default function Skills() {

  const skills = [
    { name: 'HTML', img: 'https://img.icons8.com/color/96/html-5.png' },
    { name: 'CSS', img: 'https://img.icons8.com/color/96/css3.png' },
    { name: 'JAVASCRIPT', img: 'https://img.icons8.com/color/96/javascript--v1.png' },
    { name: 'REACT JS', img: 'https://img.icons8.com/officel/96/react.png' },
    { name: 'GITHUB', img: 'https://img.icons8.com/ios-glyphs/96/github.png' },
    { name: 'NODE JS', img: 'https://img.icons8.com/color/96/nodejs.png' },
    { name: 'MONGODB', img: 'https://img.icons8.com/color/96/mongodb.png' },
    { name: 'PYTHON', img: 'https://img.icons8.com/color/96/python--v1.png' },
    { name: 'C++', img: 'https://img.icons8.com/color/96/c-plus-plus-logo.png' },
    { name: 'DSA', img: 'https://img.icons8.com/ios-filled/100/stack.png' },

  ];

  return (
    <section className='skills-section' id='Skills'>
      <div className="section-title">
        <h1>Skills & Profficiency</h1>
        <p>That's what I learnt and apply in my work</p>
        <div className="underline"></div>
      </div> 

      <motion.div 
        className="skills-grid"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 5 }}
        transition={{ duration: 2 }}
        viewport={{ once: false , amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
