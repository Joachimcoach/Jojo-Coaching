import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Presentation from '@/components/Presentation';
import Process from '@/components/Process';
import Formules from '@/components/Formules';
import Badges from '@/components/Badges';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Presentation />
        <Badges />
        <Formules />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}