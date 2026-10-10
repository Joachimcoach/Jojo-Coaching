import { process } from '@/lib/content';
import ApercuIntervals from '@/components/ApercuIntervals';
import CalculateurCritique from '@/components/CalculateurCritique';

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

            </li>
          ))}
        </ol>
      </div>

      <CalculateurCritique />

      <ApercuIntervals />

      {process.note && (
        <p className="mt-12 max-w-xl border-l-2 border-teal/40 pl-5 text-sm italic text-ink/60">
          {process.note}
        </p>
      )}
    </section>
  );
}