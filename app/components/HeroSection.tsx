'use client';

import { Fade, Slide } from "react-awesome-reveal";
import { useLanguage } from '@/context/LanguageContext';
import { Truck, Tractor, Sprout, Wheat, ShoppingCart, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

// Hero Translations
const heroContent = {
  title: {
    en: "Premium Agricultural Solutions",
    sw: "Vifaa vya Kilimo vya Hali ya Juu"
  },
  subtitle: {
    en: "Fourfreyn Company Limited provides top-quality farming equipment, fertilizers, and agricultural services",
    sw: "Fourfreyn Company Limited inatoa vifaa bora vya kilimo, mbolea, na huduma za kilimo"
  },
  ctaPrimary: {
    en: "Browse Products",
    sw: "Angalia Bidhaa"
  },
  ctaSecondary: {
    en: "Contact Sales",
    sw: "Wasiliana na Mauzo"
  },
  trustText: {
    en: "Trusted by farmers across the region",
    sw: "Imeaminika na wakulima kotekote mkoani"
  },
  products: [
    {
      name: {
        en: "Tractors",
        sw: "Trekta"
      },
      description: {
        en: "High-performance farming machinery",
        sw: "Vifaa vya kilimo vya ufanisi wa juu"
      },
      farmerImage: "/tractor-1.jpg" // New farmer image field
    },
    {
      name: {
        en: "Fertilizers",
        sw: "Mbolea"
      },
      description: {
        en: "Premium quality nutrients for crops",
        sw: "Virutubisho bora kwa mazao"
      },
      farmerImage: "/farmer-3.jpg"
    },
    {
      name: {
        en: "Irrigation",
        sw: "Umwagiliaji"
      },
      description: {
        en: "Efficient water management systems",
        sw: "Mifumo ya ufanisi wa usimamizi wa maji"
      },
      farmerImage: "/irrigation-1.jpg"
    },
    {
      name: {
        en: "Delivery",
        sw: "Uwasilishaji"
      },
      description: {
        en: "Reliable logistics to your farm",
        sw: "Mifumo ya uwasilishaji imara shambani mwako"
      },
      farmerImage: "/delivery-1.jpg"
    }
  ]
};

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/80 to-transparent -z-10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-100/30 blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-secondary-100/30 blur-xl animate-float-delay" />

      <div className="container mx-auto px-6 py-8 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <Fade direction="down" triggerOnce>
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900">
                <span className="text-primary-600">{heroContent.title[language]}</span>
              </h1>
            </Fade>
            
            <Slide direction="right" triggerOnce delay={200}>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
                {heroContent.subtitle[language]}
              </p>
            </Slide>

            <Fade triggerOnce delay={400} cascade damping={0.1}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/products"
                  className="px-8 py-3.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
                >
                  {heroContent.ctaPrimary[language]}
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-lg bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium transition-all shadow-sm hover:shadow-md"
                >
                  {heroContent.ctaSecondary[language]}
                </Link>
              </div>
            </Fade>

            {/* Trust indicators */}
            <Fade triggerOnce delay={600}>
              <div >
                <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                  {heroContent.trustText[language]}
                </p>
              
              </div>
            </Fade>
          </div>

       
        </div>
      </div>

      {/* Floating farmer image (additional visual element) */}
    
    </section>
  );
};

export default Hero;