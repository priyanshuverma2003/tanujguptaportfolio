import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="container-main">
      {/* Custom Trailing Mouse Cursor */}
      <CustomCursor />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Social Icons Floating Sidebar */}
      <SocialBar />

      {/* Scroll Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
