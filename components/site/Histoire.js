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
          <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--encre)]/80 sm:text-lg">
            {h.paragraphes.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
