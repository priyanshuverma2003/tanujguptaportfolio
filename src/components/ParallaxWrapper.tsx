import React, { useEffect, useRef } from "react";
import "./ParallaxWrapper.css";

interface Props {
  children: React.ReactNode;
}

const ParallaxWrapper: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const offset = window.scrollY * 0.1; // subtle 10% of scroll
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-wrapper" ref={containerRef}>
      {children}
    </div>
  );
};

export default ParallaxWrapper;
