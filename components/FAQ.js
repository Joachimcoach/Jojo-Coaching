'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="max-w-2xl">
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2 className="h2 mt-4">{faq.title}</h2>
        <p className="mt-3 font-mono text-xs text-ink/40">{faq.note}</p>
      </div>

      <div className="mt-10 divide-y divide-sageline border-y border-sageline">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-ink sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-teal transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
