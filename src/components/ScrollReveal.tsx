'use client';

import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every `.r` element in the DOM.
 * When an element enters the viewport (threshold 0.12) it gains `.in`
 * and the observer stops watching it — exactly matching the original JS.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () => {
      document.querySelectorAll('.r:not(.in)').forEach(el => io.observe(el));
    };

    observeAll();
    const timer = setTimeout(observeAll, 100);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return null;
}
