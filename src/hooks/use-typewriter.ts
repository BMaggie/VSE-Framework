import { useEffect, useState } from 'react';

export function useTypewriter(phrases: readonly string[]) {
  const [text, setText] = useState(phrases[0] ?? '');

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      clearTimeout(timer);
      let index = 0;
      let current = phrases[0] ?? '';
      let deleting = true;
      setText(current);
      if (preference.matches || phrases.length === 0) return;

      const tick = () => {
        const phrase = phrases[index] ?? '';
        current = deleting ? current.slice(0, -1) : phrase.slice(0, current.length + 1);
        setText(current);

        if (deleting && current.length === 0) {
          index = (index + 1) % phrases.length;
          deleting = false;
          timer = setTimeout(tick, 70);
        } else if (!deleting && current === phrase) {
          deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, deleting ? 35 : 70);
        }
      };

      timer = setTimeout(tick, 1800);
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener('change', start);
    };
  }, [phrases]);

  return text;
}