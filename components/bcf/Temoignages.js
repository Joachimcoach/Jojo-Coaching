import { temoignages } from '@/lib/temoignages';

// N'apparaît que s'il y a au moins un avis dans lib/temoignages.js
export default function Temoignages() {
  if (temoignages.items.length === 0) return null;
  return (
    <section className="border-b-2 border-[var(--encre)]">
      <div className="conteneur py-16 sm:py-24">
        <p className="etiquette text-[var(--rose)]">{temoignages.eyebrow}</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">{temoignages.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {temoignages.items.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[1.5rem] border-2 border-[var(--encre)] bg-white p-7">
              <span className="affiche text-6xl leading-none text-[var(--rose)]">“</span>
              <blockquote className="mt-2 flex-1 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="etiquette mt-6 text-[var(--gris)]">
                {t.name} · {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
