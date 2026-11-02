'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const navLinks = [
  { href: '#home',         label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#experiences',  label: 'Experiences' },
  { href: '#videos',       label: 'Gallery' },
  { href: '#about',        label: 'About Us' },
  { href: '#contact',      label: 'Contact' },
];

const sectionIds = ['home', 'destinations', 'experiences', 'videos', 'about', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('home');
  const observersRef = useRef<IntersectionObserver[]>([]);

  // Sticky nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    observersRef.current.forEach(ob => ob.disconnect());
    observersRef.current = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const ob = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) setActiveId(id);
          });
        },
        { rootMargin: '-45% 0px -50%' }
      );
      ob.observe(el);
      observersRef.current.push(ob);
    });

    return () => observersRef.current.forEach(ob => ob.disconnect());
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav id="nav" className={scrolled ? 's' : ''}>
      <div className="wrap">
        <a href="#home" className="logo" aria-label="Sree Travel Deals home">
          <i>S</i>
          <span>Sree<small>Travel Deals</small></span>
        </a>

        <button
          className={`burger${menuOpen ? ' x' : ''}`}
          id="bg"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`links${menuOpen ? ' on' : ''}`} id="lk">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeId === href.slice(1) ? 'on' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="btn o" href="#contact" onClick={closeMenu}>
            Plan Your Trip
          </a>
        </div>
      </div>
    </nav>
  );
}

