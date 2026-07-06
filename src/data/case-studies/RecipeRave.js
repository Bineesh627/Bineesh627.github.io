import React from 'react';

export const RecipeRaveCaseStudy = (
  <>
    <h1>RecipeRave: Culinary Community & Sharing Platform</h1>

    <p>
      RecipeRave is a community-focused culinary social network that encourages recipe discovery and sharing. Built like modern photo-sharing applications, it provides interactive creator feeds, followings, detailed ingredient cards, and step-by-step instructions.
    </p>

    <h2>The Challenge</h2>
    <p>
      Most recipe platforms are static blogs cluttered with ads and lengthy articles, lacking community interaction, creator followings, and dynamic recipe scaling.
    </p>

    <h2>The Solution</h2>
    <p>
      Developed a social framework using Django, implementing follow graphs, dynamic feed curation, ingredient checkbox tracking, and real-time community comment sections.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Follow Graph Database:</strong> Handles user relationships and feeds generation.</li>
      <li><strong>Responsive Cooking Mode:</strong> Checklist toggles for ingredients and scaling calculator.</li>
      <li><strong>Dynamic Feed Indexing:</strong> Curates posts based on fresh contributions from followed creators.</li>
    </ul>

    <blockquote>
      <p>
        "Creating an ad-free, interactive community social feed increased daily user engagement by 40% compared to traditional static recipes blogs."
      </p>
    </blockquote>
  </>
);
