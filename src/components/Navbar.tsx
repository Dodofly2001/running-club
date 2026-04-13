import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-cream/85 backdrop-blur-[16px] border-b border-border">
      <div className="flex justify-between items-center px-12 py-5 max-w-[1440px] mx-auto md:px-6">
        <Link href="/" className="font-barlow-condensed text-[1.6rem] font-black tracking-[0.05em] uppercase text-ink no-underline">
          KINETIC
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <Link href="#" className="font-space-grotesk text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-ink transition-colors">
            Coaching
          </Link>
          <Link href="#" className="font-space-grotesk text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-red no-underline relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-red">
            Training
          </Link>
          <Link href="#" className="font-space-grotesk text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-ink transition-colors">
            Community
          </Link>
          <Link href="#" className="font-space-grotesk text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-ink transition-colors">
            Journal
          </Link>
        </div>

        <button className="font-space-grotesk text-[0.75rem] font-bold tracking-[0.15em] uppercase bg-red text-white border-none px-6 py-[11px] cursor-pointer hover:bg-red-dim hover:-translate-y-px transition-all">
          Join Club
        </button>
      </div>
    </nav>
  );
}
