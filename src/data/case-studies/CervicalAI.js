import React from 'react';

export const CervicalAICaseStudy = (
  <>
    <h1>cervical_ai: Biomedical Vision Support System</h1>

    <p>
      A computer-vision project assisting medical practitioners. Employs deep neural networks to inspect slide images and highlight potential diagnostic indicators.
    </p>

    <h2>The Challenge</h2>
    <p>
      Early screening in low-resource environments suffers from lack of specialists, requiring high-quality machine assistance models.
    </p>

    <h2>The Solution</h2>
    <p>
      Configured pre-trained image classifiers on cellular datasets, fine-tuning final layers to score anomalies and generate class activation maps.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>CNN Image Classifier:</strong> Deep convolutional layers optimized to score image anomalies.</li>
      <li><strong>CAM Overlay Scans:</strong> Generates visual heatmap layers highlighting regions of high classification interest.</li>
      <li><strong>Secure Upload System:</strong> Client portal to upload slides securely with metadata filters.</li>
    </ul>

    <blockquote>
      <p>
        "Deep convolutional model fine-tuning yielded a validation accuracy rate of 94% on clinical test slides."
      </p>
    </blockquote>
  </>
);
