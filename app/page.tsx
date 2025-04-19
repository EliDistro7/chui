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
  

      {/* Products Showcase - What We Offer */}
      <ProductsShowcase />
      <ClientPartners />

      {/* Benefits Section - Why Choose Us */}
      <BenefitsSection />

      {/* Social Proof - Testimonials */}
      <Testimonials />

      {/* Special Offer - Conversion Driver */}
     

      {/* Educational Content  <EducationalContent /> - Build Trust */}
     

      {/* Contact Section - Final CTA */}
      <ContactSection />

   
    </div>
  );
}