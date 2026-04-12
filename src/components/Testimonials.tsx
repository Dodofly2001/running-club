'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      quote: '"The coaching at 42.2 isn\'t just about PRs — it\'s a complete shift in how I perceive my own potential."',
      name: 'Marcus Thorne',
      role: 'Marathoner / Designer'
    },
    {
      quote: '"Finally, a running club that values aesthetics as much as performance. The editorial content is world-class."',
      name: 'Elena Rossi',
      role: 'Ultra Runner / Creative Director'
    },
    {
      quote: '"Kinetic flow sessions transformed my recovery phase. The most sophisticated training environment I\'ve experienced."',
      name: 'David Chen',
      role: 'Triathlete / Architect'
    },
    {
      quote: '"I joined 42.2 expecting a run club. What I found was a movement — literally and culturally. Zero regrets."',
      name: 'Amara Diallo',
      role: '5K Specialist / Photographer'
    },
    {
      quote: '"The urban sessions in Tokyo were unlike anything I\'ve encountered. Kinetic doesn\'t just train bodies — it trains minds."',
      name: 'Sora Tanaka',
      role: 'Trail Runner / Motion Director'
    },
    {
      quote: '"The editorial paired with hard training data is genius. It\'s the only club that speaks to me as an athlete AND a creative."',
      name: 'Luca Ferretti',
      role: 'Half-Marathoner / Brand Strategist'
    }
  ];

  const getVisible = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w <= 700) return 1;
    if (w <= 1100) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisible());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisible]);

  useEffect(() => {
    const reveals = containerRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goTo = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  };

  return (
    <section ref={containerRef} className="py-[120px] bg-surface-mid overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6">
        <div className="flex flex-wrap justify-between items-end mb-16 gap-8 reveal">
          <div>
            <div className="font-space-grotesk text-[0.7rem] font-bold tracking-[0.2em] uppercase text-red flex items-center gap-[10px] mb-6 before:content-[''] before:w-7 before:h-[1px] before:bg-red">
              Community
            </div>
            <h2 className="font-barlow-condensed text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.9]">
              VOICES OF<br />THE COLLECTIVE
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-2">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-[52px] h-[52px] border border-border bg-transparent cursor-pointer flex items-center justify-center rounded-[2px] transition-all hover:bg-ink hover:text-white hover:border-ink active:scale-[0.94] disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-border"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <span className="font-space-grotesk text-[0.75rem] font-semibold tracking-[0.15em] text-ink-60 min-w-[48px] text-center">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex >= maxIndex}
              className="w-[52px] h-[52px] border border-border bg-transparent cursor-pointer flex items-center justify-center rounded-[2px] transition-all hover:bg-ink hover:text-white hover:border-ink active:scale-[0.94] disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-border"
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * (24 / visibleCount)}px))` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`shrink-0 bg-white border border-border p-8 md:p-12 rounded-[4px] flex flex-col justify-between transition-opacity duration-400 ${
                  i >= currentIndex && i < currentIndex + visibleCount ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})` }}
              >
                <p className="font-dm-serif-display text-[1.35rem] leading-[1.55] italic mb-12">
                  {t.quote}
                </p>
                <div>
                  <div className="font-barlow-condensed text-[1rem] font-extrabold tracking-[0.1em] uppercase text-red mb-1">
                    {t.name}
                  </div>
                  <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-60">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[3px] rounded-[2px] border-none cursor-pointer p-0 transition-all duration-300 ${
                i === currentIndex ? 'bg-red w-10' : 'bg-border w-6'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
