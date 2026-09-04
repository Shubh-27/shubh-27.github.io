'use client';

import { useState } from 'react';

import ThemeToggle from './ThemeToggle';

export default function Header({ brand }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Skills', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site" role="banner">
      <nav className="wrap" aria-label="Main Navigation">
        <a href="#overview" className="nav-brand-link" onClick={closeNav}>
          <div className="nav-name">
            {brand.name}
          </div>
        </a>

        <div className="nav-right">
          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeNav}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-resume-item">
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-btn"
                onClick={closeNav}
              >
                <span>Resume</span>
                <span className="nav-resume-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>

          <ThemeToggle />

          <button
            className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
            id="navToggle"
            aria-expanded={isNavOpen}
            aria-controls="navLinks"
            aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            title={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleNav}
            type="button"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </nav>
    </header>
  );
}
