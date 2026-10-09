import { useEffect, useState } from 'react';
import { BrandMark } from './site-layout';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem('splash-seen') === 'true') {
        onComplete();
        return;
      }
    } catch { /* A blocked storage setting must not prevent the reveal. */ }

    let disposed = false;
    let minimumElapsed = false;
    let pageReady = document.readyState === 'complete';
    let fontsReady = !document.fonts;
    let exitTimer: number | undefined;
    const finish = () => {
      if (disposed || !minimumElapsed || !pageReady || !fontsReady || exitTimer !== undefined) return;
      try { window.sessionStorage.setItem('splash-seen', 'true'); } catch { /* Optional persistence. */ }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onComplete();
        return;
      }
      setLeaving(true);
      exitTimer = window.setTimeout(onComplete, 300);
    };
    const ready = () => { pageReady = true; finish(); };
    window.addEventListener('load', ready);
    if (document.fonts) {
      document.fonts.ready.then(() => { fontsReady = true; finish(); });
    }
    const timer = window.setTimeout(() => { minimumElapsed = true; finish(); }, 1100);
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      window.clearTimeout(exitTimer);
      window.removeEventListener('load', ready);
    };
  }, [onComplete]);

  return (
    <div className="splash-screen" data-leaving={leaving} role="status" aria-label="Loading Solomon Joy Abosede">
      <div className="splash-content">
        <BrandMark size={76} />
        <p className="splash-name">Solomon Joy Abosede</p>
        <p className="splash-tag">Helping founders turn ideas into impact</p>
        <div className="splash-dots" aria-hidden="true"><span /><span /><span /></div>
      </div>
    </div>
  );
}