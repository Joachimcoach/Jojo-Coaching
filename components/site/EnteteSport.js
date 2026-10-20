import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { sports } from '@/lib/site';
import { reservationProps } from '@/lib/reservation';

function Texte({ e }) {
  return (
    <>
      <span className="etiquette inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-white">{e.surtitre}</span>
      <h1 className="affiche mt-5 text-6xl sm:text-8xl lg:text-7xl xl:text-8xl">{e.titre}</h1>
      <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{e.texte}</p>
      <a {...reservationProps} className="bouton-accent mt-8">
        Réserver mon appel découverte
        <ArrowRight size={18} />
      </a>
    </>
  );
}

export default function EnteteSport({ sport }) {
  const e = sports[sport].entete;
  const photo = (
    <Image
      src={e.photo.src}
      alt={e.photo.alt}
      fill
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover"
      style={{ objectPosition: e.photo.position }}
    />
  );

  return (
    <section className="border-b-2 border-[var(--encre)] bg-[var(--encre)] text-white">
      {/* Téléphone et tablette : texte par-dessus la photo */}
      <div className="relative h-[70vh] min-h-[480px] lg:hidden">
        {photo}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="conteneur pb-10">
            <Texte e={e} />
          </div>
        </div>
      </div>

      {/* Ordinateur : texte à gauche, photo à droite */}
      <div className="hidden grid-cols-2 lg:grid" style={{ minHeight: 'min(82vh, 820px)' }}>
        <div className="flex items-center">
          <div className="ml-auto w-full max-w-[38rem] px-10 py-16">
            <Texte e={e} />
          </div>
        </div>
        <div className="relative border-l-2 border-[var(--encre)]">{photo}</div>
      </div>
    </section>
  );
}
