import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { presentation } from '@/lib/content';
import { palmares } from '@/lib/palmares';

export default function Presentation() {
  return (
    <section id="presentation" className="section">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-sageline bg-teal-light">
          <Image
            src={presentation.photo.src}
            alt={presentation.photo.alt}
            fill
            sizes="(min-width: 1024px) 384px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">{presentation.eyebrow}</p>
          <h2 className="h2 mt-4">{presentation.title}</h2>
          <p className="mt-2 font-body text-base font-medium text-teal">{presentation.role}</p>

          <div className="mt-6 space-y-4">
            {presentation.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">{palmares.titre}</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palmares.items.map((item) => (
            <li key={item.resultat} className="card flex flex-col p-5">
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wide text-teal">
                <Trophy size={14} className="text-amber" />
                {item.sport}
              </span>
              <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{item.resultat}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
        {presentation.gallery.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-sageline bg-teal-light"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 50vw"
              className="object-cover"
              style={{ objectPosition: img.position }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
