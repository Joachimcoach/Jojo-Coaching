import Image from 'next/image';
import { process } from '@/lib/content';
import CalculateurCritique from '@/components/CalculateurCritique';

// Courbe puissance-durée : la puissance tenable baisse avec la durée de
// l'effort et tend vers la valeur critique (ligne pointillée). Les deux
// points ambre représentent les deux efforts du test.
function CourbeCritique() {
  const CP = 270;
  const W = 20000;
  const tMin = 60;
  const tMax = 1200;
  const x = (t) => 36 + ((t - tMin) / (tMax - tMin)) * 268;
  const y = (p) => 168 - ((p - 200) / (620 - 200)) * 150;
  const pts = [];
  for (let t = tMin; t <= tMax; t += 15) pts.push(`${x(t).toFixed(1)},${y(CP + W / t).toFixed(1)}`);
  const tests = [180, 720];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Courbe puissance-durée">
      <line x1="36" y1="18" x2="36" y2="172" stroke="#13221C" strokeOpacity="0.25" />
      <line x1="36" y1="172" x2="308" y2="172" stroke="#13221C" strokeOpacity="0.25" />
      <line x1="36" y1={y(CP)} x2="308" y2={y(CP)} stroke="#13221C" strokeOpacity="0.45" strokeDasharray="4 4" />
      <text x="304" y={y(CP) + 14} textAnchor="end" fontSize="10" fill="#13221C" fillOpacity="0.7">
        Valeur critique
      </text>
      <polyline points={pts.join(' ')} fill="none" stroke="#189F79" strokeWidth="2.5" strokeLinecap="round" />
      {tests.map((t) => (
        <circle key={t} cx={x(t)} cy={y(CP + W / t)} r="5" fill="#F2A93B" stroke="#FFFFFF" strokeWidth="2" />
      ))}
      <text x="172" y="190" textAnchor="middle" fontSize="10" fill="#13221C" fillOpacity="0.55">
        Durée de l&apos;effort
      </text>
      <text x="14" y="95" textAnchor="middle" fontSize="10" fill="#13221C" fillOpacity="0.55" transform="rotate(-90 14 95)">
        Vitesse ou puissance
      </text>
    </svg>
  );
}

function Visuel({ visuel, accent }) {
  if (!visuel) return null;
  const cadre = `relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-card sm:w-64 lg:w-80 ${
    accent ? 'border-2 border-amber' : 'border border-sageline'
  }`;

  if (visuel.type === 'courbe') {
    return (
      <div className={`${cadre} p-2`}>
        <CourbeCritique />
      </div>
    );
  }

  if (visuel.type === 'logo') {
    return (
      <div className={`${cadre} flex flex-col items-center justify-center gap-3`}>
        <div className="relative h-20 w-20">
          <Image src={visuel.src} alt={visuel.alt} fill sizes="80px" className="object-contain" />
        </div>
        {visuel.legende && <p className="font-display text-lg font-semibold text-ink">{visuel.legende}</p>}
      </div>
    );
  }

  return (
    <div className={cadre}>
      <Image
        src={visuel.src}
        alt={visuel.alt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 90vw"
        className="object-cover"
        style={{ objectPosition: visuel.position || 'center' }}
      />
    </div>
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
          {process.steps.map((step) => (
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

              <div className="shrink-0 sm:pt-1">
                <Visuel visuel={step.visuel} accent={step.accent} />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <CalculateurCritique />

      {process.note && (
        <p className="mt-12 max-w-xl border-l-2 border-teal/40 pl-5 text-sm italic text-ink/60">
          {process.note}
        </p>
      )}
    </section>
  );
}