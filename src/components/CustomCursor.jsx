import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on pointer fine devices (desktop/mouse)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsSupported(true);

    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Lerp loop for silky inertia lag (the Awwwards feel)
    let animationFrameId;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.18);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.18);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Watch hover states via data-cursor attribute
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else if (e.target.closest('button, a, .clickable, input, select')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <div
      ref={cursorRef}
      className={`luxury-cursor ${isVisible ? 'cursor-visible' : ''} ${isHovered ? 'cursor-hover' : ''} ${cursorText ? 'cursor-has-text' : ''}`}
      aria-hidden="true"
    >
      <span className="cursor-label">{cursorText}</span>
    </div>
  );
}
