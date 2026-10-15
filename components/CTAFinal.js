import { ArrowRight } from 'lucide-react';
import { ctaFinal, site } from '@/lib/content';
import { RESERVATION_URL, reservationProps } from '@/lib/reservation';

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-ink text-mist">
      <div className="section flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {ctaFinal.title}
          </h2>
          <p className="mt-4 text-base text-mist/65 sm:text-lg">{ctaFinal.subtitle}</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-start gap-3">
          <a
            {...(RESERVATION_URL ? reservationProps : { href: `mailto:${site.email}` })}
            className="btn-primary"
          >
            {ctaFinal.cta}
            <ArrowRight size={16} />
          </a>
          {RESERVATION_URL && (
            <a href={`mailto:${site.email}`} className="text-sm text-mist/60 underline-offset-4 hover:text-mist hover:underline">
              ou écris-moi : {site.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
