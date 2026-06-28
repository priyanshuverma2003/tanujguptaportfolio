import React from "react";
import { FaBehance, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./SocialLinks.css";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://www.behance.net/tanujgupta" target="_blank" rel="noopener noreferrer" aria-label="Behance">
        <FaBehance size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={20} />
      </a>
      <a href="https://wa.me/919971091605" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp size={20} />
      </a>
      <a href="mailto:tanujgupta@example.com" aria-label="Email">
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
