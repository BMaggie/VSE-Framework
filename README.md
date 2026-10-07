# VSE

Build a modern, professional personal-brand website for Solomon Joy Abosede, an Entrepreneurial Advisor & Technology Communicator. Use React + Tailwind.

BRAND
- Name: Solomon Joy Abosede
- Tagline: "Helping founders turn ideas into impact"
- Framework: "Ideas. Strategy. Execution. Impact."
- Contact email: solomonayomide2026@gmail.com
- Core focus areas: Product & Innovation Strategy; Community Building & Content; Bitcoin Education & Innovation

DESIGN SYSTEM
- Palette: deep purple accent (#6B45C2), near-black ink (#17171C), white, light gray background (#F5F5F7), a light purple tint (#F0E9FD) for card backgrounds, dark near-black sections (#17171C) for contrast blocks
- Typography: Inter (or similar modern sans-serif) — bold headlines, regular body text
- Clean, minimal, professional — not playful or decorative. Rounded corners (8-16px), generous whitespace, subtle card shadows

PAGES (3 pages, React Router)

1. HOME
- Sticky nav: logo/name on left, links (Home, About, Services, Contact), purple "Get in Touch" button on right
- Hero section (light gray bg): small purple eyebrow label "IDEAS. STRATEGY. EXECUTION. IMPACT.", large bold headline "Helping founders turn ideas into impact", subheadline about her role, two buttons ("Work With Me" filled purple, "Learn More" outlined)
- Services section (white bg): "WHAT I DO" eyebrow, "Core Areas of Focus" heading, 3 cards in a row (light purple bg, rounded) for: Product & Innovation Strategy, Community Building & Content, Bitcoin Education & Innovation — each with a short description
- About teaser section (dark bg, near-black): image placeholder on left, on right: "ABOUT SOLOMON" eyebrow, headline "An advisor who speaks both strategy and technology", short bio paragraph, "Read more about Solomon" link to About page — all text light/white
- Footer/CTA section (light gray bg): "Let's build something impactful together" heading, purple button with the email, small copyright line

2. ABOUT
- Same nav
- Page header (light gray bg): "ABOUT" eyebrow, large heading "Entrepreneurial Advisor & Technology Communicator"
- Story section (white bg): image placeholder on left, on right: "MY STORY" eyebrow, heading, 2-3 paragraphs about her work blending product strategy, community building, and Bitcoin education for founders
- Framework strip (dark bg): "HER FRAMEWORK" eyebrow centered, then 4 steps in a row with arrows between them: 01 Ideas → 02 Strategy → 03 Execution → 04 Impact, numbers in purple, step names bold white
- Footer (reuse same footer/CTA section as Home)

3. CONTACT
- Same nav
- Page header (light gray bg): "CONTACT" eyebrow, heading "Let's talk about your next move", subtext inviting founders to reach out
- Two-column contact section (white bg): left column is a working contact form (Full Name, Email Address, Message textarea, purple "Send Message" button) — client-side only is fine for now, can wire up email sending later; right column is a "Direct Contact" card (light purple bg, rounded) listing Email, Role, and Focus Areas
- Footer (reuse same footer/CTA section)

Keep the layout responsive for mobile. Use placeholder gray/purple blocks for any photo imagery (no real photos available yet). Make the three nav pages fully routed and the "Get in Touch" header button and footer buttons link to the Contact page or mailto: for the email.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://solomon-joy-abosede.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f69e23cc-88b6-44a2-a86f-56a884436e46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
