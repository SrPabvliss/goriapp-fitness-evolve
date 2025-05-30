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
import VisualProblemSolutionSection from "@/components/VisualProblemSolutionSection";
import UpdatedPricingSection from "@/components/UpdatedPricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero" className="min-h-[calc(100vh-80px)] section-offset">
        <HeroSection />
      </section>
      <section
        id="features"
        className="min-h-[calc(100vh-80px)] section-offset"
      >
        <FeaturesGridSection />
      </section>
      <section
        id="solutions"
        className="min-h-[calc(100vh-80px)] section-offset"
      >
        <VisualProblemSolutionSection />
      </section>
      <section id="pricing" className="min-h-[calc(100vh-80px)] section-offset">
        <UpdatedPricingSection />
      </section>
      <section
        id="comparison"
        className="min-h-[calc(100vh-80px)] section-offset"
      >
        <ComparisonSection />
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
