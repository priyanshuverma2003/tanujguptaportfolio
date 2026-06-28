"use client";

import { Mail, Phone } from "lucide-react";
import "./SocialBar.css";

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const SOCIAL_LINKS = [
  { icon: <BehanceIcon />, href: "https://www.behance.net/tanujgupta", label: "Behance" },
  { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Phone size={20} />, href: "https://wa.me/919971091605", label: "WhatsApp" },
  { icon: <Mail size={20} />, href: "mailto:tanujgupta@example.com", label: "Email" },
];

export default function SocialBar() {
  return (
    <>

      {/* Mobile Social Links Section (Visible on Mobile only, before footer) */}
      <div className="mobile-socials-container">
        <h3 className="mobile-socials-title">Let's Connect</h3>
        <div className="mobile-socials-links">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-btn"
              aria-label={link.label}
            >
              {link.icon}
              <span className="mobile-social-label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer-bar">
        <p>© {new Date().getFullYear()} Tanuj Gupta. All rights reserved.</p>
      </footer>
    </>
  );
}
