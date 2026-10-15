// Bande défilante façon banderole d'arrivée, sous les photos.
const MOTS = ['Classiques BCF', 'Grands Tours', 'Pro Tour', 'Course à pied', 'Vitesse critique', 'Puissance critique'];

export default function Bande() {
  const suite = [...MOTS, ...MOTS];
  return (
    <div className="overflow-hidden border-b-2 border-[var(--encre)] bg-[var(--rose)] py-3 text-white" aria-hidden="true">
      <div className="bande">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {suite.map((mot, i) => (
              <span key={`${k}-${i}`} className="affiche flex items-center px-6 text-2xl">
                {mot}
                <span className="ml-12 text-[var(--encre)]">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
