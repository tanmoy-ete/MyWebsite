import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'TeleMind- A Mental Health Monitoring and Consultaion Platform',
    img: 'portfolio1.png',
    link: ' https://telemindfrontend.netlify.app/',
  },
  {
    title: "Modern Responsive Portfolio Website( demo 1)",
    img: 'portfolio2.png',
    link: 'https://silver-alpaca-a44723.netlify.app/',
  },
  {
    title: "Modern Responsive Portfolio Website( demo 2)",
    img: 'portfolio3.jpeg',
    link: 'https://poetic-conkies-4835e0.netlify.app/',
  },
  {
    title: "Clone Demo Frontend Website",
    img: 'portfolio4.png',
    link: 'https://ngofound.netlify.app/',
  },
];

export default function Portfolio() {
  const settings = {
    infinite: true,     //the loop goes infinitely 
    speed: 3000,        //slide transition speed
    slidesToShow: 3,    //3 slides in the screen
    slidesToScroll: 1,  //moves 1 slide at a time
    autoplay: true,     //starts sliding automatically
    autoplaySpeed: 3000,//changes slide in 3 seconds
    cssEase: "linear",
    pauseOnHover: true, //pauses automatically when mouse hovers2
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="portfolio-section" id="Portfolio">
      <div className="section-title">
        <h1>My Portfolio</h1>
        <p>Let me showcase my works and skills</p>
        <div className="underline"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
      <Slider {...settings}>      
        {portfolioItems.map((item, idx) => (
          <div className="portfolio-card" key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} className="portfolio-img" />
            </a>
            <p className='para'>{item.title}</p>
          </div>
        ))}
      </Slider>
    </motion.div>
    </section>
  );
}
