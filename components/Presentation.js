import { GraduationCap } from 'lucide-react';
import { presentation } from '@/lib/content';

export default function Presentation() {
  return (
    <section id="presentation" className="section">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* Emplacement photo — remplacer par une vraie photo de Joachim */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-sageline bg-gradient-to-br from-teal-light via-mist to-amber-light">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink/40">
            <GraduationCap size={40} strokeWidth={1.5} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Photo de Joachim</span>
          </div>
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
            <GraduationCap size={16} className="text-teal" />
            <span className="font-mono text-xs text-ink/70">{presentation.diploma}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
