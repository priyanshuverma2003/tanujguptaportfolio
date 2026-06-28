"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar, Award } from "lucide-react";
import "./Experience.css";
import ThreeDWrapper from "./ThreeDWrapper";

const TIMELINE_ITEMS = [
  {
    role: "Senior Graphic Designer",
    company: "Scroll Mantra, Gurugram",
    period: "2025 - Present",
    desc: "Leading end-to-end visual design including social media creatives, branding, and logo identity systems for brands such as Elanpro, T10, Shiprocket, Panasonic, and others, ensuring strategic consistency and high-quality execution across digital platforms.",
  },
  {
    role: "Graphic Designer & Video Editor",
    company: "Niyat Films, CR Park",
    period: "2023 - 2025",
    desc: "Produced static social media posts, advertisement videos, YouTube content, Instagram reels, and Instagram stories for clients including Label.m, Alcis, Exude, DP World, No Strings Couture, Siansh, Shyam Garments, and several others.",
  },
  {
    role: "Freelance Graphic Designer & Video Editor",
    company: "Self-Employed",
    period: "2021 - 2023",
    desc: "Crafted lyrical music videos, collaborated with College Duniya, produced promotional videos, provided video editing services for vloggers, designed logos, and edited reels for event management company Fuel India.",
  },
  {
    role: "Graphic Designer",
    company: "Digimaverick Pvt. Ltd., Kapasehra",
    period: "2020 - 2021",
    desc: "Managed social media by creating posts, crafting videos, and editing ecommerce product images for various clients.",
  },
  {
    role: "Graphic Designer",
    company: "MID Advisor Corporate Services",
    period: "2019 - 2020",
    desc: "Designed professional templates, brochures, and flyers for corporate clients and marketing campaigns.",
  },
];

export default function Experience() {
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
    <ThreeDWrapper>
      <section id="experience" className="section" ref={sectionRef}>
        <div className="section-content">
          <div className="reveal-on-scroll">
            <h2 className="section-title">
              <Award className="section-title-icon" size={28} /> Career Journey
            </h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-track"></div>

            {TIMELINE_ITEMS.map((item, idx) => (
              <div key={idx} className="timeline-item reveal-on-scroll">
                <div className="timeline-node">
                  <Briefcase size={16} />
                </div>
                <div className="timeline-card glass-panel">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <h4 className="timeline-company">{item.company}</h4>
                    </div>
                    <div className="timeline-date-badge">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ThreeDWrapper>
  );
}
