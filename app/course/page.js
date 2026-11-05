import Page from '@/components/site/Page';
import EnteteSport from '@/components/site/EnteteSport';
import Methode from '@/components/site/Methode';
import Tarifs from '@/components/site/Tarifs';
import FAQ from '@/components/site/FAQ';

export const metadata = {
  title: 'Coach course à pied à Bruxelles - Joachim Berrewaerts',
  alternates: { canonical: '/course' },
  description:
    "Plans d'entraînement course à pied personnalisés, du 10 km au marathon et au trail : test de vitesse critique, zones d'allure, suivi chaque semaine.",
};

export default function CoachingCourse() {
  return (
    <Page sport="course">
      <EnteteSport sport="course" />
      <Methode sport="course" />
      <Tarifs sport="course" />
      <FAQ sport="course" />
    </Page>
  );
}
