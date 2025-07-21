// Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I’d love to connect! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out through any of the channels below.
      </p>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="contact-icon" />
          <span>Email:</span>
          <a href="mailto:vuyyuru.kirankumar@gmail.com">vuyyuru.kirankumar@gmail.com</a>
        </li>
        <li>
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn:</span>
          <a href="https://www.linkedin.com/in/kirankumarvuyyuru/" target="_blank" rel="noopener noreferrer">kirankumarvuyyuru/</a>
        </li>
        <li>
          <FaGithub className="contact-icon" />
          <span>GitHub:</span>
          <a href="https://github.com/kiranv926" target="_blank" rel="noopener noreferrer">github.com/kiranv926</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
