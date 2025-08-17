import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
