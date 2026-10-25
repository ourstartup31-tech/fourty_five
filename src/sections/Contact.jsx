import React from 'react';
import { companyConfig } from '../data/company';
import '../styles/contact.css';

/**
 * 45° CONTACT & CONVERSATION SECTION
 * -------------------------------------------------------------
 * Editorial closing section inviting clients to start a conversation.
 * Direct mailto link, transparent contact details, and sleek footer.
 */
export default function Contact() {
  const mailtoUrl = `mailto:${companyConfig.contact.email}?subject=${companyConfig.contact.mailtoSubject}&body=${companyConfig.contact.mailtoBody}`;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-headline">
      <div className="container">
        <div className="contact-card">
          {/* Subtle Ambient light field */}
          <div className="contact-ambient" aria-hidden="true"></div>

          <div className="contact-header">
            <div className="section-tag" aria-hidden="true">
              04 // DIRECT ENGAGEMENT
            </div>

            <h2 id="contact-headline" className="contact-headline">
              LET'S FIND YOUR TRAJECTORY.
            </h2>

            <p className="contact-subtext">
              Whether you need to reposition an established brand or build a custom software system to remove operational friction, we start by understanding what is actually happening.
            </p>
          </div>

          <div className="contact-actions">
            <a href={mailtoUrl} className="btn-contact-primary">
              <span>Start a Conversation</span>
              <span className="arrow-45" aria-hidden="true">↗</span>
            </a>

            <a href={`mailto:${companyConfig.contact.email}`} className="contact-direct-email">
              <span className="email-label">DIRECT INQUIRY</span>
              <span className="email-val">{companyConfig.contact.email}</span>
            </a>
          </div>

          <div className="contact-meta-grid">
            <div className="meta-item">
              <span className="meta-title">APPROACH</span>
              <span className="meta-desc">Direct partnership with creative directors and systems engineers.</span>
            </div>

            <div className="meta-item">
              <span className="meta-title">LOCATIONS</span>
              <span className="meta-desc">Operating internationally across creative & technology disciplines.</span>
            </div>

            <div className="meta-item">
              <span className="meta-title">COMMUNICATION</span>
              <span className="meta-desc">Written inquiries answered within 24–48 business hours.</span>
            </div>
          </div>
        </div>

        {/* Editorial Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="footer-logo" aria-label="45° Home">
                45<span className="brand-degree">°</span>
              </a>
              <span className="footer-tagline">Creative Technology Company</span>
            </div>

            <nav className="footer-nav" aria-label="Footer Navigation">
              {companyConfig.navItems.map((item) => (
                <a key={item.label} href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="footer-social">
              {companyConfig.social.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © {new Date().getFullYear()} 45° Degrees. All rights reserved.
            </span>
            <span className="footer-geometry-mark" aria-hidden="true">
              ∠ 45.0° TRAJECTORY LOCKED
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
