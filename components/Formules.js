import { Check } from 'lucide-react';
import { formules } from '@/lib/content';

export default function Formules() {
  return (
    <section id="formules" className="section">
      <div className="max-w-2xl">
        <p className="eyebrow">{formules.eyebrow}</p>
        <h2 className="h2 mt-4">{formules.title}</h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {formules.offers.map((offer) => (
          <div
            key={offer.title}
            className={`card flex flex-col p-8 ${
              offer.highlighted ? 'border-2 border-teal shadow-sm' : ''
            }`}
          >
            <div className="flex flex-wrap gap-2">
              {offer.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-teal-light px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-teal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{offer.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{offer.description}</p>

            <div className="mt-6 flex items-baseline gap-1 font-mono text-ink">
              <span className="text-4xl font-medium">{offer.price}€</span>
              <span className="text-sm text-ink/50">{offer.unit}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink/75">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={offer.highlighted ? 'btn-primary mt-8 w-full' : 'btn-secondary mt-8 w-full'}
            >
              {offer.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-ink/45">{formules.disclaimer}</p>
    </section>
  );
}
