import "./index.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}

export default App;
