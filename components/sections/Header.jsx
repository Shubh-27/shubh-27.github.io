'use client';

import { useState, useEffect, useRef } from 'react';

import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header({ brand }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleNav = () => {
    setIsNavOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsVisible(true);
      }
      return next;
    });
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // When mobile menu is open, never hide header
      if (isNavOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
      } else if (currentScrollY <= 60) {
        // Always show near top of page
        setIsVisible(true);
        lastScrollY = currentScrollY;
      } else {
        const diff = currentScrollY - lastScrollY;
        // 10px threshold to prevent jitter
        if (Math.abs(diff) > 10) {
          if (diff > 0) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY = currentScrollY;
        }
      }

      // Active section scrollspy
      const sections = ['capabilities', 'experience', 'featured-projects', 'contact'];
      const isBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 80;

      if (isBottom) {
        setActiveSection('contact');
      } else {
        let current = '';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop - 150;
            if (currentScrollY >= top) {
              current = id;
            }
          }
        }
        setActiveSection(current);
      }

      ticking = false;
    };

    // Run once on mount to determine initial section
    updateScrollState();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavOpen]);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Skills', href: '#capabilities' },
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
