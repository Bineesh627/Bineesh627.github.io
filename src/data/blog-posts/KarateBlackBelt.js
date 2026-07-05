import React from 'react';
import karateAward from '../../assets/img/blogs/karate_award.png';
import karateCertificate from '../../assets/img/blogs/karate_certificate.png';

export const KarateBlackBeltContent = (
  <>
    <h1>A Milestone in My Karate Journey: Achieving Sho Dan Black Belt</h1>

    <p>
      On <strong>29 December 2019</strong>, I reached an important milestone in my martial arts journey by earning the <strong>Sho Dan (1st Dan) Black Belt</strong> from <strong>Focus Sports Karate Club</strong>. This achievement represents years of dedication, disciplined training, and a commitment to continuous self-improvement.
    </p>

    <h2>About the Certification</h2>
    <p>
      The <strong>Certificate of Dan Grade</strong> was awarded by <strong>Focus Sports Karate Club</strong>, which is affiliated with <strong>GI Toku Kai Karate Do Kerala</strong> and the <strong>Alleppey District Karate Association</strong>.
    </p>
    <p>
      The certificate officially recognizes the successful completion of the required traditional karate training and promotion to the rank of <strong>Sho Dan</strong>, marking the transition from student to a more advanced practitioner of the art.
    </p>

    <div className="blog-post-image-wrapper">
      <img 
        src={karateCertificate} 
        alt="Certificate of Dan Grade" 
        className="w-100 rounded-3 shadow border border-secondary border-opacity-25 cursor-zoom-in"
      />
    </div>

    <h2>What Sho Dan Means</h2>
    <p>
      Sho Dan, or <strong>First Degree Black Belt</strong>, is not the end of learning. Instead, it marks the beginning of a deeper understanding of karate. It reflects the ability to demonstrate strong technical skills while embracing the values of discipline, respect, perseverance, humility, and responsibility.
    </p>
    <p>
      Achieving this rank requires consistent practice, physical fitness, mental focus, and a dedication to mastering the principles of traditional karate.
    </p>

    <h2>Lessons Learned Through Karate</h2>
    <p>
      Throughout my training, karate has taught me valuable life skills beyond self-defense:
    </p>
    <ul>
      <li><strong>Self-discipline and consistency:</strong> Showing up to train, even when tired, builds character.</li>
      <li><strong>Confidence under pressure:</strong> Facing opponents and examinations prepares you for high-stakes situations.</li>
      <li><strong>Respect:</strong> Valuing teachers, fellow practitioners, and the rules of the Dojo.</li>
      <li><strong>Mental resilience and focus:</strong> Overcoming physical exhaustion and staying alert.</li>
      <li><strong>Patience and continuous learning:</strong> Realizing that mastery is a gradual process.</li>
    </ul>
    <p>
      These lessons continue to influence both my personal and professional life.
    </p>

    <h2>A Moment of Pride</h2>
    <p>
      Receiving this certificate was a proud moment and a reminder that persistence and hard work always lead to growth. Every training session, challenge, and examination contributed to reaching this milestone.
    </p>
    <p>
      I am grateful to my instructors, mentors, and everyone at <strong>Focus Sports Karate Club</strong> for their guidance and support throughout my journey.
    </p>

    <div className="blog-post-image-wrapper">
      <img 
        src={karateAward} 
        alt="Receiving Karate Black Belt Honor" 
        className="w-100 rounded-3 shadow border border-secondary border-opacity-25 cursor-zoom-in"
      />
    </div>

    <h2>Looking Ahead</h2>
    <p>
      Although earning the <strong>Sho Dan Black Belt</strong> is a significant achievement, it is only the beginning of a lifelong journey in martial arts. I remain committed to improving my skills, learning from experienced instructors, and upholding the values that karate has instilled in me.
    </p>

    <blockquote>
      <p>
        "A black belt is not the end of training. It is the beginning of a lifelong journey of learning, discipline, and self-improvement."
      </p>
    </blockquote>
  </>
);
