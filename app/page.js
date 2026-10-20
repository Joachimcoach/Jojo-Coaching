import Page from '@/components/site/Page';
import HeroAccueil from '@/components/site/HeroAccueil';
import Histoire from '@/components/site/Histoire';
import ChoixSport from '@/components/site/ChoixSport';
import Temoignages from '@/components/site/Temoignages';

export default function Accueil() {
  return (
    <Page sport="accueil">
      <HeroAccueil />
      <Histoire />
      <ChoixSport />
      <Temoignages />
    </Page>
  );
}
