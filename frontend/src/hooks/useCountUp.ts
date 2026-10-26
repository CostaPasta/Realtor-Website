import { type RefObject, useEffect } from 'react';

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
}

/**
 * Counts a stat like "400+" or "$10M+" up from zero when it scrolls into view.
 *
 * The server always renders the real value, so search engines, link previews, and
 * visitors without JavaScript never see "0+". The count-up only runs for stats that
 * start below the fold, and writes to the DOM directly so React's markup stays the
 * real number.
 */
export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  value: string,
  duration = 1400,
  delay = 0
) {
  useEffect(() => {
    const el = ref.current;
    const target = parseValue(value);
    if (!el || !target) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    const render = (n: number) => {
      el.textContent = `${target.prefix}${n}${target.suffix}`;
    };
    render(0);

    let timer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            render(Math.floor((1 - Math.pow(1 - progress, 3)) * target.number));
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { rootMargin: '-40px' }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      render(target.number);
    };
  }, [ref, value, duration, delay]);
}
