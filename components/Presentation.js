import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { presentation } from '@/lib/content';

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
            priority
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

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-sageline bg-card px-4 py-2">
            <GraduationCap size={16} className="flex-shrink-0 text-teal" />
            <span className="font-mono text-xs text-ink/70">{presentation.diploma}</span>
          </div>
        </div>
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