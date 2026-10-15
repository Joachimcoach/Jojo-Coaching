import Image from 'next/image';
import { Check } from 'lucide-react';
import { bcfFormules } from '@/lib/bcf';
import { reservationProps } from '@/lib/reservation';

export default function Formules() {
  const f = bcfFormules;
  return (
    <section id="formules" className="scroll-mt-20 border-b-2 border-[var(--encre)] bg-[var(--encre)] text-white">
      {/* Photo du podium avec la flèche */}
      <div className="relative">
        <div className="relative aspect-[16/9] max-h-[640px] w-full overflow-hidden">
          <Image src={f.photo.src} alt={f.photo.alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--encre)]" aria-hidden="true" />
          <div
            className="absolute flex -translate-x-[14px] -translate-y-full flex-col items-start"
            style={{ left: `${f.photo.x}%`, top: `${f.photo.y}%` }}
          >
            <span className="affiche -ml-2 whitespace-nowrap rounded-full bg-[var(--rose)] px-3 py-1 text-base sm:px-4 sm:text-2xl">
              {f.photo.fleche}
            </span>
            <svg width="28" height="40" viewBox="0 0 28 40" className="mt-1 h-7 w-5 sm:h-10 sm:w-7" aria-hidden="true">
              <path d="M14 2 V34 M4 24 L14 36 L24 24" fill="none" stroke="#e8336d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p className="conteneur pt-3 text-xs text-white/55">{f.photo.legende}</p>
      </div>

      <div className="conteneur pb-16 pt-10 sm:pb-24">
        <p className="etiquette text-[var(--rose-clair)]">{f.surtitre}</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">{f.titre}</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {f.offres.map((o) => (
            <div
              key={o.nom}
              className={`relative flex flex-col rounded-[1.75rem] border-2 p-7 ${
                o.miseEnAvant ? 'border-[var(--rose)] bg-white text-[var(--encre)]' : 'border-white/25'
              }`}
            >
              {o.badge && (
                <span className="etiquette absolute -top-3.5 left-7 rounded-full bg-[var(--rose)] px-3 py-1 text-white">
                  {o.badge}
                </span>
              )}
              <h3 className="affiche text-4xl">{o.nom}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className={`affiche ${o.prix.length > 6 ? 'text-4xl' : 'text-6xl'}`}>{o.prix}</span>
                <span className={o.miseEnAvant ? 'text-[var(--gris)]' : 'text-white/60'}>{o.unite}</span>
              </p>
              <p className={`mt-2 text-sm ${o.miseEnAvant ? 'text-[var(--gris)]' : 'text-white/60'}`}>{o.detail}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed">
                    <Check size={18} className="mt-0.5 shrink-0 text-[var(--rose)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                {...reservationProps}
                className={`mt-8 w-full ${o.miseEnAvant ? 'bouton-rose' : 'bouton-contour'}`}
              >
                {o.cta}
              </a>
            </div>
          ))}
        </div>

        <ul className="mt-8 space-y-2 text-sm text-white/70">
          {f.options.map((o) => (
            <li key={o}>+ {o}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
