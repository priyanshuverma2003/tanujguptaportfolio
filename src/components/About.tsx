"use client";

import { useEffect, useRef } from "react";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import "./About.css";

export default function About() {
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
    <section id="about" className="section" ref={sectionRef}>
      <div className="section-content">
        <div className="reveal-on-scroll">
          <h2 className="section-title">
            <User className="section-title-icon" size={28} /> About Me
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro reveal-on-scroll">
            <p className="about-text-lead">
              Experienced Graphic Designer and Video Editor adept at delivering high-quality projects on time and within budget.
            </p>
            <p className="about-text-body">
              Strategic and innovative approach blending technical expertise with aesthetic flair. Strong communication skills enable seamless teamwork. Committed to staying current with industry trends, dedicated to making a lasting impact.
            </p>
            <p className="about-text-body">
              When I'm not designing, I'm usually exploring new creative techniques, experimenting with AI-powered design tools, or crafting compelling video content.
            </p>

            <div className="about-details-list">
              <div className="detail-item">
                <MapPin className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">Location:</span>
                  <span className="detail-val">Mehrauli, New Delhi, India</span>
                </div>
              </div>
              <div className="detail-item">
                <Briefcase className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">Experience:</span>
                  <span className="detail-val">6+ Years (Design & Video)</span>
                </div>
              </div>
              <div className="detail-item">
                <GraduationCap className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">Education:</span>
                  <span className="detail-val">B.Com, University of Delhi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-cards-container reveal-on-scroll">
            <div className="profile-glass-card glass-panel">
              <div className="profile-overlay-circle"></div>
              <div className="profile-header">
                <div className="profile-avatar-placeholder">
                  {/* Decorative logo */}
                  <span className="avatar-letter">T</span>
                </div>
                <div>
                  <h3 className="profile-name">Tanuj Gupta</h3>
                  <p className="profile-title">Graphic Designer & Video Editor</p>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-card">
                  <span className="stat-num">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">30+</span>
                  <span className="stat-label">Brands Served</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Client Smiles</span>
                </div>
              </div>
              <div className="profile-quote">
                "I don't just design visuals; I create brand experiences that leave a lasting impression."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
