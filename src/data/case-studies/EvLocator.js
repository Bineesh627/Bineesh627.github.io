import React from 'react';

export const EvLocatorCaseStudy = (
  <>
    <h1>ev-stations-locator: Charge Outlet Map Guide</h1>

    <p>
      A real-time mapping workspace built to reduce range anxiety for EV drivers. Incorporates current coordinates to locate charging outlets, filter by plug categories, and build map route steps.
    </p>

    <h2>The Challenge</h2>
    <p>
      Public charging infrastructure coordinates change frequently, and drivers require filtered views based on connector formats and station availability.
    </p>

    <h2>The Solution</h2>
    <p>
      Integrated Google Maps API with responsive location triggers that fetch nearby markers, display distance profiles, and offer direct driving instructions.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Map interface:</strong> Responsive coordinate tracking using Google Maps directions layers.</li>
      <li><strong>Hardware filters:</strong> Real-time plugin categorization based on connector variables (CCS, CHAdeMO, Type 2).</li>
      <li><strong>Geolocation lookup:</strong> Instantly pinpoints current client coordinates for quick distance sorting.</li>
    </ul>

    <blockquote>
      <p>
        "Integrating responsive plug hardware sorting filters cut charger navigation lookup steps down to a single button press."
      </p>
    </blockquote>
  </>
);
