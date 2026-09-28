import { vision } from '@/lib/content';

export default function Vision() {
  return (
    <section id="vision" className="bg-ink text-mist">
      <div className="section">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal">{vision.eyebrow}</p>

        <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-[1.3] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {vision.statement}
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {vision.pillars.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-mist/20 pt-5">
              <span className="font-mono text-xs text-amber">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/65">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
