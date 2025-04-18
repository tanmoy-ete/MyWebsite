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
    title: 'Beauty Pronounced',
    img: '/images/portfolio3.jpg',
    link: 'https://example.com/beauty',
  },
];

export default function Portfolio() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
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
