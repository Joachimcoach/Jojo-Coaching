'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, Gauge } from 'lucide-react';
import { calculateur } from '@/lib/content';
import { reservationProps } from '@/lib/reservation';

/* ------------------------------------------------------------------
   Modèle à deux paramètres (Monod & Scherrer)
   Course : distance = VC x temps + D'
   Vélo   : travail  = CP x temps + W'
   Zones  : mêmes bornes que les réglages Intervals.icu de Joachim,
            avec la VC comme allure seuil et la CP comme référence.
------------------------------------------------------------------- */

// Bornes en % de la vitesse critique (zones d'allure Intervals.icu)
const ZONES_COURSE = [
  { id: 'Z1', max: 0.775 },
  { id: 'Z2', min: 0.775, max: 0.877 },
  { id: 'Z3', min: 0.877, max: 0.943 },
  { id: 'Z4', min: 0.943, max: 1.0 },
  { id: 'Z5a', min: 1.0, max: 1.034 },
  { id: 'Z5b', min: 1.034, max: 1.115 },
  { id: 'Z5c', min: 1.115 },
];

// Bornes en % de la puissance critique (zones de puissance Intervals.icu)
const ZONES_VELO = [
  { id: 'Z1', name: 'Récupération active', max: 0.55 },
  { id: 'Z2', name: 'Endurance', min: 0.55, max: 0.75 },
  { id: 'Z3', name: 'Tempo', min: 0.75, max: 0.9 },
  { id: 'Z4', name: 'Seuil', min: 0.9, max: 1.05 },
  { id: 'Z5', name: 'PMA (VO2max)', min: 1.05, max: 1.2 },
  { id: 'Z6', name: 'Anaérobie', min: 1.2, max: 1.5 },
  { id: 'Z7', name: 'Neuromusculaire', min: 1.5 },
];

const DISTANCES_PREDITES = [1500, 3000, 5000, 10000];
const DUREES_PREDITES = [3, 5, 10, 20]; // minutes
const DUREE_MIN = 120; // s : en dessous, le modèle n'est plus fiable
const DUREE_MAX = 40 * 60; // s : au-delà, le modèle surestime la performance

// "4:30" -> 270 s ; "1:02:30" -> 3750 s ; "4.5" -> 270 s
export function parseTemps(txt) {
  if (!txt) return NaN;
  const t = String(txt).trim().replace(',', '.');
  if (t.includes(':')) {
    const parts = t.split(':').map(Number);
    if (parts.some((p) => Number.isNaN(p) || p < 0)) return NaN;
    return parts.reduce((acc, p) => acc * 60 + p, 0);
  }
  const min = Number(t);
  return Number.isFinite(min) && min > 0 ? min * 60 : NaN;
}

function formatDuree(s) {
  const total = Math.round(s);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const sec = String(total % 60).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${sec}` : `${m}:${sec}`;
}

function formatAllure(vitesse) {
  // vitesse en m/s -> "mm:ss" par km
  return formatDuree(1000 / vitesse);
}

function nombre(n, dec = 0) {
  return n.toLocaleString('fr-BE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

export function calculCourse(d1, t1, d2, t2) {
  if (![d1, t1, d2, t2].every((x) => Number.isFinite(x) && x > 0)) return null;
  if (t1 === t2) return { erreur: calculateur.erreurs.memeDuree };
  const [a, b] = t1 < t2 ? [[d1, t1], [d2, t2]] : [[d2, t2], [d1, t1]];
  const vc = (b[0] - a[0]) / (b[1] - a[1]);
  const dPrime = a[0] - vc * a[1];
  if (!(vc > 0) || !(dPrime > 0)) return { erreur: calculateur.erreurs.incoherent };
  return { vc, dPrime, tMin: a[1], tMax: b[1] };
}

export function calculVelo(t1, p1, t2, p2) {
  if (![t1, p1, t2, p2].every((x) => Number.isFinite(x) && x > 0)) return null;
  if (t1 === t2) return { erreur: calculateur.erreurs.memeDuree };
  const [a, b] = t1 < t2 ? [[t1, p1], [t2, p2]] : [[t2, p2], [t1, p1]];
  const cp = (b[1] * b[0] - a[1] * a[0]) / (b[0] - a[0]);
  const wPrime = (a[1] - cp) * a[0];
  if (!(cp > 0) || !(wPrime > 0)) return { erreur: calculateur.erreurs.incoherent };
  return { cp, wPrime, tMin: a[0], tMax: b[0] };
}

export function zonesCourse(vc) {
  return ZONES_COURSE.map((z) => {
    let plage;
    if (z.min === undefined) plage = `plus lent que ${formatAllure(vc * z.max)}`;
    else if (z.max === undefined) plage = `plus rapide que ${formatAllure(vc * z.min)}`;
    else plage = `${formatAllure(vc * z.max)} - ${formatAllure(vc * z.min)}`;
    return { id: z.id, plage: `${plage} /km` };
  });
}

export function zonesVelo(cp) {
  return ZONES_VELO.map((z) => {
    const bas = z.min === undefined ? null : Math.floor(cp * z.min) + 1;
    const haut = z.max === undefined ? null : Math.floor(cp * z.max);
    let plage;
    if (bas === null) plage = `jusqu'à ${haut} W`;
    else if (haut === null) plage = `${bas} W et plus`;
    else plage = `${bas} - ${haut} W`;
    return { id: z.id, nom: z.name, plage };
  });
}

function Champ({ label, unite, value, onChange, placeholder, inputMode = 'decimal' }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-ink/60">{label}</span>
      <span className="relative flex items-center">
        <input
          type="text"
          inputMode={inputMode}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-sageline bg-mist px-3 py-2 pr-12 font-mono text-sm text-ink outline-none focus:border-teal"
        />
        <span className="pointer-events-none absolute right-3 text-xs text-ink/45">{unite}</span>
      </span>
    </label>
  );
}

function Resultat({ label, valeur, detail }) {
  return (
    <div className="rounded-xl border border-sageline bg-mist p-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink/50">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-teal">{valeur}</p>
      {detail && <p className="mt-1 text-xs text-ink/60">{detail}</p>}
    </div>
  );
}

function TableZones({ lignes, avecNom }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-sageline">
      <table className="w-full min-w-[320px] text-left text-sm">
        <tbody>
          {lignes.map((z) => (
            <tr key={z.id} className="border-b border-sageline last:border-b-0">
              <td className="w-14 px-4 py-2 font-mono text-xs font-semibold text-teal">{z.id}</td>
              {avecNom && <td className="px-2 py-2 text-ink/70">{z.nom}</td>}
              <td className="px-4 py-2 text-right font-mono text-ink">{z.plage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CalculateurCritique() {
  const c = calculateur;
  const [ouvert, setOuvert] = useState(true);
  const [sport, setSport] = useState('course');
  const [course, setCourse] = useState({ d1: '', t1: '', d2: '', t2: '' });
  const [velo, setVelo] = useState({ t1: '', p1: '', t2: '', p2: '' });

  const num = (v) => Number(String(v).replace(',', '.'));

  const res =
    sport === 'course'
      ? calculCourse(num(course.d1), parseTemps(course.t1), num(course.d2), parseTemps(course.t2))
      : calculVelo(parseTemps(velo.t1), num(velo.p1), parseTemps(velo.t2), num(velo.p2));

  const valide = res && !res.erreur;
  const horsPlage = valide && (res.tMin < DUREE_MIN || res.tMax > DUREE_MAX);

  return (
    <div
      id="calculateur"
      className="mt-14 scroll-mt-28 overflow-hidden rounded-2xl border-2 border-amber bg-card shadow-lg sm:ml-20"
    >
      <button
        type="button"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        className="flex w-full items-center justify-between gap-4 bg-amber/10 px-6 py-6 text-left transition-colors hover:bg-amber/20 sm:px-8"
      >
        <span className="flex items-start gap-4">
          <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber text-ink sm:flex">
            <Gauge size={24} />
          </span>
          <span>
            <span className="mb-2 inline-block rounded-full bg-amber px-3 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-ink">
              Outil gratuit
            </span>
            <span className="block font-display text-xl font-semibold text-ink sm:text-2xl">{c.titre}</span>
            <span className="mt-1 block text-sm text-ink/70">{c.sousTitre}</span>
          </span>
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-ink transition-transform ${ouvert ? 'rotate-180' : ''}`}
        />
      </button>

      {ouvert && (
        <div className="border-t border-amber/40 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-sageline bg-mist p-1" role="group">
            {[
              ['course', c.course],
              ['velo', c.velo],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setSport(id)}
                aria-pressed={sport === id}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  sport === id ? 'bg-teal text-mist' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              sport === 'course'
                ? setCourse({ d1: '1200', t1: '3:40', d2: '3600', t2: '12:30' })
                : setVelo({ t1: '3:00', p1: '380', t2: '12:00', p2: '300' })
            }
            className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
          >
            Essayer avec un exemple
          </button>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70">
            {sport === 'course' ? c.consigneCourse : c.consigneVelo}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[1, 2].map((n) => (
              <div key={n} className="rounded-xl border border-sageline p-4">
                <p className="mb-3 font-mono text-xs uppercase tracking-wide text-teal">
                  {c.effort} {n}
                </p>
                {sport === 'course' ? (
                  <div className="grid grid-cols-2 gap-3">
                    <Champ
                      label={c.distance}
                      unite="m"
                      inputMode="numeric"
                      placeholder={n === 1 ? '1200' : '3600'}
                      value={course[`d${n}`]}
                      onChange={(v) => setCourse({ ...course, [`d${n}`]: v })}
                    />
                    <Champ
                      label={c.temps}
                      unite="min:s"
                      placeholder={n === 1 ? '4:00' : '13:30'}
                      value={course[`t${n}`]}
                      onChange={(v) => setCourse({ ...course, [`t${n}`]: v })}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Champ
                      label={c.duree}
                      unite="min:s"
                      placeholder={n === 1 ? '3:00' : '12:00'}
                      value={velo[`t${n}`]}
                      onChange={(v) => setVelo({ ...velo, [`t${n}`]: v })}
                    />
                    <Champ
                      label={c.puissance}
                      unite="W"
                      inputMode="numeric"
                      placeholder={n === 1 ? '380' : '300'}
                      value={velo[`p${n}`]}
                      onChange={(v) => setVelo({ ...velo, [`p${n}`]: v })}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {!res && <p className="mt-6 text-sm text-ink/50">{c.attente}</p>}

          {res?.erreur && (
            <p className="mt-6 rounded-xl border border-amber bg-amber/10 p-4 text-sm text-ink">{res.erreur}</p>
          )}

          {valide && (
            <div className="mt-8 space-y-8">
              {horsPlage && (
                <p className="rounded-xl border border-amber bg-amber/10 p-4 text-sm text-ink">
                  {c.erreurs.horsPlage}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                {sport === 'course' ? (
                  <>
                    <Resultat
                      label={c.resultatVC}
                      valeur={`${formatAllure(res.vc)} /km`}
                      detail={`${nombre(res.vc * 3.6, 1)} km/h`}
                    />
                    <Resultat
                      label={c.resultatDPrime}
                      valeur={`${nombre(res.dPrime)} m`}
                      detail={c.explicationReserve}
                    />
                  </>
                ) : (
                  <>
                    <Resultat label={c.resultatCP} valeur={`${nombre(res.cp)} W`} />
                    <Resultat
                      label={c.resultatWPrime}
                      valeur={`${nombre(res.wPrime / 1000, 1)} kJ`}
                      detail={c.explicationReserve}
                    />
                  </>
                )}
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold text-ink">{c.titrePredictions}</h4>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {sport === 'course'
                    ? DISTANCES_PREDITES.map((d) => {
                        const t = (d - res.dPrime) / res.vc;
                        const ok = t >= DUREE_MIN && t <= DUREE_MAX;
                        return (
                          <div key={d} className="rounded-xl border border-sageline p-3 text-center">
                            <p className="text-xs text-ink/55">{d >= 1000 && d % 1000 === 0 ? `${d / 1000} km` : `${nombre(d)} m`}</p>
                            <p className="mt-1 font-mono text-base text-ink">{ok ? formatDuree(t) : '—'}</p>
                          </div>
                        );
                      })
                    : DUREES_PREDITES.map((m) => (
                        <div key={m} className="rounded-xl border border-sageline p-3 text-center">
                          <p className="text-xs text-ink/55">{m} min</p>
                          <p className="mt-1 font-mono text-base text-ink">
                            {nombre(res.cp + res.wPrime / (m * 60))} W
                          </p>
                        </div>
                      ))}
                </div>
                <p className="mt-2 text-xs text-ink/50">{c.limitePredictions}</p>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold text-ink">{c.titreZones}</h4>
                <p className="mb-3 mt-1 text-sm text-ink/60">
                  {sport === 'course' ? c.explicationZonesCourse : c.explicationZonesVelo}
                </p>
                {sport === 'course' ? (
                  <TableZones lignes={zonesCourse(res.vc)} />
                ) : (
                  <TableZones lignes={zonesVelo(res.cp)} avecNom />
                )}
              </div>

              <div className="flex flex-col gap-4 rounded-xl bg-teal-light/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm text-ink/80">{c.avertissement}</p>
                <a {...reservationProps} className="btn-primary flex-shrink-0">
                  {c.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
