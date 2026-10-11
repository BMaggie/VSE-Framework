import { Bitcoin, Target, Users } from 'lucide-react';

export const headerPhotos = {
  home: '/Hero.png',
  about: '/hero2.png',
  contact: '/Frame.png',
};

export const bookingUrl = 'https://calendly.com/the-60-minute-founder-clarity-framework/1hour';
export const contactEmail = 'solomonayomide2026@gmail.com';

export const focusAreas = [
  {
    title: 'Product Strategy',
    description:
      'Clarify the right offer, the right positioning, and the next execution steps for sustainable traction.',
    icon: Target,
  },
  {
    title: 'Community Building',
    description:
      'Turn audience attention into trusted communities that support product adoption and long-term growth.',
    icon: Users,
  },
  {
    title: 'Bitcoin Education',
    description:
      'Break down complex ideas into clear, useful learning experiences that help people act with confidence.',
    icon: Bitcoin,
  },
];



export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
}
