import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section id="temoignages" className="section">
      <p className="eyebrow">{testimonials.eyebrow}</p>
      <h2 className="h2 mt-4 max-w-2xl">{testimonials.title}</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <figure key={t.name} className="card flex flex-col p-7">
            <Quote size={20} className="text-amber" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
              « {t.quote} »
            </blockquote>
            <figcaption className="mt-5 border-t border-sageline pt-4 font-mono text-xs text-ink/50">
              {t.name} — {t.context}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
