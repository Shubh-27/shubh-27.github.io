'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useScrollDirection, useScrollSpy } from '@/lib/hooks';

const NAV_SECTIONS = ['capabilities', 'experience', 'featured-projects', 'contact'];

export default function Header({ brand }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isVisible, isScrolled } = useScrollDirection({ isLocked: isNavOpen });
  const [activeSection, setActiveSection] = useScrollSpy(NAV_SECTIONS);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navLinks = [
    { label: 'Skills', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`site ${!isVisible ? 'nav-hidden' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
      role="banner"
    >
      <nav className="wrap" aria-label="Main Navigation">
        <a href="#overview" className="nav-brand-link" onClick={closeNav}>
          <div className="nav-name">
            {brand.name}
          </div>
        </a>

        <div className="nav-right">
          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveSection(sectionId);
                      closeNav();
                    }}
                    className={isActive ? 'active' : ''}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="nav-resume-item">
              <a
                href="/resume.pdf"
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
