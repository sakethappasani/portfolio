import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="wrapper">
      <h2 className="timeline-title">Contact</h2>
      <p>If you'd like to connect, feel free to reach out via any of the platforms below:</p>

      <div className="contact-links">
        <a href="mailto:sakethappasani05@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
          <span>sakethappasani05@gmail.com</span>
        </a>
        <a href="https://github.com/sakethappasani" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>github.com/sakethappasani</span>
        </a>
        <a href="https://linkedin.com/in/sakethappasani" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <span>linkedin.com/in/sakethappasani</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
