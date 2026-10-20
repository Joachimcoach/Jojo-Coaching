import Page from '@/components/site/Page';
import EnteteSport from '@/components/site/EnteteSport';
import Methode from '@/components/site/Methode';
import SectionBCF from '@/components/site/SectionBCF';
import Tarifs from '@/components/site/Tarifs';
import FAQ from '@/components/site/FAQ';

export const metadata = {
  title: 'Coaching vélo — Joachim Berrewaerts',
  description:
    "Plans d'entraînement vélo personnalisés : test de puissance critique, zones, suivi chaque semaine. Offre équipe pour la Bonneville Cycling Federation.",
};

export default function CoachingVelo() {
  return (
    <Page sport="velo">
      <EnteteSport sport="velo" />
      <Methode sport="velo" />
      <SectionBCF />
      <Tarifs sport="velo" />
      <FAQ sport="velo" />
    </Page>
  );
}
