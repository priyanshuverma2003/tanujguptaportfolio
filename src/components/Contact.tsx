"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaBehance } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealables = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    revealables?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="section-content">
        <div className="reveal-on-scroll">
          <h2 className="section-title">
            <MessageSquare className="section-title-icon" size={28} /> Get In Touch
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-on-scroll">
            <h3 className="contact-lead-title">Let&apos;s create something amazing together.</h3>
            <p className="contact-lead-desc">
              Have a design project in mind, need a video edited, or want to elevate your brand&apos;s visual identity? Send me a message and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="contact-channels">
              <a href="mailto:tanujgupta1234.tg@gmail.com" className="channel-card glass-panel">
                <div className="channel-icon-box purple-accent">
                  <FaEnvelope size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">Email Me</span>
                  <span className="channel-val">tanujgupta1234.tg@gmail.com</span>
                </div>
                <ArrowUpRight className="channel-link-arrow" size={16} />
              </a>

              <a href="tel:+919971091605" className="channel-card glass-panel">
                 <div className="channel-icon-box purple-accent">
                   <FaPhoneAlt size={20} />
                 </div>
                 <div className="channel-details">
                   <span className="channel-title">Call / WhatsApp</span>
                   <span className="channel-val">+91 99710 91605</span>
                 </div>
                <ArrowUpRight className="channel-link-arrow" size={16} />
              </a>

              <a href="https://www.linkedin.com/in/tanujgupta" className="channel-card glass-panel linkedin-card" target="_blank" rel="noopener noreferrer">
                  <div className="channel-icon-box purple-accent">
                     <FaLinkedinIn size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">LinkedIn</span>
                    <span className="channel-val">tanujgupta</span>
                  </div>
                  <ArrowUpRight className="channel-link-arrow" size={16} />
                </a>

              <a href="https://www.behance.net/tanujgupta" className="channel-card glass-panel" target="_blank" rel="noopener noreferrer">
                 <div className="channel-icon-box purple-accent">
                   <FaBehance size={20} />
                 </div>
                <div className="channel-details">
                  <span className="channel-title">Behance</span>
                  <span className="channel-val">tanujgupta</span>
                </div>
                <ArrowUpRight className="channel-link-arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
