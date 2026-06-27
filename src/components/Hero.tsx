"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Code, ArrowRight } from "lucide-react";
import "./Hero.css";

const ROLES = ["Graphic Designer", "Video Editor", "Brand Strategist"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROLES[roleIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-info">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Available for freelance & full-time</span>
          </div>

          <h2 className="hero-greeting">Hello, I'm</h2>
          <h1 className="hero-name">
            TANUJ <span>GUPTA</span>
          </h1>

          <div className="hero-role-wrapper">
            <span>A </span>
            <span className="hero-role-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            Experienced Graphic Designer and Video Editor adept at delivering high-quality projects on time and within budget. Strategic and innovative approach blending technical expertise with aesthetic flair.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              View Portfolio <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-outer-ring"></div>
          <div className="visual-inner-ring"></div>
          <div className="visual-cube-box">
            <div className="visual-core-glow">
              <Code size={40} className="visual-core-icon" />
            </div>
          </div>
          {/* Glowing particle blobs */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </div>

      <a href="#about" className="scroll-down-indicator" aria-label="Scroll Down">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
