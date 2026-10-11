import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTypewriter } from '@/hooks/use-typewriter';

const phrases = ['into impact', 'into traction', 'into real businesses'] as const;

describe('Headline typewriter timing', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('starts complete, holds for 1800ms, then deletes every 35ms', () => {
    const { result } = renderHook(() => useTypewriter(phrases));
    expect(result.current).toBe(phrases[0]);
    act(() => vi.advanceTimersByTime(1799));
    expect(result.current).toBe(phrases[0]);
    act(() => vi.advanceTimersByTime(1));
    expect(result.current).toBe('into impac');
    act(() => vi.advanceTimersByTime(35));
    expect(result.current).toBe('into impa');
  });

  it('types every 70ms and cycles through all three phrases', () => {
    const { result } = renderHook(() => useTypewriter(phrases));
    act(() => vi.advanceTimersByTime(1800 + 10 * 35));
    expect(result.current).toBe('');
    act(() => vi.advanceTimersByTime(69));
    expect(result.current).toBe('');
    act(() => vi.advanceTimersByTime(1));
    expect(result.current).toBe('i');
    act(() => vi.advanceTimersByTime(12 * 70));
    expect(result.current).toBe(phrases[1]);
    act(() => vi.advanceTimersByTime(1800 + 12 * 35 + 20 * 70));
    expect(result.current).toBe(phrases[2]);
    act(() => vi.advanceTimersByTime(1800 + 19 * 35 + 11 * 70));
    expect(result.current).toBe(phrases[0]);
  });

  it('keeps the initial phrase static under reduced motion', () => {
    const original = window.matchMedia('(prefers-reduced-motion: reduce)');
    vi.spyOn(window, 'matchMedia').mockReturnValue({ ...original, matches: true });
    const { result } = renderHook(() => useTypewriter(phrases));
    act(() => vi.advanceTimersByTime(30000));
    expect(result.current).toBe(phrases[0]);
    expect(vi.getTimerCount()).toBe(0);
  });
});