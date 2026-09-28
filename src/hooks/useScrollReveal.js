import { useEffect } from 'react';

/**
 * Robust scroll-reveal using IntersectionObserver + MutationObserver.
 *
 * - IntersectionObserver: adds "revealed" class when a .reveal element
 *   enters the viewport.
 * - MutationObserver: watches for NEW .reveal nodes added to the DOM
 *   (e.g. after a filter/conditional render) and passes them to the
 *   IntersectionObserver so they are never missed.
 *
 * Call once at the App root level.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target); // fire once per element
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    /** Observe a single element if it qualifies */
    const observe = (el) => {
      if (
        el.nodeType === 1 &&
        el.classList.contains('reveal') &&
        !el.classList.contains('revealed')
      ) {
        io.observe(el);
      }
    };

    // 1. Observe all .reveal elements already in the DOM
    document.querySelectorAll('.reveal').forEach(observe);

    // 2. Watch for any new .reveal elements added dynamically
    let scheduled = false;
    const mo = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        document.querySelectorAll('.reveal:not(.revealed)').forEach(observe);
        scheduled = false;
      });
    });

    const targetNode = document.querySelector('main') || document.body;
    mo.observe(targetNode, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
