"use client";
import { useEffect, useRef } from "react";
import "./ThreeDWrapper.css";

type Props = {
  children: React.ReactNode;
};

const ThreeDWrapper: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      const rotateY = ((x - halfW) / halfW) * 10; // max ±10deg
      const rotateX = ((halfH - y) / halfH) * 10;
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="three-d-wrapper" ref={containerRef}>
      {children}
    </div>
  );
};

export default ThreeDWrapper;
