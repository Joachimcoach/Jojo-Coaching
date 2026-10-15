import { ArrowRight } from 'lucide-react';
import { bcfContact, bcfSite } from '@/lib/bcf';
import { RESERVATION_URL, reservationProps } from '@/lib/reservation';

export default function Contact() {
  const c = bcfContact;
  const lien = RESERVATION_URL ? reservationProps : { href: `mailto:${bcfSite.email}` };
  return (
    <>
      <section id="contact" className="bg-[var(--rose)] text-white">
        <div className="conteneur flex flex-col items-center py-20 text-center sm:py-28">
          <h2 className="affiche text-7xl sm:text-9xl">{c.titre}</h2>
          <p className="mt-6 max-w-xl text-lg text-white/90">{c.texte}</p>
          <a {...lien} className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--encre)] px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5">
            {c.cta}
            <ArrowRight size={18} />
          </a>
          <a href={`mailto:${bcfSite.email}`} className="mt-5 text-sm text-white/85 underline underline-offset-4">
            {c.ouEmail} {bcfSite.email}
          </a>
        </div>
      </section>
      <footer className="bg-[var(--encre)] text-white/60">
        <div className="conteneur flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="affiche text-xl text-white">{bcfSite.nom}</span>
            <span className="ml-3">{bcfSite.vraiNom} · Coach vélo & course à pied</span>
          </p>
          <p>© {new Date().getFullYear()} {bcfSite.vraiNom}</p>
        </div>
      </footer>
    </>
  );
}
