import Image from 'next/image';
import { sports } from '@/lib/site';

export default function SectionBCF() {
  const b = sports.velo.bcf;
  return (
    <section id="bcf" className="scroll-mt-20 border-b-2 border-[var(--encre)] bg-[var(--encre)] text-white">
      <div className="relative aspect-[16/9] max-h-[640px] w-full overflow-hidden">
        <Image src={b.photo.src} alt={b.photo.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--encre)]" aria-hidden="true" />
        <div
          className="absolute flex -translate-x-[14px] -translate-y-full flex-col items-start"
          style={{ left: `${b.photo.x}%`, top: `${b.photo.y}%` }}
        >
          <span className="affiche -ml-2 whitespace-nowrap rounded-full bg-[var(--accent)] px-3 py-1 text-base sm:px-4 sm:text-2xl">
            {b.photo.fleche}
          </span>
          <svg width="28" height="40" viewBox="0 0 28 40" className="mt-1 h-7 w-5 sm:h-10 sm:w-7" aria-hidden="true">
            <path d="M14 2 V34 M4 24 L14 36 L24 24" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="conteneur pb-16 pt-3 sm:pb-24">
        <p className="text-xs text-white/55">{b.photo.legende}</p>
        <p className="etiquette mt-10 text-[var(--rose-clair)]">{b.surtitre}</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">{b.titre}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{b.texte}</p>
        <a href="#tarifs" className="bouton-contour mt-8">Voir l&apos;offre équipe</a>
      </div>
    </section>
  );
}
