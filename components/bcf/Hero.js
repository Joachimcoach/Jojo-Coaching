import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { bcfHero } from '@/lib/bcf';
import { reservationProps } from '@/lib/reservation';

export default function Hero() {
  const h = bcfHero;
  return (
    <section id="top" className="relative border-b-2 border-[var(--encre)] bg-[var(--encre)] text-white">
      {/* Deux grandes photos : vélo et course */}
      <div className="grid grid-cols-2">
        {h.photos.map((p, i) => (
          <div key={p.src} className="relative h-[52vh] min-h-[320px] sm:h-[88vh] sm:max-h-[860px]">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority={i === 0}
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: p.position }}
            />
          </div>
        ))}
      </div>

      {/* Dégradé pour lire le texte */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/85 via-black/30 to-transparent sm:block"
        aria-hidden="true"
      />

      {/* Texte : par-dessus les photos sur ordinateur, en dessous sur téléphone */}
      <div className="sm:absolute sm:inset-x-0 sm:bottom-0">
        <div className="conteneur flex flex-col items-center py-10 text-center sm:pb-14">
          <p className="etiquette text-[var(--rose-clair)]">{h.surtitre}</p>
          <p className="mt-5 text-sm text-white/70 sm:text-base">{h.alias}</p>
          <h1 className="affiche mt-1 text-[22vw] sm:text-[11rem] lg:text-[13rem]">{h.titre}</h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{h.accroche}</p>

          <a {...reservationProps} className="bouton-rose mt-8 text-base">
            {h.cta}
            <ArrowRight size={18} />
          </a>
          <p className="etiquette mt-4 text-white/60">
            {h.ctaDetail} · {h.prix}
          </p>
        </div>
      </div>
    </section>
  );
}
