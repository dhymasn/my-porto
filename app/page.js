// app/page.js
"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnicalSkills from "../components/TechnicalSkills";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { translations } from "./data/translations";

export default function Home() {
  // State bahasa dengan default 'EN'
  const [lang, setLang] = useState("EN");

  // Ambil data terjemahan sesuai bahasa aktif (fallback ke EN jika data tidak ada)
  const t = translations[lang] || translations["EN"];

  // 1. Simpan dan muat pilihan bahasa terakhir dari localStorage (opsional)
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLang");
    if (savedLang && (savedLang === "EN" || savedLang === "ID")) {
      setLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("preferredLang", newLang);
  };

  // 2. IntersectionObserver untuk animasi '.reveal' saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        );
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar menerima state bahasa, callback ganti bahasa, & data teks Navbar */}
      <Navbar 
        currentLang={lang} 
        onLanguageChange={handleLanguageChange} 
        t={t.nav} 
      />
      <Hero t={t.hero} />
      <TechnicalSkills t={t.skills} />
      <Portfolio t={t.portfolio} />
      <Experience t={t.experience} />
      <Contact t={t.contact} />
    </>
  );
}