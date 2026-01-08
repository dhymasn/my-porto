
"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}
