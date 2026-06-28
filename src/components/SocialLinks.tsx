import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./SocialLinks.css";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <Twitter size={20} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
