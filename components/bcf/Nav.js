'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { bcfNav, bcfSite } from '@/lib/bcf';
import { reservationProps } from '@/lib/reservation';

export default function Nav() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--encre)] bg-[var(--papier)]">
      <div className="conteneur flex items-center justify-between py-3">
        <a href="#top" className="affiche text-2xl">
          {bcfSite.nom}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {bcfNav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold hover:text-[var(--rose)]">
              {item.label}
            </a>
          ))}
          <a {...reservationProps} className="bouton-rose !py-2.5 text-sm">
            Appel découverte
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border-2 border-[var(--encre)] p-2 md:hidden"
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          onClick={() => setOuvert((v) => !v)}
        >
          {ouvert ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {ouvert && (
        <nav className="border-t-2 border-[var(--encre)] md:hidden">
          <ul className="conteneur flex flex-col gap-4 py-5">
            {bcfNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOuvert(false)} className="affiche text-3xl">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a {...reservationProps} onClick={() => setOuvert(false)} className="bouton-rose w-full">
                Appel découverte
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
