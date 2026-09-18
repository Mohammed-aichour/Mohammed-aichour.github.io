'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!cursor || !finePointer.matches) return;

    const label = cursor.querySelector('span');
    let frame = 0;
    let x = -30;
    let y = -30;
    let activeTarget: HTMLElement | null = null;

    document.documentElement.classList.add('custom-cursor-ready');

    const paint = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.remove('is-hidden');
      if (!frame) frame = requestAnimationFrame(paint);

      const target = (event.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
      if (target === activeTarget) return;
      activeTarget = target || null;
      cursor.classList.toggle('is-active', Boolean(target));
      if (label) label.textContent = target?.dataset.cursor || '';
    };

    const hide = () => cursor.classList.add('is-hidden');
    const show = () => cursor.classList.remove('is-hidden');

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', hide);
    document.documentElement.addEventListener('mouseenter', show);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('custom-cursor-ready');
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', hide);
      document.documentElement.removeEventListener('mouseenter', show);
    };
  }, []);

  return <div className="custom-cursor is-hidden" ref={cursorRef} aria-hidden="true"><span /></div>;
}
