import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Timeline from "./components/Timeline";
import Projects from "./components/Project";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Portfolio() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "#0a1628",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Navbar scrollTo={scrollTo} />

      <div ref={heroRef}>
        <Hero scrollTo={scrollTo} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
        </div>
     
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
