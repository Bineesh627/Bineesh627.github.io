import React from 'react';

export const MobileInfogaCaseStudy = (
  <>
    <h1>MobileInfoga: OSINT Phone Directory Recon Tool</h1>

    <p>
      MobileInfoGa is a powerful OSINT tool designed to gather comprehensive details about phone numbers. Utilizing various techniques and integrations, it can retrieve information such as country of origin, carrier details, and potential online associations.
    </p>

    <h2>The Challenge</h2>
    <p>
      Security reviews and spam trace tasks require manually cross-referencing information across scattered registries, which slow down investigations.
    </p>

    <h2>The Solution</h2>
    <p>
      Consolidated cell directory inquiries, country codes indices, and Telethon APIs into an automated python console wrapper that returns structured logs.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Telethon API integrations:</strong> Scripted telegram data-point lookup and contact lists querying.</li>
      <li><strong>Registry Scraper:</strong> Auto-extracts carrier allocations and geographic indexes.</li>
      <li><strong>CLI Layout:</strong> Rich terminal interface to output categorized diagnostics tables.</li>
    </ul>

    <blockquote>
      <p>
        "Consolidating multiple directory API scans into a single command wrapper reduced investigation cycles from 20 minutes to under 10 seconds."
      </p>
    </blockquote>
  </>
);
