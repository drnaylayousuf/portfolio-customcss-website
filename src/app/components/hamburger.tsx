"use client";

import Link from 'next/link';
import { useState } from 'react';
import './hamburger.css'; // Importing the CSS file

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main>
      <button onClick={toggleMenu} className="hamburger-button">
        <svg
          className="hamburger-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="menu-overlay">
          <nav className="menu">
            <ul className="menu-list">
              <li><Link href="/hero" className="menu-link" onClick={closeMenu}>HOME</Link></li>
              <li><Link href="/skills" className="menu-link" onClick={closeMenu}>Skills</Link></li>
              <li><Link href="/projects" className="menu-link" onClick={closeMenu}>Projects</Link></li>
              <li><Link href="/contact" className="menu-link" onClick={closeMenu}>Contact</Link></li>
              <li><button onClick={closeMenu} className="close-button">Close</button></li>
            </ul>
          </nav>
        </div>
      )}
    </main>
  );
}