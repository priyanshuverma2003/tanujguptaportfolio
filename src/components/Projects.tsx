"use client";

// Hero images enabled and paint icon removed
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
// Ensure hero images are displayed
import brandImg from "../assets/highlights/brand_identity.jpg";
import socialImg from "../assets/highlights/social_media.jpg";
import videoImg from "../assets/highlights/video_production.jpg";



const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
);

const PROJECTS_DATA = [
  {
    title: "Brand Identity",
    desc: "Complete brand identity systems including logo design, color palettes, typography, and social media guidelines for Elanpro and T10 at Scroll Mantra.",
    tech: ["Illustrator", "Photoshop", "Branding", "Logo Design"],
    demoUrl: "https://www.behance.net/tanujgupta",
    gradient: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
  },
  {
    title: "Social Media Campaign",
    desc: "Designed high-impact social media creatives, stories, and reels for Shiprocket and Panasonic, driving engagement and brand consistency across digital platforms.",
    tech: ["Photoshop", "After Effects", "Premiere Pro", "Social Media"],
    demoUrl: "https://www.behance.net/tanujgupta",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
  },
  {
    title: "Video Production",
    desc: "Produced advertisement videos, YouTube content, Instagram reels and stories for premium clients including Label.m, Alcis, Exude, and DP World.",
    tech: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
    demoUrl: "https://www.behance.net/tanujgupta",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #f97316 100%)",
  },
  {
    title: "Freelance Creative Works",
    desc: "Lyrical music videos, promotional content for College Duniya, logo designs, and reels for Fuel India event management — a diverse range of freelance projects.",
    tech: ["Photoshop", "Premiere Pro", "Illustrator", "Lightroom"],
    demoUrl: "https://www.behance.net/tanujgupta",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  },
];

const HERO_IMAGES = [
  brandImg,
  socialImg,
  videoImg,
];

export default function Projects() {
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
    <section id="projects" className="section" ref={sectionRef}>
      <div className="section-content">
        <div className="reveal-on-scroll">
          <h2 className="section-title">
              Portfolio Highlights
          </h2>
        </div>

        <div className="projects-grid reveal-on-scroll">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              {/* Project Preview visual banner */}
              <div className="project-preview-banner" style={{
                  backgroundImage: `url(${HERO_IMAGES[idx] || project.gradient})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>
                <div className="preview-mesh"></div>
  
              </div>

              {/* Project content */}
              <div className="project-info-block">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links Footer */}
                <div className="project-links">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary-style"
                    title="View on Behance"
                  >
                    <BehanceIcon />
                    <span>View on Behance</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
