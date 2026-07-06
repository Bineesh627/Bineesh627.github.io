import React from 'react';

export const FakeNewsCaseStudy = (
  <>
    <h1>fakenewsdetector: NLP Article Credibility Check</h1>

    <p>
      An AI-powered verification dashboard that analyzes news textual records. Using trained classification weights, it highlights questionable headings and semantic biases.
    </p>

    <h2>The Challenge</h2>
    <p>
      The rapid spread of misinformation makes manual verification impossible, requiring automated tools to check source text patterns.
    </p>

    <h2>The Solution</h2>
    <p>
      Trained classification algorithms on large sentiment matrices and loaded the models inside an lightweight Python API framework serving results to a visual dashboard.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Vector Classification:</strong> Processed raw text streams into TF-IDF vector matrices.</li>
      <li><strong>Credibility Meter:</strong> Confidence score calculator based on keyword checks and semantic profiles.</li>
      <li><strong>Dashboard metrics:</strong> Visual breakdown of article credibility metrics.</li>
    </ul>

    <blockquote>
      <p>
        "Employing a lightweight text parser combined with TF-IDF indexing enabled classification scans to return results in under 200 milliseconds."
      </p>
    </blockquote>
  </>
);
