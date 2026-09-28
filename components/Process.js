import { process } from '@/lib/content';

// Icônes "signal" dessinées à la main : la courbe passe d'un signal brut et
// dentelé (donnée capteur) à une courbe lisse (plan livré), en 5 étapes.
// Le point ambre marque l'étape humaine (Joachim) : l'endroit où la donnée
// devient un choix.
const SIGNAL_PATHS = [
  'M0,20 L8,10 L16,28 L24,6 L32,26 L40,12 L48,24 L56,8 L64,22 L72,14 L80,26 L88,10 L96,20 L104,14 L112,22 L120,18',
  'M0,20 L15,20 L15,12 L30,12 L30,24 L45,24 L45,10 L60,10 L60,18 L75,18 L75,8 L90,8 L90,16 L105,16 L105,20 L120,20',
  'M0,22 C15,8 25,8 35,20 C45,32 55,32 65,16 C75,4 85,4 95,18 C102,26 110,20 120,20',
  'M0,22 C30,8 50,8 60,18 C70,28 90,28 120,14',
  'M0,20 C30,2 90,38 120,20',
];

function SignalIcon({ index, accent }) {
  const color = accent ? '#F2A93B' : '#189F79';
  return (
    <svg viewBox="0 0 120 40" width="120" height="40" aria-hidden="true">
      <path
        d={SIGNAL_PATHS[index]}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {accent && <circle cx="60" cy="18" r="3.5" fill="#F2A93B" />}
    </svg>
  );
}

export default function Process() {
  return (
    <section id="methode" className="section">
      <div className="max-w-2xl">
        <p className="eyebrow">{process.eyebrow}</p>
        <h2 className="h2 mt-4">{process.title}</h2>
        <p className="mt-4 text-lg text-ink/70">{process.intro}</p>
      </div>

      <div className="relative mt-14">
        <div className="absolute bottom-2 left-6 top-2 w-px bg-sageline" aria-hidden="true" />

        <ol className="space-y-10 sm:space-y-12">
          {process.steps.map((step, i) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8"
            >
              <div
                className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-mist font-mono text-sm ${
                  step.accent ? 'border-amber text-amber' : 'border-teal text-teal'
                }`}
              >
                {step.number}
              </div>

              <div className="flex-1 sm:pt-1">
                <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/70">{step.text}</p>
              </div>

              <div className="hidden shrink-0 pt-2 sm:block">
                <SignalIcon index={i} accent={step.accent} />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 max-w-xl border-l-2 border-teal/40 pl-5 text-sm italic text-ink/60">
        {process.note}
      </p>
    </section>
  );
}
