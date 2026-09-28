'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/lib/content';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sageline/70 bg-mist/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Appel découverte
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-sageline p-2 text-ink md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-sageline/70 bg-mist px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base text-ink/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Appel découverte
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
