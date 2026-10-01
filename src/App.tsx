import { MotionConfig } from 'framer-motion';
import Cursor from './components/Cursor';
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
import Results from './sections/Results';
import Signature from './sections/Signature';
import SocialProof from './sections/SocialProof';
import Testimonials from './sections/Testimonials';
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
      <Cursor />
      <Header />
      <main id="conteudo">
        <Hero />
        <SocialProof />
        <Philosophy />
        <Treatments />
        <Signature />
        <Experience />
        <Results />
        <Testimonials />
        <About />
        <Differentials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
