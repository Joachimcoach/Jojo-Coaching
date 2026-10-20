'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { sports } from '@/lib/site';

export default function FAQ({ sport }) {
  const questions = sports[sport].faq;
  const [ouvert, setOuvert] = useState(0);
  return (
    <section id="faq" className="scroll-mt-20 border-b-2 border-[var(--encre)]">
      <div className="conteneur grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="etiquette text-[var(--accent)]">FAQ</p>
          <h2 className="affiche mt-4 text-5xl sm:text-7xl">Questions fréquentes</h2>
        </div>
        <div className="border-t-2 border-[var(--encre)]">
          {questions.map((q, i) => {
            const estOuvert = ouvert === i;
            return (
              <div key={q.question} className="border-b-2 border-[var(--encre)]">
                <button
                  type="button"
                  onClick={() => setOuvert(estOuvert ? -1 : i)}
                  aria-expanded={estOuvert}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-bold">{q.question}</span>
                  <Plus size={22} className={`shrink-0 text-[var(--accent)] transition-transform ${estOuvert ? 'rotate-45' : ''}`} />
                </button>
                {estOuvert && <p className="pb-6 leading-relaxed text-[var(--encre)]/75">{q.reponse}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
