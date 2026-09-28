import { GraduationCap } from 'lucide-react';
import { badges } from '@/lib/content';

export default function Badges() {
  return (
    <section className="bg-teal-light/50">
      <div className="section">
        <p className="eyebrow">{badges.eyebrow}</p>
        <h2 className="h2 mt-4 max-w-2xl">{badges.title}</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {badges.items.map((badge) => (
            <div key={badge.title} className="card flex items-start gap-4 p-6">
              <GraduationCap size={22} className="mt-0.5 flex-shrink-0 text-teal" />
              <div>
                <p className="font-display text-base font-semibold text-ink">{badge.title}</p>
                <p className="mt-1 text-sm text-ink/60">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
