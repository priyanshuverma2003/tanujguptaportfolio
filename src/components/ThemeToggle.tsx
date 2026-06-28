"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light");
      } else {
        // Ensure dark mode has no "light" class
        document.documentElement.classList.remove("light");
      }
    } else {
      // Check system preference
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) {
        setTheme("light");
        document.documentElement.classList.add("light");
      } else {
        // Default dark, ensure no "light" class
        document.documentElement.classList.remove("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    console.log('Toggle clicked, current theme:', theme);
    const nextTheme = theme === "dark" ? "light" : "dark";
    console.log('Next theme will be:', nextTheme);
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      console.log('Added light class');
    } else {
      document.documentElement.classList.remove("light");
      console.log('Removed light class');
    }
  };

  if (!mounted) {
    return <div className="theme-toggle-placeholder" />;
  }

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Moon size={24} className="moon-icon" />
      ) : (
        <Sun size={24} className="sun-icon" />
      )}
    </button>
  );
}
