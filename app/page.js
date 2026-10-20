import Page from '@/components/site/Page';
import HeroAccueil from '@/components/site/HeroAccueil';
import Bande from '@/components/site/Bande';
import Histoire from '@/components/site/Histoire';
import ChoixSport from '@/components/site/ChoixSport';
import Temoignages from '@/components/site/Temoignages';
import { accueil, couleurs } from '@/lib/site';

export default function Accueil() {
  return (
    <Page sport="accueil">
      <HeroAccueil />
      <Bande mots={accueil.bande} couleur={couleurs.velo} />
      <Histoire />
      <ChoixSport />
      <Temoignages />
    </Page>
  );
}
