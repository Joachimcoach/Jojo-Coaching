import Image from 'next/image';

// Aperçu de l'interface Intervals.icu, sous les 4 étapes de la méthode.
// Pour changer les textes : modifier les constantes ci-dessous.
// Pour changer la capture : remplacer public/images/intervals-calendrier.png
// (et ajuster les positions x / y des pastilles, en % de l'image).

const TITRE = 'Concrètement, ton plan ressemble à ça';
const SOUS_TITRE =
  'Tes séances arrivent dans ton calendrier Intervals.icu, et peuvent se synchroniser avec ta montre ou ton compteur.';
const AIDE_MOBILE = 'Fais glisser pour voir toute la semaine →';

const REPERES = [
  {
    n: 1,
    x: 26.6,
    y: 5.4,
    texte: "Ta semaine en un coup d'œil : volume, charge d'entraînement et état de forme.",
  },
  {
    n: 2,
    x: 47,
    y: 66.6,
    texte: 'Chaque séance planifiée avec sa structure : durée, intensités, récupérations.',
  },
  {
    n: 3,
    x: 67.9,
    y: 5.4,
    texte: 'Vélo et course à pied réunis dans le même calendrier.',
  },
];

function Pastille({ n }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber font-mono text-xs font-semibold text-ink shadow-md ring-2 ring-white">
      {n}
    </span>
  );
}

export default function ApercuIntervals() {
  return (
    <div className="mt-16 sm:ml-20">
      <h3 className="font-display text-2xl font-semibold text-ink">{TITRE}</h3>
      <p className="mt-2 max-w-2xl text-base text-ink/70">{SOUS_TITRE}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-sageline bg-card shadow-sm">
        {/* Barre de navigateur dessinée aux couleurs du site */}
        <div className="flex items-center gap-3 border-b border-sageline bg-mist px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-ink/15" />
            <span className="h-3 w-3 rounded-full bg-ink/15" />
            <span className="h-3 w-3 rounded-full bg-ink/15" />
          </span>
          <span className="rounded-full border border-sageline bg-card px-4 py-1 font-mono text-xs text-ink/60">
            intervals.icu
          </span>
        </div>

        {/* Capture : défilement horizontal sur téléphone pour rester lisible */}
        <div className="overflow-x-auto">
          <div className="relative min-w-[720px] bg-white">
            <Image
              src="/images/intervals-calendrier.png"
              alt="Calendrier Intervals.icu : deux semaines d'entraînement vélo et course à pied"
              width={1495}
              height={739}
              sizes="(min-width: 1024px) 1000px, 720px"
              className="block h-auto w-full"
            />
            {REPERES.map((r) => (
              <span
                key={r.n}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <Pastille n={r.n} />
              </span>
            ))}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <p className="mt-3 font-mono text-xs text-ink/45 sm:hidden">{AIDE_MOBILE}</p>

      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {REPERES.map((r) => (
          <li key={r.n} className="flex items-start gap-3">
            <Pastille n={r.n} />
            <span className="text-sm leading-relaxed text-ink/75">{r.texte}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}