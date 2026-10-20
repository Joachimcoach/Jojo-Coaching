import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { accueil, couleurs } from '@/lib/site';
import { reservationProps } from '@/lib/reservation';

export default function HeroAccueil() {
  const h = accueil;
  return (
    <section id="top" className="relative border-b-2 border-[var(--encre)] bg-[var(--encre)] text-white">
      {/* Deux photos cliquables : course à gauche, vélo à droite */}
      <div className="grid grid-cols-2">
        {h.photos.map((p, i) => (
          <Link
            key={p.src}
            href={p.lien}
            className="group relative block h-[52vh] min-h-[320px] overflow-hidden sm:h-[88vh] sm:max-h-[860px]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority={i === 0}
              sizes="50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: p.position }}
            />
            <span
              className={`absolute top-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-white sm:top-6 sm:px-4 sm:text-sm ${
                i === 0 ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
              }`}
              style={{ background: couleurs[p.sport] }}
            >
              {p.label}
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/85 via-black/25 to-transparent sm:block"
        aria-hidden="true"
      />

      {/* Texte et bouton au centre */}
      <div className="pointer-events-none sm:absolute sm:inset-x-0 sm:bottom-0">
        <div className="conteneur flex flex-col items-center py-10 text-center sm:pb-14">
          <p className="etiquette text-white/70">{h.surtitre}</p>
          <h1 className="affiche mt-4 text-[16vw] sm:text-[8.5rem] lg:text-[10rem]">
            {h.titre[0]}
            <br />
            {h.titre[1]}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{h.accroche}</p>
          <a
            {...reservationProps}
            className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[var(--encre)] transition-transform hover:-translate-y-0.5"
          >
            {h.cta}
            <ArrowRight size={18} />
          </a>
          <p className="etiquette mt-4 text-white/60">{h.ctaDetail}</p>
        </div>
      </div>
    </section>
  );
}
