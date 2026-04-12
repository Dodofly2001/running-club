import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cream-mid border-t border-border py-[72px] px-12 md:px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="font-barlow-condensed text-[1.4rem] font-black tracking-[0.08em] uppercase mb-6 block">
            The Kinetic Editorial
          </span>
          <p className="text-[0.9rem] text-ink-60 leading-[1.65] max-w-[280px] mb-10">
            Elevating the culture of running through intentional design and technical discipline.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Privacy
            </Link>
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Terms
            </Link>
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Instagram
            </Link>
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Strava
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start md:items-end gap-8">
          <div className="flex gap-5">
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-bold tracking-[0.15em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Instagram
            </Link>
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-bold tracking-[0.15em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Strava
            </Link>
            <Link href="#" className="font-space-grotesk text-[0.75rem] font-bold tracking-[0.15em] uppercase text-ink-60 no-underline hover:text-red transition-colors">
              Newsletter
            </Link>
          </div>
          <p className="text-[0.7rem] tracking-[0.1em] uppercase text-ink-60">
            © 2024 The Kinetic Editorial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
