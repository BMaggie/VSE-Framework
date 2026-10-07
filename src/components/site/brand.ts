export const contactEmail = 'solomonayomide2026@gmail.com';
export const focusAreas = [
  { title: 'Product & Innovation Strategy', description: 'Helping founders shape product direction, validate ideas, and build strategies that scale.' },
  { title: 'Community Building & Content', description: 'Growing engaged communities and crafting content that communicates vision clearly.' },
  { title: 'Bitcoin Education & Innovation', description: 'Demystifying Bitcoin and emerging technology for founders and everyday builders.' },
];
export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
