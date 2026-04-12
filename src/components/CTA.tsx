export default function CTA() {
  return (
    <section className="bg-ink text-white py-[120px] px-12 md:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-barlow-condensed text-[clamp(8rem,20vw,22rem)] font-black uppercase text-white/[0.025] tracking-[-0.02em] whitespace-nowrap pointer-events-none select-none leading-none">
        42.2
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-1">
        <div>
          <h2 className="font-barlow-condensed text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.88] tracking-[-0.01em]">
            JOIN THE<br /><em className="text-red italic font-dm-serif-display font-normal">COLLECTIVE.</em>
          </h2>
          <p className="text-[1.05rem] text-white/65 leading-[1.65] max-w-[420px] mt-6">
            Subscribe to receive exclusive training modules, member-only drops, and event invitations.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 max-w-[480px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white/[0.07] border-[1.5px] border-white/15 text-white px-5 py-4 font-space-grotesk text-[0.85rem] font-medium tracking-[0.08em] uppercase outline-none rounded-[2px] focus:border-white/40 focus:bg-white/10 transition-all placeholder:text-white/35"
          />
          <button className="bg-red text-white border-none px-7 py-[17px] font-space-grotesk text-[0.8rem] font-bold tracking-[0.2em] uppercase cursor-pointer rounded-[2px] hover:bg-red-dim hover:-translate-y-0.5 transition-all">
            Subscribe Now
          </button>
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-white/30">
            No noise. Only performance.
          </p>
        </div>
      </div>
    </section>
  );
}
