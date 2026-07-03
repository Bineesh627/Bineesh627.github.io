import InnovativeThinkerAward from '../assets/img/blogs/InnovativeThinkerAward.jpg';
import StartupSaturdaySS3 from '../assets/img/blogs/StartupSaturdaySS3.png';
import { DrCVRamanAwardContent } from './blog-posts/DrCVRamanAward';
import { StartupSaturdayContent } from './blog-posts/StartupSaturday';

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
    },
    {
        id: '2',
        title: 'Reflections on Startup Saturday: Networking, Mentorship, and Ettack AI',
        slug: 'startup-saturday',
        excerpt:
          'How a single afternoon of networking and mentorship at Startup Saturday became the catalyst to accelerate Ettack, our real-world AI initiative.',
        content: StartupSaturdayContent,
        cover_image_url: StartupSaturdaySS3,
        images: [
            StartupSaturdaySS3
        ],
        category: 'Events',
        tags: ['Startup Saturday', 'Networking', 'Mentorship', 'AI', 'Ettack'],
        published: true,
        published_at: '2025-12-27T10:00:00Z',
        read_time: 4,
        created_at: '2025-12-27T10:00:00Z',
    }
];
