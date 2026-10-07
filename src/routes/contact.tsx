import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactEmail, pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/contact')({
  head: () => pageMeta('Contact Solomon: Let’s Build Something Impactful', 'Reach out to Solomon Joy Abosede about product strategy, community building, Bitcoin education, or your next big idea.'),
  component: ContactPage,
});
function ContactPage() {
  const [draft, setDraft] = useState<string | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) return;
    setDraft(`mailto:${contactEmail}?subject=${encodeURIComponent(`Website inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`);
  }
  return <><section className="page-header"><div className="site-container"><div className="eyebrow">CONTACT</div><h1>Let's talk about your next move</h1><p>Have a product, strategy, or Bitcoin-related idea? Reach out and let's explore how to turn it into impact.</p></div></section><section className="section"><div className="site-container contact-grid"><form className="contact-form" onSubmit={submit} onChange={() => setDraft(null)}><div className="form-field"><label htmlFor="full-name">Full Name</label><Input id="full-name" name="name" placeholder="Your name" required maxLength={120} autoComplete="name" className="h-12 bg-background shadow-none" /></div><div className="form-field"><label htmlFor="email">Email Address</label><Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" className="h-12 bg-background shadow-none" /></div><div className="form-field"><label htmlFor="message">Message</label><Textarea id="message" name="message" placeholder="Tell me about your idea..." required maxLength={5000} rows={3} className="bg-background shadow-none resize-y p-3" /></div><Button variant="brand" type="submit" className="w-full">Send Message</Button>{draft && <div className="form-notice" role="status"><p className="font-semibold">Your message is ready.</p><p className="mt-1 text-muted-foreground">Nothing has been sent yet. Open your email app to send it directly to Solomon.</p><Button asChild variant="link" className="mt-2 px-0"><a href={draft}><Mail />Open Email Draft <ArrowUpRight /></a></Button></div>}</form><aside className="contact-card"><h2>Direct Contact</h2><dl><div className="contact-detail"><dt>Email</dt><dd><a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a></dd></div><div className="contact-detail"><dt>Role</dt><dd>Entrepreneurial Advisor &<br />Technology Communicator</dd></div><div className="contact-detail"><dt>Focus</dt><dd>Product Strategy · Community · Bitcoin Education</dd></div></dl></aside></div></section></>;
}
