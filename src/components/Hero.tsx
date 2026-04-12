import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const noiseUrl = "data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E";

  return (
    <section className="relative pt-40 px-12 min-h-screen flex flex-col justify-end max-w-[1440px] mx-auto md:px-6">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: `url("${noiseUrl}")` }}
      />

      <div className="flex items-center gap-3 font-space-grotesk text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-red mb-5 opacity-0 animate-[fadeUp_0.8s_0.2s_forwards] before:content-[''] before:w-10 before:h-[1px] before:bg-red">
        42.2 Running Club — Est. 2024
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-12 relative z-1">
        <div>
          <h1 className="font-barlow-condensed text-[clamp(5rem,12vw,11rem)] font-black leading-[0.88] tracking-[-0.01em] uppercase opacity-0 animate-[fadeUp_0.9s_0.3s_forwards]">
            THE ART<br />OF <em className="italic text-red font-dm-serif-display font-normal">MOTION.</em>
          </h1>
        </div>

        <div className="max-w-[300px] pb-3 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]">
          <p className="text-[1.05rem] leading-[1.65] text-ink-60 mb-8">
            Join the 42.2 Running Club. We bridge the gap between high-performance athleticism and editorial culture. Built for the relentless.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <button className="btn-primary">Join Club</button>
            <Link href="#" className="btn-ghost group">
              Explore
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3 mt-12 mb-0 opacity-0 animate-[fadeUp_0.9s_0.6s_forwards]">
        <div className="aspect-video overflow-hidden relative rounded-[4px] group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy31Iz4_jd_BvwJBfRHTdDmsrGfgUHR3FyM-yj7WCWN6MrHg951JfNaXt4ScFKYFpLaxatreg5e9uY0Auxih39sWUlRuD2Cf0LHM3PoFUoQcE_Bk0SOtxo4QqTsO4utzKZmCG9brn8kj4Gyqn7BNIisjb8v0fxJ_36tZltFx9jNLwpnBjs_nbkSVZWI2XFpdhja0glqA9XXEj02EdFGvqMpyVP_3UT0Kja5sGsf-id7R5uv2bc7Vim7NU_Nx4ExncphF1REKhIzMg"
            alt="Runner in motion on urban asphalt"
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"

          />
          <div className="absolute bottom-4 left-4 bg-red text-white font-space-grotesk text-[0.65rem] font-bold tracking-[0.18em] uppercase px-[14px] py-1.5 rounded-[2px]">
            Elite Performance
          </div>
        </div>
        <div className="hidden md:block aspect-[4/5] overflow-hidden relative rounded-[4px] group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtFsG2OqhJLJwXXsTmsFFQ22OUByNdgSTFqiEt66mdHfV-_Q3YfQxYkqiLJ_DxsVH9gQtqFa3fmBe6wQBIVPjlqztqERcP4kiKWjt-ibryyE--LvzidWHDt9dw6oPme6q9h-7YTZFJlGzBGYWc2QpqtNyg5ymFKqQPg9F_rLZ6WdDXCePgw4ZV4S1jdYdEdw1Qxlekx8Xhk90dW_F-YMj3UrECf6jKZ91X30dodRah-gcPVOVPtHRAURCOGt6kLCKwy3NSTzRCJ58"
            alt="Editorial runner portrait"
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"

          />
        </div>
      </div>
    </section>
  );
}
