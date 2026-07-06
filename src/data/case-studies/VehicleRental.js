import React from 'react';

export const VehicleRentalCaseStudy = (
  <>
    <h1>Vehicle Rental Service: Fleet Management Platform</h1>

    <p>
      An enterprise fleet management system supporting multi-tier user logins, interactive booking timelines, real-time inventory adjustments, and billing calculations.
    </p>

    <h2>The Challenge</h2>
    <p>
      Managing vehicle inventory without double-bookings requires thread-safe transactions, real-time validation, and complex state charts.
    </p>

    <h2>The Solution</h2>
    <p>
      Constructed an event-driven system checking vehicle availability indexes prior to invoice creation, keeping fleet managers synced via socket notifications.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Locking mechanism:</strong> Validates inventory timeline records synchronously before transactions submit.</li>
      <li><strong>Role Access:</strong> Segregated user privileges (Admins, Managers, Clients).</li>
      <li><strong>Billing calculator:</strong> Dynamic calculation engine processing duration, season rates, and taxes.</li>
    </ul>

    <blockquote>
      <p>
        "Moving fleet inventory reconciliation to database locks resolved 100% of double-booking reservation conflicts."
      </p>
    </blockquote>
  </>
);
