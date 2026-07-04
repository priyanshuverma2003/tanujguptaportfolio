// src/components/BackToTop.tsx
"use client";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

export default function BackToTop() {
  return (
    <a href="#home" className="back-to-top" aria-label="Back to top">
      <ArrowUp size={24} />
    </a>
  );
}
