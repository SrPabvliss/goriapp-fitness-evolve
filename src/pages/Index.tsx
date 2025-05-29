// src/pages/Index.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FeaturesGridSection from "@/components/FeaturesGridSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="min-h-[calc(100vh-80px)] section-offset">
        <HeroSection />
      </section>
      <section id="features" className="min-h-[calc(100vh-80px)] section-offset">
        <FeaturesGridSection />
      </section>
      <section id="solutions" className="min-h-[calc(100vh-80px)] section-offset">
        <ProblemSolutionSection />
      </section>
      <section id="pricing" className="min-h-[calc(100vh-80px)] section-offset">
        <PricingSection />
      </section>
      <section id="faq" className="min-h-[calc(100vh-80px)] section-offset">
        <FAQSection />
      </section>
      <section id="contact" className="min-h-[calc(100vh-80px)] section-offset">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index; 