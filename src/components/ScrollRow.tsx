'use client';

import { createContext, useContext, useEffect, useRef, useState, type ComponentProps, type Ref } from 'react';

const EagerCount = createContext(0);

/**
 * For the card at `index` inside a <ScrollRow>: should its photo skip native
 * lazy loading? Always false outside a row (index undefined) and before the
 * row has come near the viewport.
 */
export function useRowEager(index?: number) {
  const count = useContext(EagerCount);
  return index !== undefined && index < count;
}

type Props = Omit<ComponentProps<'div'>, 'ref'> & {
  ref?: Ref<HTMLDivElement>;
  /** How many row-widths past the visible cards to load ahead. */
  ahead?: number;
};

/**
 * Horizontally scrolling card row that pre-fetches the photos the user is
 * about to swipe to.
 *
 * `loading="lazy"` only fetches an image once it intersects the viewport, and a
 * card clipped by this row's overflow never does until it is scrolled into
 * view — so every swipe or arrow click waited a full network round trip and
 * showed the blur placeholder meanwhile. Once the row is within half a screen
 * vertically, the first N cards (what is visible plus `ahead` row-widths,
 * tracking the scroll position, never shrinking) are switched to eager
 * loading via useRowEager(). Rows further down the page stay fully lazy.
 */
export default function ScrollRow({ ref, ahead = 2, children, ...rest }: Props) {
  const inner = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  const setRef = (el: HTMLDivElement | null) => {
    inner.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
  };

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const update = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = first.offsetWidth + gap;
      const reach = el.scrollLeft + el.clientWidth * (1 + ahead);
      const n = Math.min(el.children.length, Math.ceil(reach / step));
      setCount((prev) => (n > prev ? n : prev));
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) update();
      },
      { rootMargin: '50% 0px' },
    );
    io.observe(el);
    el.addEventListener('scroll', update, { passive: true });
    return () => {
      io.disconnect();
      el.removeEventListener('scroll', update);
    };
  }, [ahead]);

  return (
    <EagerCount.Provider value={count}>
      <div ref={setRef} {...rest}>
        {children}
      </div>
    </EagerCount.Provider>
  );
}
