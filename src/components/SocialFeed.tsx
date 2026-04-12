'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function SocialFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const posts = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy31Iz4_jd_BvwJBfRHTdDmsrGfgUHR3FyM-yj7WCWN6MrHg951JfNaXt4ScFKYFpLaxatreg5e9uY0Auxih39sWUlRuD2Cf0LHM3PoFUoQcE_Bk0SOtxo4QqTsO4utzKZmCG9brn8kj4Gyqn7BNIisjb8v0fxJ_36tZltFx9jNLwpnBjs_nbkSVZWI2XFpdhja0glqA9XXEj02EdFGvqMpyVP_3UT0Kja5sGsf-id7R5uv2bc7Vim7NU_Nx4ExncphF1REKhIzMg',
      caption: 'Technical layers for the urban winter. Built for speed.'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtFsG2OqhJLJwXXsTmsFFQ22OUByNdgSTFqiEt66mdHfV-_Q3YfQxYkqiLJ_DxsVH9gQtqFa3fmBe6wQBIVPjlqztqERcP4kiKWjt-ibryyE--LvzidWHDt9dw6oPme6q9h-7YTZFJlGzBGYWc2QpqtNyg5ymFKqQPg9F_rLZ6WdDXCePgw4ZV4S1jdYdEdw1Qxlekx8Xhk90dW_F-YMj3UrECf6jKZ91X30dodRah-gcPVOVPtHRAURCOGt6kLCKwy3NSTzRCJ58',
      caption: 'Kinetic energy captured in London. The flow never stops.'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd21WFEU5bqgLZ00DJHW3-uTv-FJ85aAQZL-Gm9F8jLNUu9QvIrTg2s235ix-VITsVopNvXVPe8RKgNMeOnBAyM4vYmLCqY_ZRsTyjgQDhUgltVDsyLyqSAHkCDa9GhcsCeInDs3WM1kwNfbKbVawd1SD5ySl_qIdXZusdHIPhD1kmkkHjOLJzGRBCWS3hzBZRDrPgRYqFTApEMBNz9d3r8gcawpaeBrwMC-bE1ELdhVoSmAlSoL3J2sBc3clEmsJ_h3s9G8XvFC8',
      caption: 'Kit drop: Session 04. Available to club members today.'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4SFp0D8TA-b2Y6XHtqC6C09ApgiYORhKvlwsaONsW-aGZDAAlkKsVpROaGIgWsAyREzEriGT-DdLF5fztv67gDkl_l1TJGHDgPO1SyL1eB0KCZfoj68PYOXUfep8O_31GqAlhyXA788hTF8UygMS_vM95tAUi9cGszmDt8RxNAwwJWM4GUN-Brx1LGHBRE3UQx6SlHlfrptBkbbIYB0j4hEF4ql1N1Iy-NpnhobtMF1R-ypNiLx5V0sFaO5p8nS_hQcJOTYkZKwc',
      caption: 'Shadow and light. The architecture of the track.'
    }
  ];

  return (
    <section ref={containerRef} className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[56px] gap-8 reveal">
          <div>
            <div className="font-space-grotesk text-[0.7rem] font-bold tracking-[0.2em] uppercase text-red flex items-center gap-[10px] mb-6 before:content-[''] before:w-7 before:h-[1px] before:bg-red">
              Instagram
            </div>
            <h2 className="font-barlow-condensed text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.01em]">
              THE DAILY<br />STRIDE
            </h2>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 font-space-grotesk text-[0.8rem] font-bold tracking-[0.15em] uppercase text-red no-underline pb-5">
            <span className="material-symbols-outlined text-[16px]">link</span>
            @KINETIC_EDITORIAL
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 md:px-6 md:pr-0">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-5 overflow-x-auto pb-3 scrollbar-hide select-none ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none' }}
        >
          {posts.map((post, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[340px] shrink-0 group">
              <div className="aspect-square overflow-hidden rounded-[4px] mb-4 bg-cream-mid relative">
                <Image
                  src={post.img}
                  alt={`Social post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"

                />
              </div>
              <div className="flex justify-between items-start">
                <p className="text-[0.9rem] leading-[1.5] max-w-[75%]">
                  {post.caption}
                </p>
                <Link href="#" className="font-space-grotesk text-[0.65rem] font-bold tracking-[0.15em] uppercase text-red no-underline whitespace-nowrap border-b border-red pb-0.5 hover:opacity-70 transition-opacity">
                  View Post
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
