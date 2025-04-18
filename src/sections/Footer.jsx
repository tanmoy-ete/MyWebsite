import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-text">
            Do you want to know more about me? Contact me anytime. I will try my best to provide you with valid informations<br /><br />
            Address: Rajshahi, Bangladesh.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Any queries?</h3>
          <p className="footer-text">Ask me any questions</p>
          <div className="newsletter-form">
            <input 
              type="text" 
              placeholder="Enter your question here" 
              className="text-input"
            />
            <button className="subscribe-btn" onclick="window.location.href='mailto:tanmoydebnath2204045@gmail.com'" >Send</button>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Me</h3>
          <p className="footer-text">Let us be social</p>
          <div className="social-icons-1">
            <a href="https://www.facebook.com/share/1AUMLWYFN1/" className="social-icon-1"><FaFacebook /></a>
            <a href="https://x.com/Tanmoy2204045" className="social-icon-1"><FaTwitter /></a>
            <a href="https://www.instagram.com/tanmoy_6987/profilecard/?igsh=MXB3MHJyNXJtNzNubQ==" className="social-icon-1"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/tanmoy-debnath-0b0930322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon-1"><FaLinkedin /></a>
            <a href="https://github.com/tanmoy-ete" target='_blank' className='social-icon-1'><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright ©2025 All rights reserved 
        </p>
      </div>
    </footer>
  );
};

export default Footer;