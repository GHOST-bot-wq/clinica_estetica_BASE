import { MotionConfig } from 'framer-motion';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppFloat from './components/WhatsAppFloat';
import About from './sections/About';
import Differentials from './sections/Differentials';
import Experience from './sections/Experience';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import Trust from './sections/Trust';
import Treatments from './sections/Treatments';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-3 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <Philosophy />
        <Treatments />
        <Experience />
        <Differentials />
        <About />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
