import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to dynamically update document title and head metadata (SEO, OG, Twitter, Canonical).
 * 
 * @param {Object} metadata - Metadata options.
 * @param {string} metadata.title - The title prefix for the page.
 * @param {string} metadata.description - The page description.
 * @param {string} metadata.keywords - Keywords list.
 * @param {string} metadata.image - Relative or absolute image path for social previews.
 * @param {string} [metadata.type='website'] - Open Graph page type.
 */
export function useMetadata({ title, description, keywords, image, type = 'website' } = {}) {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "Bineesh S — AI Developer, Cybersecurity Expert & Tech Entrepreneur";
    document.title = title ? `${title} | Bineesh S` : baseTitle;

    // Helper function to create or update a meta tag
    const updateMetaTag = (attributeName, attributeValue, contentValue) => {
      if (contentValue === undefined || contentValue === null) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Helper function to create or update a link tag
    const updateLinkTag = (rel, hrefValue) => {
      if (!hrefValue) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefValue);
    };

    // Setup URLs & Defaults
    const baseUrl = 'https://bineeshs.vercel.app';
    const currentUrl = `${baseUrl}${location.pathname}${location.search}`;

    const defaultDesc = "Bineesh S is a tech entrepreneur, AI developer, and cybersecurity specialist. Founder of Fusintech and Co-founder & COO of Corepro Techno LLP. Explore projects, certifications, and blogs.";
    const defaultKeywords = "Bineesh S, Bineesh627, Fusintech, Corepro Techno LLP, Portfolio, Founder, COO, Full-Stack Developer, AI Expert, Python Developer, Cybersecurity, Penetration Testing, Ethical Hacking, Machine Learning, Django, React, React Native, Kerala, India";
    const defaultImage = `${baseUrl}/logo512.png`;

    const metaDesc = description || defaultDesc;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;
    const fullTitle = title ? `${title} | Bineesh S` : baseTitle;

    // 1. Basic Metadata
    updateMetaTag('name', 'description', metaDesc);
    updateMetaTag('name', 'keywords', metaKeywords);

    // 2. Open Graph / Facebook
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', metaDesc);
    updateMetaTag('property', 'og:image', metaImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);

    // 3. Twitter
    updateMetaTag('property', 'twitter:title', fullTitle);
    updateMetaTag('property', 'twitter:description', metaDesc);
    updateMetaTag('property', 'twitter:image', metaImage);
    updateMetaTag('property', 'twitter:url', currentUrl);

    // 4. Canonical Link
    updateLinkTag('canonical', currentUrl);
  }, [title, description, keywords, image, type, location.pathname, location.search]);
}

export default useMetadata;
