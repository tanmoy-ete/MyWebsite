import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='Hero-section' id='Home'>
      <div className="social-icons">
        <a href="https://www.facebook.com/share/1AUMLWYFN1/" target='_blank' rel="noopener noreferrer" className='social-icon'><FaFacebook /></a>
        <a href="https://www.instagram.com/tanmoy_6987/profilecard/?igsh=MXB3MHJyNXJtNzNubQ==" target='_blank' rel="noopener noreferrer" className='social-icon'><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/tanmoy-debnath-0b0930322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer" className='social-icon'><FaLinkedin /></a>
        <a href="https://x.com/Tanmoy2204045" target='_blank' rel="noopener noreferrer" className='social-icon'><FaTwitter /></a>
        <a href="https://github.com/tanmoy-ete" target='_blank' rel="noopener noreferrer" className='social-icon'><FaGithub /></a>
      </div>

      <div className="hero-content">
        <h2>Hello!!</h2>
        <h1>I am Tanmoy Debnath</h1>
        <p>
          I am a passionate Software Engineering Enthusiast, deeply driven to innovate and collaborate within the ever-evolving tech world. I am committed to mastering cutting-edge technologies and Artificial Intelligence, positioning myself as a future leader in intelligent systems and digital transformation.
        </p>
        <div className="learn-more-btn-1">
        <a 
          href="https://formsubmit.co/el/doreyi?subject=Hiring%20Request%20from%20Portfolio" 
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-btn"
          id='btn1'
        >
          Hire me
        </a>
        </div>
      </div>
      <div className="profile-photo">
        <img src="profile3.png" alt="Tanmoy Debnath" />
      </div>
    </section>
  );
}