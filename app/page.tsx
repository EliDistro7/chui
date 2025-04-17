import Link from "next/link";
import Hero from "./components/HeroSection";
import ProductsShowcase from "./components/Showcase";
import BenefitsSection from "./components/Benefits";
import Testimonials from "./components/Testimonial";
import SpecialOffer from "./components/CTA2";

import ContactSection from "./components/Contact";
import ClientPartners from "./components/ClientPartners";


export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - First Impression */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <Hero />
        <ClientPartners />
      </section>

      {/* Products Showcase - What We Offer */}
      <ProductsShowcase />

      {/* Benefits Section - Why Choose Us */}
      <BenefitsSection />

      {/* Social Proof - Testimonials */}
      <Testimonials />

      {/* Special Offer - Conversion Driver */}
      <SpecialOffer />

      {/* Educational Content  <EducationalContent /> - Build Trust */}
     

      {/* Contact Section - Final CTA */}
      <ContactSection />

   
    </div>
  );
}