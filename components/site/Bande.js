// Bande défilante façon banderole d'arrivée.
export default function Bande({ mots, couleur }) {
  const suite = [...mots, ...mots];
  return (
    <div
      className="overflow-hidden border-b-2 border-[var(--encre)] py-3 text-white"
      style={{ background: couleur || 'var(--accent)' }}
      aria-hidden="true"
    >
      <div className="bande">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {suite.map((mot, i) => (
              <span key={`${k}-${i}`} className="affiche flex items-center px-6 text-2xl">
                {mot}
                <span className="ml-12 opacity-60">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
