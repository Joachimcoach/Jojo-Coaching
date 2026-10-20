'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { site, couleurs } from '@/lib/site';
import { reservationProps } from '@/lib/reservation';

const LIENS = {
  accueil: [
    { label: 'Qui je suis', href: '#histoire' },
    { label: 'Ton sport', href: '#sport' },
  ],
  course: [
    { label: 'Méthode', href: '#methode' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
  ],
  velo: [
    { label: 'Méthode', href: '#methode' },
    { label: 'BCF', href: '#bcf' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
  ],
};

// Interrupteur Course | Vélo : passe d'une page à l'autre
function Interrupteur({ sport }) {
  return (
    <div className="flex rounded-full border-2 border-[var(--encre)] p-0.5" role="group" aria-label="Choix du sport">
      {[
        ['course', 'Course', '/course'],
        ['velo', 'Vélo', '/velo'],
      ].map(([id, label, href]) => {
        const actif = sport === id;
        return (
          <Link
            key={id}
            href={href}
            aria-current={actif ? 'page' : undefined}
            className="rounded-full px-4 py-1.5 text-sm font-bold transition-colors"
            style={actif ? { background: couleurs[id], color: '#fff' } : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Nav({ sport }) {
  const [ouvert, setOuvert] = useState(false);
  const liens = LIENS[sport];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--encre)] bg-[var(--papier)]">
      <div className="conteneur flex items-center justify-between gap-4 py-3">
        <Link href="/" className="affiche text-xl sm:text-2xl">
          {site.nom}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {liens.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold hover:text-[var(--accent)]">
              {item.label}
            </a>
          ))}
          <Interrupteur sport={sport} />
          <a {...reservationProps} className="bouton-accent !py-2.5 text-sm">
            Appel découverte
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Interrupteur sport={sport} />
          <button
            type="button"
            className="rounded-full border-2 border-[var(--encre)] p-2"
            aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={ouvert}
            onClick={() => setOuvert((v) => !v)}
          >
            {ouvert ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {ouvert && (
        <nav className="border-t-2 border-[var(--encre)] lg:hidden">
          <ul className="conteneur flex flex-col gap-4 py-5">
            {sport !== 'accueil' && (
              <li>
                <Link href="/" onClick={() => setOuvert(false)} className="affiche text-3xl">
                  Accueil
                </Link>
              </li>
            )}
            {liens.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOuvert(false)} className="affiche text-3xl">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a {...reservationProps} onClick={() => setOuvert(false)} className="bouton-accent w-full">
                Appel découverte
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
