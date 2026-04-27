import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.revealDelay || 0;
          setTimeout(() => e.target.classList.add('revealed'), delay);
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}
