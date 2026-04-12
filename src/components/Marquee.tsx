export default function Marquee() {
  const items = [
    "STRIDE BY STRIDE", "—", "BREAK THE LIMIT", "—", "42.2 CLUB", "—", "KINETIC ENERGY", "—"
  ];

  return (
    <div className="border-y border-border py-7 overflow-hidden bg-ink">
      <div className="flex gap-0 select-none">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex gap-0 whitespace-nowrap animate-[marquee_28s_linear_infinite]"
            aria-hidden={i === 1}
          >
            {[...items, ...items].map((item, j) => (
              <span
                key={j}
                className={`font-barlow-condensed text-[1.1rem] font-extrabold tracking-[0.25em] uppercase px-12 ${item === '—' ? 'text-red opacity-70' : 'text-cream/25'}`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
