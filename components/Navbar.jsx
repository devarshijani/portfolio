'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          devarshi<b>.jani</b>
        </a>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          menu
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-cta"
            href="/Devarshi_Jani_Resume.pdf"
            download="Devarshi_Jani_Resume.pdf"
            onClick={closeMenu}
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
