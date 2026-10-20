import { Check } from 'lucide-react';
import { sports } from '@/lib/site';
import { reservationProps } from '@/lib/reservation';

export default function Tarifs({ sport }) {
  const tarifs = sports[sport].tarifs;
  return (
    <section id="tarifs" className="scroll-mt-20 border-b-2 border-[var(--encre)]">
      <div className="conteneur py-16 sm:py-24">
        <p className="etiquette text-[var(--accent)]">Tarifs</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">Simple et sans engagement</h2>

        <div className={`mt-12 grid gap-6 ${tarifs.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:max-w-4xl'}`}>
          {tarifs.map((o) => (
            <div
              key={o.nom}
              className={`flex flex-col rounded-[1.75rem] border-2 p-7 ${
                o.miseEnAvant ? 'border-[var(--accent)] bg-white' : 'border-[var(--encre)]'
              }`}
            >
              <h3 className="affiche text-4xl">{o.nom}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className={`affiche ${o.prix.length > 6 ? 'text-4xl' : 'text-6xl'}`}>{o.prix}</span>
                <span className="text-[var(--gris)]">{o.unite}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed">
                    <Check size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a {...reservationProps} className={`mt-8 w-full ${o.miseEnAvant ? 'bouton-accent' : 'bouton-contour'}`}>
                {o.cta || 'Réserver mon appel'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
