'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: '4,200+', label: 'Active Members' },
    { num: '18', label: 'Global Cities' },
    { num: '340+', label: 'Club Sessions' },
    { num: '42.2', label: 'The Standard' },
  ];

  return (
    <div
      ref={sectionRef}
      className={`bg-red text-white px-12 py-9 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <span className="block font-barlow-condensed text-[3.2rem] font-black leading-none tracking-[-0.02em]">
              {stat.num}
            </span>
            <span className="block font-space-grotesk text-[0.65rem] font-semibold tracking-[0.2em] uppercase opacity-75 mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
