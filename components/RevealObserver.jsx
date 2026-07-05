'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return null;
}
