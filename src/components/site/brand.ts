import homePhoto from '@/assets/Hero.png.asset.json';
import aboutPhoto from '@/assets/hero2.png.asset.json';
import contactPhoto from '@/assets/Frame.png.asset.json';
import { Coins, Compass, MessageSquareText } from 'lucide-react';

export const headerPhotos = {
  home: homePhoto.url,
  about: aboutPhoto.url,
  contact: contactPhoto.url,
};

export const bookingUrl = 'https://calendly.com/the-60-minute-founder-clarity-framework/1hour';
export const contactEmail = 'solomonayomide2026@gmail.com';

export const focusAreas = [
  {
    title: 'Product Strategy',
    description:
      'Clarify the right offer, the right positioning, and the next execution steps for sustainable traction.',
  },
  {
    title: 'Community Building',
    description:
      'Turn audience attention into trusted communities that support product adoption and long-term growth.',
  },
  {
    title: 'Bitcoin Education',
    description:
      'Break down complex ideas into clear, useful learning experiences that help people act with confidence.',
  },
];

export const icons = [Compass, Coins, MessageSquareText];

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
