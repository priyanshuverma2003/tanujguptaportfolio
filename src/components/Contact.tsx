"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, MessageSquare, Phone, ArrowUpRight } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success status after 5s
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

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
            <h3 className="contact-lead-title">Let's create something amazing together.</h3>
            <p className="contact-lead-desc">
              Have a design project in mind, need a video edited, or want to elevate your brand's visual identity? Send me a message and I'll get back to you within 24 hours.
            </p>

            <div className="contact-channels">
              <a href="mailto:tanujgupta1234.tg@gmail.com" className="channel-card glass-panel">
                <div className="channel-icon-box purple-accent">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">Email Me</span>
                  <span className="channel-val">tanujgupta1234.tg@gmail.com</span>
                </div>
                <ArrowUpRight className="channel-link-arrow" size={16} />
              </a>

              <a href="tel:+919971091605" className="channel-card glass-panel">
                <div className="channel-icon-box cyan-accent">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">Call / WhatsApp</span>
                  <span className="channel-val">+91 99710 91605</span>
                </div>
                <ArrowUpRight className="channel-link-arrow" size={16} />
              </a>
            </div>
          </div>

          <div className="contact-form-container reveal-on-scroll">
            <form onSubmit={handleFormSubmit} className="contact-form glass-panel">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  className="form-input"
                  placeholder=" " /* Hack for CSS label floating */
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="form-name" className="form-label">
                  Your Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="form-email" className="form-label">
                  Your Email
                </label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="form-message"
                  className="form-input text-area-input"
                  placeholder=" "
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="form-message" className="form-label">
                  Your Message
                </label>
              </div>

              <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="form-feedback success">
                  Your message has been sent successfully! I will reach out soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="form-feedback error">
                  Something went wrong. Please try emailing directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
