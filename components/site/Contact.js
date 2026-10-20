import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { contact, site, couleurs } from '@/lib/site';
import { RESERVATION_URL, reservationProps } from '@/lib/reservation';

export default function Contact({ sport }) {
  const lien = RESERVATION_URL ? reservationProps : { href: `mailto:${site.email}` };
  const fond = sport === 'accueil' ? couleurs.velo : couleurs[sport];
  return (
    <>
      <section id="contact" className="text-white" style={{ background: fond }}>
        <div className="conteneur flex flex-col items-center py-20 text-center sm:py-28">
          <h2 className="affiche text-7xl sm:text-9xl">{contact.titre}</h2>
          <p className="mt-6 max-w-xl text-lg text-white/90">{contact.texte}</p>
          <a
            {...lien}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--encre)] px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            {contact.cta}
            <ArrowRight size={18} />
          </a>
          <a href={`mailto:${site.email}`} className="mt-5 text-sm text-white/85 underline underline-offset-4">
            {contact.ouEmail} {site.email}
          </a>
        </div>
      </section>
      <footer className="bg-[var(--encre)] text-white/60">
        <div className="conteneur flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="affiche text-xl text-white">{site.nom}</p>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <Link href="/course" className="hover:text-white">Coaching course à pied</Link>
            <Link href="/velo" className="hover:text-white">Coaching vélo</Link>
          </nav>
          <p>© {new Date().getFullYear()} {site.nom}</p>
        </div>
      </footer>
    </>
  );
}
