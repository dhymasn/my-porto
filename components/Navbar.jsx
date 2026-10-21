// components/Navbar.jsx
'use client';

import React, { useState } from 'react';

export default function Navbar({ currentLang, onLanguageChange, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ID', label: 'Bahasa Indonesia' },
  ];

  const handleSelectLanguage = (lang) => {
    onLanguageChange(lang.code);
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">Dhymas Nanda</div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">{t?.about || 'About'}</a></li>
            <li><a href="#stack">{t?.stack || 'Stack'}</a></li>
            <li><a href="#portfolio">{t?.portfolio || 'Portfolio'}</a></li>
            <li><a href="#experience">{t?.experience || 'Experience'}</a></li>
          </ul>

          <div className="lang-switcher">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-globe"></i>
              <span className="lang-code-btn">{currentLang}</span>
              <i className={`fa-solid fa-chevron-down chevron ${isOpen ? 'rotate' : ''}`}></i>
            </button>

            {isOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                    onClick={() => handleSelectLanguage(lang)}
                  >
                    <span className="lang-code">{lang.code}</span>
                    <span className="lang-label">{lang.label}</span>
                    {currentLang === lang.code && (
                      <i className="fa-solid fa-check check-icon"></i>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}