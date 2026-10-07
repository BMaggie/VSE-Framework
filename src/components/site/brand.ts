export const contactEmail = 'solomonayomide2026@gmail.com';
export const bookingUrl = 'https://calendly.com/the-60-minute-founder-clarity-framework/1hour';
export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
