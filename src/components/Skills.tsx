"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Video, Wand2 } from "lucide-react";
import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    id: "design",
    label: "Design",
    icon: <Palette size={20} />,
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 92 },
      { name: "Adobe Lightroom", level: 88 },
      { name: "Adobe Firefly", level: 82 },
      { name: "Brand Identity Design", level: 90 },
    ],
  },
  {
    id: "video",
    label: "Video Editing",
    icon: <Video size={20} />,
    skills: [
      { name: "Adobe Premiere Pro", level: 93 },
      { name: "Adobe After Effects", level: 90 },
      { name: "Motion Graphics", level: 85 },
      { name: "Color Grading", level: 88 },
      { name: "YouTube & Reels Content", level: 92 },
    ],
  },
  {
    id: "tools",
    label: "AI & Tools",
    icon: <Wand2 size={20} />,
    skills: [
      { name: "Major AI Tools", level: 85 },
      { name: "Social Media Strategy", level: 90 },
      { name: "Ecommerce Design", level: 82 },
      { name: "Logo Design", level: 92 },
      { name: "Print & Digital Media", level: 88 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("design");
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

  const activeCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="section-content">
        <div className="reveal-on-scroll">
          <h2 className="section-title">
            <Palette className="section-title-icon" size={28} /> Creative Toolkit
          </h2>
        </div>

        <div className="skills-container reveal-on-scroll">
          {/* Tab Selector */}
          <div className="skills-tabs">
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`skill-tab-btn ${activeTab === category.id ? "active" : ""}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <div className="skills-panel glass-panel">
            <div className="skills-grid">
              {activeCategory?.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-bar"
                      style={{ "--target-width": `${skill.level}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
