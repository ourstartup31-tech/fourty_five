/**
 * 45° COMPANY DATA & CONFIGURATION
 * -------------------------------------------------------------
 * Visual-first editorial configuration:
 * Concise central headline, supporting line, navigation, and mailto settings.
 */

export const companyConfig = {
  name: "45°",
  legalName: "45 Degrees",
  tagline: "Ideas need the right trajectory.",
  description: "Creative direction and technology, shaped around real business problems.",
  
  // Navigation Links matching the visual-first flow
  navItems: [
    { label: "Domains", href: "#domains" },
    { label: "Selected Work", href: "#work" },
    { label: "Methodology", href: "#methodology" },
    { label: "Contact", href: "#contact" }
  ],

  // Contact Information
  contact: {
    email: "hello@45degrees.company",
    mailtoSubject: encodeURIComponent("Trajectory Inquiry — 45°"),
    mailtoBody: encodeURIComponent("Hello 45° Team,\n\nI would like to discuss our project direction with you.\n\nProject Scope (Creative / Technology):\nOverview:\nTimeline:\n\nLooking forward to speaking.")
  },

  // Hero Section Copy (Concise & Visual-First)
  hero: {
    tag: "Creative Technology Company",
    headline: "IDEAS NEED THE RIGHT TRAJECTORY.",
    subtext: "Creative direction and technology, shaped around real business problems.",
    primaryCta: "Start a Conversation",
    secondaryCue: "Explore Domains"
  },

  // Social Links
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "GitHub", href: "https://github.com" }
  ]
};
