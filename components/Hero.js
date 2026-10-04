import { ArrowRight } from 'lucide-react';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 opacity-70">
        <svg
          viewBox="0 0 800 220"
          preserveAspectRatio="none"
          className="h-[280px] w-full sm:h-[340px]"
          aria-hidden="true"
        >
          <path
            d="M0,140 C60,60 120,60 180,120 C240,180 300,180 360,110 C420,40 480,40 540,100 C600,160 660,160 720,90 C750,55 780,55 800,80"
            fill="none"
            stroke="#189F79"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 14"
            className="animate-pulseline"
          />
          <path
            d="M0,170 C80,120 140,180 220,150 C300,120 340,190 420,150 C500,110 560,170 640,140 C700,118 750,150 800,130"
            fill="none"
            stroke="#13221C"
            strokeOpacity="0.08"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="section relative pb-16 pt-16 sm:pb-20 sm:pt-20">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink/70 sm:text-xl">{hero.subtitle}</p>

        <p className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-display text-2xl font-semibold text-ink sm:text-3xl">{hero.prix}</span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-teal">{hero.prixDetail}</span>
        </p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-primary">
            {hero.ctaPrimary}
            <ArrowRight size={16} />
          </a>
          <a href="#formules" className="btn-secondary">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}