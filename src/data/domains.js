/**
 * 45° TWO DOMAINS DATA
 * -------------------------------------------------------------
 * Centralized data for the Creative and Technology domain visual showcases.
 * Edit image paths, tags, titles, and concise capabilities here.
 */

export const domainsData = {
  tag: "01 // TWO DIRECTIONS. ONE PHILOSOPHY.",
  headline: "CREATIVE DIRECTION & TECHNOLOGY SYSTEMS.",
  subtext: "Different mediums solving the same fundamental challenge: moving a business forward through intentional design.",
  
  creative: {
    domainId: "creative",
    tag: "Creative Direction & Brand",
    headline: "Articulating identity. Earning attention.",
    description: "Brand campaigns, visual identity, storytelling, film, and audiovisual content designed to establish enduring market presence.",
    // Image placeholder located in public/images/
    // REPLACE THIS ASSET with your high-res creative studio or brand photography
    imageSrc: "/images/creative_domain.jpg",
    imageAlt: "Creative domain architectural paper sculpture and directional lighting",
    paletteTheme: "violet-gold",
    capabilities: [
      "Brand Building & Strategy",
      "Art Direction & Identity",
      "Storytelling & Editorial Content",
      "Video & Film Production",
      "Audiovisual Communication"
    ]
  },

  technology: {
    domainId: "technology",
    tag: "Technology & Business Systems",
    headline: "Replacing friction. Digitizing workflow.",
    description: "Digital products, business applications, data management, and workflow systems designed around how teams actually work.",
    // Image placeholder located in public/images/
    // REPLACE THIS ASSET with your high-res system dashboard or application UI
    imageSrc: "/images/technology_domain.jpg",
    imageAlt: "Technology domain transparent architectural interface on stone surface",
    paletteTheme: "blue-cobalt",
    capabilities: [
      "Web & Business Applications",
      "Internal Workflow Digitization",
      "Data Organization Systems",
      "Process Optimization Tools",
      "Operational Efficiency Systems"
    ]
  }
};
