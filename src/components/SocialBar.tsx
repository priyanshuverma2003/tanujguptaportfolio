"use client";

import { Mail, Phone, ArrowUpRight, Share2 } from "lucide-react";
import "./SocialBar.css";

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const SOCIAL_LINKS = [
  {
    icon: <BehanceIcon />,
    href: "https://www.behance.net/tanujgupta",
    label: "Behance",
    handle: "@tanujgupta",
    desc: "View my design portfolio & case studies",
    gradient: "linear-gradient(135deg, #1769ff, #0057ff)",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://linkedin.com",
    label: "LinkedIn",
    handle: "Tanuj Gupta",
    desc: "Connect with me professionally",
    gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
  },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com",
    label: "Instagram",
    handle: "@tanujgupta",
    desc: "Follow my creative journey & behind the scenes",
    gradient: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    icon: <Phone size={28} />,
    href: "https://wa.me/919971091605",
    label: "WhatsApp",
    handle: "+91 99710 91605",
    desc: "Quick chat for project inquiries",
    gradient: "linear-gradient(135deg, #25d366, #128c7e)",
  },
  {
    icon: <Mail size={28} />,
    href: "mailto:tanujgupta@example.com",
    label: "Email",
    handle: "tanujgupta@example.com",
    desc: "Send me a detailed project brief",
    gradient: "linear-gradient(135deg, #ea4335, #fbbc05)",
  },
];

export default function SocialBar() {
  return (
    <>
      {/* Social Media Section */}
      <section id="socials" className="section social-section">
        <div className="section-content">
          <h2 className="section-title">
            <Share2 size={32} className="section-title-icon" />
            Let&apos;s Connect
          </h2>
          <p className="social-section-lead">
            Follow me on social media to stay updated with my latest work, design tips, and creative journey.
          </p>

          <div className="social-cards-grid">
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="social-card-icon" style={{ background: link.gradient }}>
                  {link.icon}
                </div>
                <div className="social-card-info">
                  <h3>{link.label}</h3>
                  <span className="social-handle">{link.handle}</span>
                  <p>{link.desc}</p>
                </div>
                <ArrowUpRight size={20} className="social-card-arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer-bar">
        <p>© {new Date().getFullYear()} Tanuj Gupta. All rights reserved.</p>
      </footer>
    </>
  );
}
