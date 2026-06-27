"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Controls */}
      <div className="floating-controls">
        <ThemeToggle />
        <button
          className="fab-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div className={`overlay-menu ${isOpen ? "open" : ""}`}>
        <div className="overlay-menu-bg"></div>
        
        <div className="overlay-content">
          <nav className="overlay-nav-links">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="overlay-nav-link"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="overlay-nav-cta" 
              onClick={handleLinkClick}
              style={{ animationDelay: `${NAV_ITEMS.length * 0.08}s` }}
            >
              Hire Me <ArrowUpRight size={32} />
            </a>
          </nav>

          <div className="overlay-footer">
            <span className="brand-logo"><span>T</span>ANUJ</span>
            <p>Graphic Designer & Video Editor</p>
          </div>
        </div>
      </div>
    </>
  );
}
