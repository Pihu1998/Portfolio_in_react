import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 font-body">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
