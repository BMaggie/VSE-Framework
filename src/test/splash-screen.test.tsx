import { act, cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SplashScreen } from '@/components/site/splash-screen';

vi.mock('@/components/site/site-layout', () => ({ BrandMark: () => null }));

describe('First-load splash behavior', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.sessionStorage.clear();
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('complete');
  });
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('reveals the ready page after 1.1 seconds plus a 0.3 second fade', () => {
    const complete = vi.fn();
    render(<SplashScreen onComplete={complete} />);
    act(() => vi.advanceTimersByTime(1099));
    expect(complete).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(300));
    expect(complete).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(complete).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.getItem('splash-seen')).toBe('true');
  });

  it('skips a previously seen splash in the same session', () => {
    window.sessionStorage.setItem('splash-seen', 'true');
    const complete = vi.fn();
    render(<SplashScreen onComplete={complete} />);
    expect(complete).toHaveBeenCalledTimes(1);
  });

  it('waits for page readiness before revealing content', () => {
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading');
    const complete = vi.fn();
    render(<SplashScreen onComplete={complete} />);
    act(() => vi.advanceTimersByTime(1400));
    expect(complete).not.toHaveBeenCalled();
    act(() => window.dispatchEvent(new Event('load')));
    act(() => vi.advanceTimersByTime(300));
    expect(complete).toHaveBeenCalledTimes(1);
  });
});