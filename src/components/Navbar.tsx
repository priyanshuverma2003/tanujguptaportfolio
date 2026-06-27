"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span>T</span>ANUJ
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Hire Me <ArrowUpRight className="cta-icon" size={16} />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`navbar-mobile-drawer ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="mobile-nav-cta" onClick={handleLinkClick}>
            Hire Me <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
