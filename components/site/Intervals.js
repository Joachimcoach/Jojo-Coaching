import Image from 'next/image';

// Petit aperçu de l'application Intervals.icu, sous « Comment on bosse ».
export default function Intervals() {
  return (
    <div className="mt-14 grid items-center gap-10 rounded-[2rem] border-2 border-[var(--encre)] bg-white p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="flex items-center gap-4">
          <Image src="/images/intervals-logo.png" alt="Logo Intervals.icu" width={56} height={56} />
          <p className="affiche text-3xl">Intervals.icu</p>
        </div>
        <p className="mt-5 leading-relaxed text-[var(--encre)]/75">
          C&apos;est l&apos;application où tu retrouves ton plan. Tes séances arrivent dans ton calendrier, tes
          sorties se synchronisent depuis ta montre ou ton compteur, et je vois ce que tu as réellement fait pour
          ajuster la suite.
        </p>
        <ul className="mt-5 space-y-2 text-sm">
          <li>
            <span className="font-bold text-[var(--accent)]">→</span> Ton planning de la semaine, séance par séance
          </li>
          <li>
            <span className="font-bold text-[var(--accent)]">→</span> L&apos;analyse de chaque sortie
          </li>
          <li>
            <span className="font-bold text-[var(--accent)]">→</span> Ta charge et ta forme dans le temps
          </li>
        </ul>
      </div>

      {/* Montage : calendrier + analyse d'une séance */}
      <div className="relative pb-10 sm:pb-16">
        <div className="overflow-hidden rounded-xl border-2 border-[var(--encre)] shadow-lg">
          <Image
            src="/images/intervals-calendrier.png"
            alt="Calendrier Intervals.icu avec des séances de vélo et de course à pied"
            width={1495}
            height={739}
            sizes="(min-width: 1024px) 600px, 90vw"
            className="block h-auto w-full"
          />
        </div>
        <div className="absolute -bottom-2 right-0 w-[72%] overflow-hidden rounded-xl border-2 border-[var(--encre)] shadow-xl sm:-right-4">
          <Image
            src="/images/methode-suivi.png"
            alt="Analyse d'une séance dans Intervals.icu : puissance et fréquence cardiaque"
            width={1660}
            height={454}
            sizes="(min-width: 1024px) 440px, 65vw"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
