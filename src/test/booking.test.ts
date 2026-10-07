import { describe, expect, it } from 'vitest';
import { bookingUrl } from '@/components/site/brand';

describe('Session booking destination', () => {
  it('uses the Calendly session URL supplied on the flyer', () => {
    expect(bookingUrl).toBe('https://calendly.com/the-60-minute-founder-clarity-framework/1hour');
  });
});
