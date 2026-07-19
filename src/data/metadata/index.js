import { pagesMetadata } from './pagesMetadata';
import { projectsMetadata } from './projectsMetadata';
import { blogsMetadata } from './blogsMetadata';

/**
 * Site-wide fallback defaults aligned with public/index.html metadata.
 */
export const defaultMetadata = {
  title: "", // Fallback will use the site's default full title: "Bineesh S — AI Developer, Cybersecurity Expert & Tech Entrepreneur"
  description: "Bineesh S is a tech entrepreneur, AI developer, and cybersecurity specialist. Founder of Fusintech and Co-founder & COO of Corepro Techno LLP. Explore projects, certifications, and blogs.",
  keywords: "Bineesh S, Bineesh627, Fusintech, Corepro Techno LLP, Portfolio, Founder, COO, Full-Stack Developer, AI Expert, Python Developer, Cybersecurity, Penetration Testing, Ethical Hacking, Machine Learning, Django, React, React Native, Kerala, India",
  image: "/logo512.png",
  type: "website"
};

export {
  pagesMetadata,
  projectsMetadata,
  blogsMetadata
};
