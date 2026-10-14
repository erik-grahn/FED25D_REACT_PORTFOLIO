import "./index.css";

import Experience from "./components/Experience";
import About from "./components/About";
import Form from "./components/Form";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Form />
    </>
  );
}

export default App;
