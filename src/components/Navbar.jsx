import React, { useState, useEffect } from 'react';
import { companyConfig } from '../data/company';
import '../styles/navbar.css';

/**
 * 45° NAVBAR COMPONENT
 * -------------------------------------------------------------
 * Displays the 45° brand mark, desktop navigation links,
 * the primary mailto conversation CTA, and an accessible mobile drawer.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll position to add frosted glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key press for keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Construct secure mailto link with pre-filled subject
  const mailtoUrl = `mailto:${companyConfig.contact.email}?subject=${companyConfig.contact.mailtoSubject}&body=${companyConfig.contact.mailtoBody}`;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Mark */}
        <a href="#" className="brand-logo" aria-label="45° Home">
          45<span className="brand-degree">°</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu-desktop">
            {companyConfig.navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a href={mailtoUrl} className="btn-nav">
            <span>Start a Conversation</span>
            <span className="arrow-45" aria-hidden="true">↗</span>
          </a>

          {/* Accessible Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="mobile-toggle-bars" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-nav-list">
          {companyConfig.navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className="arrow-45" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href={mailtoUrl}
            className="btn-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Start a Conversation</span>
            <span className="arrow-45" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
