'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { reservationProps } from '@/lib/reservation';
import { parseTemps, calculCourse, calculVelo, zonesCourse, zonesVelo } from '@/components/CalculateurCritique';

const EXEMPLES = {
  course: { a: '1200', b: '3:40', c: '3600', d: '12:30' },
  velo: { a: '3:00', b: '380', c: '12:00', d: '300' },
};

const CHAMPS = {
  course: [
    ['a', 'Effort 1 · distance', 'm', '1200'],
    ['b', 'Effort 1 · temps', 'min:s', '3:40'],
    ['c', 'Effort 2 · distance', 'm', '3600'],
    ['d', 'Effort 2 · temps', 'min:s', '12:30'],
  ],
  velo: [
    ['a', 'Effort 1 · durée', 'min:s', '3:00'],
    ['b', 'Effort 1 · puissance', 'W', '380'],
    ['c', 'Effort 2 · durée', 'min:s', '12:00'],
    ['d', 'Effort 2 · puissance', 'W', '300'],
  ],
};

function allure(v) {
  const s = Math.round(1000 / v);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function Champ({ label, unite, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-white/60">{label}</span>
      <span className="relative flex items-center">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border-2 border-white/20 bg-white/5 px-3 py-2.5 pr-14 font-mono text-white outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
        />
        <span className="pointer-events-none absolute right-3 text-xs text-white/50">{unite}</span>
      </span>
    </label>
  );
}

// Calculateur de vitesse critique (course) ou de puissance critique (vélo)
export default function Calculateur({ sport, titre, sousTitre }) {
  const [v, setV] = useState({ a: '', b: '', c: '', d: '' });
  const num = (x) => Number(String(x).replace(',', '.'));

  const res =
    sport === 'course'
      ? calculCourse(num(v.a), parseTemps(v.b), num(v.c), parseTemps(v.d))
      : calculVelo(parseTemps(v.a), num(v.b), parseTemps(v.c), num(v.d));
  const ok = res && !res.erreur;
  const zones = ok ? (sport === 'course' ? zonesCourse(res.vc) : zonesVelo(res.cp)) : [];

  return (
    <div
      id="calculateur"
      className="mt-14 scroll-mt-24 rounded-[2rem] border-2 border-[var(--encre)] bg-[var(--encre)] p-6 text-white sm:p-10"
      style={{ boxShadow: '10px 10px 0 var(--accent)' }}
    >
      <span className="etiquette inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-white">Outil gratuit</span>
      <h3 className="affiche mt-4 text-4xl sm:text-5xl">{titre}</h3>
      <p className="mt-3 max-w-2xl text-white/70">{sousTitre}</p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CHAMPS[sport].map(([k, label, unite, ph]) => (
          <Champ key={k} label={label} unite={unite} placeholder={ph} value={v[k]} onChange={(x) => setV({ ...v, [k]: x })} />
        ))}
      </div>
      <button type="button" onClick={() => setV(EXEMPLES[sport])} className="mt-4 text-sm font-semibold text-white/80 underline underline-offset-4">
        Essayer avec un exemple
      </button>

      {res?.erreur && <p className="mt-6 rounded-xl bg-white/10 p-4 text-sm">{res.erreur}</p>}

      {ok && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="etiquette text-white/60">{sport === 'course' ? 'Vitesse critique' : 'Puissance critique'}</p>
            <p className="affiche mt-2 text-7xl text-[var(--accent)] sm:text-8xl">
              {sport === 'course' ? allure(res.vc) : Math.round(res.cp)}
              <span className="ml-2 text-3xl text-white">{sport === 'course' ? '/km' : 'W'}</span>
            </p>
            {sport === 'course' && <p className="mt-2 text-white/70">{(res.vc * 3.6).toFixed(1).replace('.', ',')} km/h</p>}
            <p className="mt-6 text-sm text-white/60">C&apos;est une estimation. Le vrai test, dans de bonnes conditions, on le fait ensemble.</p>
            <a {...reservationProps} className="bouton-accent mt-5">
              Appel découverte gratuit
              <ArrowRight size={16} />
            </a>
          </div>
          <ul className="divide-y divide-white/10 rounded-2xl border-2 border-white/15">
            {zones.map((z) => (
              <li key={z.id} className="flex items-center justify-between gap-4 px-5 py-2.5 text-sm">
                <span className="font-mono font-bold text-[var(--accent)]">{z.id}</span>
                {z.nom && <span className="hidden flex-1 text-white/60 sm:block">{z.nom}</span>}
                <span className="font-mono">{z.plage}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
