   
// page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // You can use react-icons for easy SVG icons.
import Image from "next/image";
import './hero.css'; // Import the CSS file

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hero-container">
      {/* Add the background image */}
      <Image
        src="/hero-front.png"
        alt="Background Image"
        className="hero-background-image"
        style={{ transform: 'translateX(30%)' }}
        width={320}
        height={300}
      />

      {/* Links Section on the Left Side for Large Screens */}
      <div className="links-section">
        <Link href="/" className="link-item">
          <Image src="/home.png" alt="Home" className="link-icon" width={32} height={32} />
          <span className="tooltip">Home</span>
        </Link>
        <Link href="/projects" className="link-item">
          <Image src="/2project.png" alt="Projects" className="link-icon" width={32} height={32} />
          <span className="tooltip">Projects</span>
        </Link>
        <Link href="/skills" className="link-item">
          <Image src="/1skill.png" alt="Skills" className="link-icon" width={32} height={32} />
          <span className="tooltip">Skills</span>
        </Link>
        <Link href="/contact" className="link-item">
          <Image src="/1contact.png" alt="Contact" className="link-icon" width={32} height={32} />
          <span className="tooltip">Contact</span>
        </Link>
        <Link href="https://github.com/drnaylayousuf?tab=repositorie" className="link-item" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" className="link-icon" width={32} height={32} />
          <span className="tooltip">GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/naila-yousuf-16a2562ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="link-item" target="_blank" rel="noopener noreferrer">
          <Image src="/link.png" alt="LinkedIn" className="link-icon" width={32} height={32} />
          <span className="tooltip">LinkedIn</span>
        </Link>
      </div>

      {/* Heading Section on the Right Side */}
      <div className="heading-section">
      <h1 className="main-title fade-in-right delay-0">
    Hello, I am <span className="gradient-text">NAYLA</span>
</h1>

        <div className="description-section">
          <h3 className="subtitle fade-in-right delay-1">I am a Front and Back End Developer</h3>
          <div className="description-text fade-in-right delay-2">
            <p>
              I am a dedicated developer with a passion for creating innovative solutions. I thrive in collaborative environments and continuously seek to enhance my skills. My goal is to build applications that improve user experiences and solve real-world problems.
            </p>

            <button className="projects-button fade-in-right delay-3">
              <Link href="/projects">My Projects</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Icons */}
      <footer className="footer-icons">
        <Link href="https://github.com/drnaylayousuf?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/naila-yousuf-16a2562ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </Link>
        <Link href="mailto:naylayousuf@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </Link>
      </footer>
    </div>
  );
}