import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/meoabrkq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'tanmoydebnath2204045@gmail.com',
          question: question,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setQuestion('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-text">
            Do you want to know more about me? Contact me anytime. I will try my best to provide you with valid information.<br /><br />
            Address: Rajshahi, Bangladesh.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Any queries?</h3>
          <p className="footer-text">Ask me any questions</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here" 
              className="text-input"
              required
            />
            <button 
              type="submit" 
              className="subscribe-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            {submitStatus === 'success' && (
              <p className="submit-success">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="submit-error">Failed to send message. Please try again.</p>
            )}
          </form>
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
            <a href="https://github.com/tanmoy-ete" target='_blank' rel='noopener noreferrer' className='social-icon-1'><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;