import NavbarLanding from '@/components/layout/NavbarLanding';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Roadmap from '@/components/landing/Roadmap';
import Features from '@/components/landing/Features';
import LiveDemo from '@/components/landing/LiveDemo';
import ModuleCards from '@/components/landing/ModuleCards';
import HowItWorks from '@/components/landing/HowItWorks';
import FAQ from '@/components/landing/FAQ';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <NavbarLanding />
      <Hero />
      <Stats />
      <Roadmap />
      <section id="recursos">
        <Features />
      </section>
      <section id="demo">
        <LiveDemo />
      </section>
      <ModuleCards />
      <HowItWorks />
      <section id="faq">
        <FAQ />
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}
