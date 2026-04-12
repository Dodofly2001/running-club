'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Disciplines() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const items = [
    {
      num: '01',
      title: 'KINETIC FLOW',
      text: "Advanced biomechanics analysis designed to optimize every stride. We don't just run — we engineer movement.",
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd21WFEU5bqgLZ00DJHW3-uTv-FJ85aAQZL-Gm9F8jLNUu9QvIrTg2s235ix-VITsVopNvXVPe8RKgNMeOnBAyM4vYmLCqY_ZRsTyjgQDhUgltVDsyLyqSAHkCDa9GhcsCeInDs3WM1kwNfbKbVawd1SD5ySl_qIdXZusdHIPhD1kmkkHjOLJzGRBCWS3hzBZRDrPgRYqFTApEMBNz9d3r8gcawpaeBrwMC-bE1ELdhVoSmAlSoL3J2sBc3clEmsJ_h3s9G8XvFC8',
      alt: 'Runners at night'
    },
    {
      num: '02',
      title: 'THE EDITORIAL',
      text: 'Weekly digital journal featuring long-form interviews with global pioneers in sport and culture.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4SFp0D8TA-b2Y6XHtqC6C09ApgiYORhKvlwsaONsW-aGZDAAlkKsVpROaGIgWsAyREzEriGT-DdLF5fztv67gDkl_l1TJGHDgPO1SyL1eB0KCZfoj68PYOXUfep8O_31GqAlhyXA788hTF8UygMS_vM95tAUi9cGszmDt8RxNAwwJWM4GUN-Brx1LGHBRE3UQx6SlHlfrptBkbbIYB0j4hEF4ql1N1Iy-NpnhobtMF1R-ypNiLx5V0sFaO5p8nS_hQcJOTYkZKwc',
      alt: 'Minimalist running track'
    },
    {
      num: '03',
      title: 'CLUB SESSIONS',
      text: 'Exclusive track meets and urban explorations. A global community of athletes connected by the 42.2 standard.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlWmxPyjqgmmg9swaa_27sF2ZkQ5ixnlOAq5TgHkWpSKCHA6LndHCTh5mHC1j6yoLDQxwE8ggz-jmHdKme7izLKtIrLx3BfkHVl1M4RmQAeMMoeA_576vn6NsBzOa0Hp2UOlRlahRro3u14sIy_zEGlG9FB0Ypvzu9Y0pWvQjTPVt8LYLe4DH5kYReF58RU-ODB_yF6M5rioxZt3K1Cf3rl2HvA0m9rLwpj2DL3aFdnsJJSjKHfXjzLeuTXCZoGBAqcntOGdriEmM',
      alt: 'Running shoes on gravel'
    }
  ];

  return (
    <section ref={containerRef} className="bg-surface-mid py-[120px] mt-20">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12 reveal">
          <h2 className="font-barlow-condensed text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.01em]">
            DISCIPLINES
          </h2>
          <p className="max-w-[380px] text-[1.05rem] text-ink-60 leading-[1.65] pb-2">
            Three core pillars of technical excellence and community momentum — engineered for the relentless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className={`reveal ${i === 1 ? 'md:mt-20' : ''}`}>
              <div className="aspect-[3/4] overflow-hidden rounded-[4px] mb-6 group">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                />
              </div>
              <span className="font-barlow-condensed text-[0.75rem] font-bold tracking-[0.2em] text-red mb-2.5 block">
                {item.num}
              </span>
              <h3 className="font-barlow-condensed text-[2.4rem] font-extrabold uppercase tracking-[0.01em] leading-none mb-3.5">
                {item.title}
              </h3>
              <p className="text-[0.95rem] text-ink-60 leading-[1.65] mb-5">
                {item.text}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-space-grotesk text-[0.75rem] font-bold tracking-[0.15em] uppercase text-red no-underline transition-all hover:gap-3.5">
                Explore Method
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
