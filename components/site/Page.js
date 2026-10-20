import Nav from '@/components/site/Nav';
import Contact from '@/components/site/Contact';
import { couleurs } from '@/lib/site';

// Enveloppe commune : couleur du sport, menu en haut, contact en bas.
export default function Page({ sport = 'accueil', children }) {
  const accent = couleurs[sport];
  const ombre = sport === 'accueil' ? couleurs.velo : '#141414';
  return (
    <div style={{ '--accent': accent, '--ombre': ombre }}>
      <Nav sport={sport} />
      <main>{children}</main>
      <Contact sport={sport} />
    </div>
  );
}
