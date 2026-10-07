import homePhoto from '@/assets/Hero.png.asset.json';
import aboutPhoto from '@/assets/hero2.png.asset.json';
import contactPhoto from '@/assets/Frame.png.asset.json';

export const headerPhotos = { home: homePhoto.url, about: aboutPhoto.url, contact: contactPhoto.url };
export const bookingUrl = 'https://calendly.com/the-60-minute-founder-clarity-framework/1hour';
export const contactEmail = 'solomonayomide2026@gmail.com';
export const focusAreas = [
  { title: 'Product & Innovation Strategy', description: 'Helping founders shape product direction, validate ideas, and build strategies that scale.' },
  { title: 'Community Building & Content', description: 'Growing engaged communities and crafting content that communicates vision clearly.' },
  { title: 'Bitcoin Education & Innovation', description: 'Demystifying Bitcoin and emerging technology for founders and everyday builders.' },
];
export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
