import Hero from '@/components/Hero';
import Startups from '@/components/Startups';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <Hero />
      <Startups />
      <Projects />
      <Skills />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
