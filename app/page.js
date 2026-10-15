import Nav from '@/components/bcf/Nav';
import Hero from '@/components/bcf/Hero';
import Bande from '@/components/bcf/Bande';
import Histoire from '@/components/bcf/Histoire';
import Methode from '@/components/bcf/Methode';
import Temoignages from '@/components/bcf/Temoignages';
import Formules from '@/components/bcf/Formules';
import FAQ from '@/components/bcf/FAQ';
import Contact from '@/components/bcf/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bande />
        <Histoire />
        <Methode />
        <Temoignages />
        <Formules />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
