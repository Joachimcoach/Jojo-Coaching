import Image from 'next/image';
import { histoire } from '@/lib/site';

export default function Histoire() {
  const h = histoire;
  return (
    <section id="histoire" className="scroll-mt-20 border-b-2 border-[var(--encre)]">
      <div className="conteneur grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        {/* Portrait détouré sur un bloc bicolore course / vélo */}
        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border-2 border-[var(--encre)]"
          style={{ background: 'var(--encre)' }}
        >
          <Image
            src={h.photo.src}
            alt={h.photo.alt}
            fill
            sizes="(min-width: 1024px) 440px, 90vw"
            className="object-contain object-bottom"
          />
        </div>

        <div>
          <p className="etiquette text-[var(--gris)]">{h.surtitre}</p>
          <h2 className="affiche mt-4 text-5xl sm:text-7xl">{h.titre}</h2>
          {h.role && <p className="mt-3 text-lg font-semibold">{h.role}</p>}
          <div className="mt-8 space-y-7">
            {h.blocs.map((b) => (
              <div key={b.intertitre}>
                <h3 className="etiquette text-[var(--encre)]">{b.intertitre}</h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--encre)]/80 sm:text-lg">{b.texte}</p>
                {b.liste && (
                  <ul className="mt-3 space-y-1.5 text-base text-[var(--encre)]/80 sm:text-lg">
                    {b.liste.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--encre)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
