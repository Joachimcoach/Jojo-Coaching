import { sports } from '@/lib/site';
import Calculateur from '@/components/site/Calculateur';
import Intervals from '@/components/site/Intervals';

export default function Methode({ sport }) {
  const s = sports[sport];
  return (
    <section id="methode" className="scroll-mt-20 border-b-2 border-[var(--encre)]">
      <div className="conteneur py-16 sm:py-24">
        <p className="etiquette text-[var(--accent)]">La méthode</p>
        <h2 className="affiche mt-4 text-5xl sm:text-7xl">Comment on bosse</h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {s.methode.map((e) => (
            <li key={e.numero} className="rounded-[1.5rem] border-2 border-[var(--encre)] bg-white p-7">
              <p className="affiche text-6xl text-[var(--accent)]">{e.numero}</p>
              <h3 className="affiche mt-4 text-3xl">{e.titre}</h3>
              <p className="mt-3 leading-relaxed text-[var(--encre)]/75">{e.texte}</p>
            </li>
          ))}
        </ol>

        <Intervals />

        <Calculateur sport={sport} titre={s.calculateur.titre} sousTitre={s.calculateur.sousTitre} />
      </div>
    </section>
  );
}
