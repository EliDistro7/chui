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

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
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
              <div className="pt-8">
                <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                  {heroContent.trustText[language]}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item}
                      className="h-12 grayscale hover:grayscale-0 transition-all"
                    >
                      <div className="h-full w-full bg-neutral-200 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>

          {/* Right content - product carousel with farmers */}
          <div className="relative">
            <Fade direction="up" triggerOnce>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-2xl shadow-layer overflow-hidden"
              >
                {heroContent.products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full min-h-[400px]">
                      {/* Farmer image background */}
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={product.farmerImage}
                          alt={`Happy farmer with ${product.name[language]}`}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20" />
                      </div>
                      
                      {/* Content overlay */}
                      <div className={`relative z-10 p-8 h-full flex flex-col`}>
                        <div className="mb-6">
                          {index % 4 === 0 ? <Tractor className="w-8 h-8 text-white" /> : 
                           index % 4 === 1 ? <Sprout className="w-8 h-8 text-white" /> :
                           index % 4 === 2 ? <Wheat className="w-8 h-8 text-white" /> :
                           <Truck className="w-8 h-8 text-white" />}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">{product.name[language]}</h3>
                        <p className="text-white/90 mb-8">{product.description[language]}</p>
                        <Link 
                          href={`/products#${product.name.en.toLowerCase()}`}
                          className="mt-auto inline-flex items-center gap-2 text-white hover:text-primary-200 font-medium"
                        >
                          {language === 'en' ? 'Explore' : 'Chunguza'} {product.name[language]}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Floating product card 
              <div className="absolute -bottom-8 -left-8 bg-white bg-opacity-85 rounded-xl shadow-md p-4 border border-neutral-100 w-40 h-48 z-10">
                <div className="w-10 h-10 rounded-lg bg-primary-100 mb-3 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {language === 'en' ? 'Special Offers' : 'Ofa Maalum'}
                </h4>
                <p className="text-sm text-neutral-500">
                  {language === 'en' ? 'Limited time discounts' : 'Punguzo la muda'}
                </p>
              </div>
              */}
            </Fade>
          </div>
        </div>
      </div>

      {/* Floating farmer image (additional visual element) */}
    
    </section>
  );
};

export default Hero;