import InnovativeThinkerAward from '../assets/img/blogs/InnovativeThinkerAward.jpg';
import { DrCVRamanAwardContent } from './blog-posts/DrCVRamanAward';

export const blogsData = [
    {
        id: '1',
        title: 'Honored with Dr. C.V. Raman Foundation Award',
        slug: 'dr-cv-raman-award',
        excerpt:
          'Deeply honored to be recognized as an Innovative Thinker and receive the prestigious Dr. C.V. Raman Foundation Award presented by Ramesh Chennithala.',
        content: DrCVRamanAwardContent,
        cover_image_url: InnovativeThinkerAward,
        images: [
            InnovativeThinkerAward
        ],
        category: 'Achievements',
        tags: ['Award', 'Innovation', 'Dr. C.V. Raman', 'AI', 'Entrepreneurship'],
        published: true,
        published_at: '2025-01-29T10:00:00Z',
        read_time: 5,
        created_at: '2025-01-29T10:00:00Z',
      }
];
