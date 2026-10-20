import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { choixSport, couleurs } from '@/lib/site';

export default function ChoixSport() {
  const c = choixSport;
  return (
    <section id="sport" className="scroll-mt-20 border-b-2 border-[var(--encre)]">
      <div className="conteneur py-16 sm:py-24">
        <p className="etiquette text-[var(--gris)]">{c.surtitre}</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">{c.titre}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.cartes.map((carte) => (
            <Link
              key={carte.lien}
              href={carte.lien}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-[var(--encre)] sm:aspect-[5/6]"
              style={{ boxShadow: `10px 10px 0 ${couleurs[carte.sport]}` }}
            >
              <Image
                src={carte.src}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: carte.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <h3 className="affiche text-5xl sm:text-6xl">{carte.titre}</h3>
                <p className="mt-3 text-white/85">{carte.texte}</p>
                <span
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold"
                  style={{ background: couleurs[carte.sport] }}
                >
                  Découvrir
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
