import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
// Contact component removed
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container-main">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* Contact section removed */}
      <Footer />
    </main>
  );
}

