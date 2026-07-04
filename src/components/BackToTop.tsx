// src/components/BackToTop.tsx
"use client";
import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import "./BackToTop.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      <ArrowUpCircle size={28} />
    </a>
  );
}
