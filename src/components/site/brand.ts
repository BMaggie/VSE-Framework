export const contactEmail = 'solomonayomide2026@gmail.com';
export const focusAreas = [
  { title: 'Product & Innovation Strategy', description: 'Turning promising ideas into clear product direction, practical strategies, and meaningful solutions.' },
  { title: 'Community Building & Content', description: 'Building engaged communities and creating content that connects, educates, and moves people forward.' },
  { title: 'Bitcoin Education & Innovation', description: 'Making Bitcoin accessible through clear education, thoughtful conversations, and a focus on real-world innovation.' },
];
export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
