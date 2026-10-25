import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Domains from './sections/Domains';
import SelectedWork from './sections/SelectedWork';
import Approach from './sections/Approach';
import Contact from './sections/Contact';
import './styles/variables.css';
import './styles/base.css';

/**
 * 45° MAIN APPLICATION
 * -------------------------------------------------------------
 * Visual-first layout sequence:
 * 1. Opening trajectory / hero
 * 2. Creative and Technology domains
 * 3. Selected work / image gallery
 * 4. Concise visual methodology (Study → Shape → Create → Deliver)
 * 5. Contact & Editorial Footer
 */
export default function App() {
  return (
    <div className="app-layout">
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Fixed Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <Domains />
        <SelectedWork />
        <Approach />
        <Contact />
      </main>
    </div>
  );
}
