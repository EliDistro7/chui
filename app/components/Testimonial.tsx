'use client';

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      quote: {
        en: "My kids absolutely love TAM TAM Cheese Balls! The perfect snack for happy moments.",
        sw: "Watoto wangu wanapenda sana TAM TAM Cheese Balls! Vitafunio vizuri kwa nyakati za furaha."
      },
      name: "Amina Hassan",
      location: { en: "Dar es Salaam", sw: "Dar es Salaam" },
      product: "Cheese Balls",
      rating: 5,
      initials: "AH",
      color: "from-rose-400 to-pink-500"
    },
    {
      quote: {
        en: "TAM TAM Choco Crunch is my family's favorite! Delicious chocolate flavor that brings us together.",
        sw: "TAM TAM Choco Crunch ni kipendwa cha familia yangu! Ladha ya chokoleti inayotuleta pamoja."
      },
      name: "John Mwamba",
      location: { en: "Arusha", sw: "Mkoa wa Arusha" },
      product: "Choco Crunch",
      rating: 5,
      initials: "JM",
      color: "from-blue-400 to-indigo-500"
    },
    {
      quote: {
        en: "The Multigrain Crisps are so crunchy and tasty! Perfect for my children's school snacks.",
        sw: "Multigrain Crisps ni za kuvutia na ladha nzuri! Vizuri kwa vitafunio vya shule vya watoto."
      },
      name: "Grace Kimaro",
      location: { en: "Kilimanjaro", sw: "Mkoa wa Kilimanjaro" },
      product: "Multigrain Crisps",
      rating: 5,
      initials: "GK",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 relative overflow-hidden">
      {/* Fun floating snack decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-8 h-8 bg-snack-cheese rounded-full animate-float opacity-20"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-secondary-400 rounded-full animate-bounce-fun opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-accent-400 rounded-full animate-float opacity-25"></div>
        <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-snack-orange rounded-full animate-bounce-fun opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mb-6 animate-pulse-glow">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {language === 'en' 
                ? 'Happy Customers, Happy Stomachs!' 
                : 'Wateja Wenye Furaha, Tumbo Lenye Furaha!'}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Discover why families across Tanzania choose TAM TAM for their snacking moments'
                : 'Gundua kwa nini familia kote Tanzania zinachagua TAM TAM kwa nyakati zao za vitafunio'}
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-white rounded-2xl shadow-soft p-6 border-2 border-primary-100 hover:border-primary-300 hover:shadow-layer transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                {/* Fun background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full opacity-50"></div>
                
                {/* Rating stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-400 fill-current" />
                  ))}
                </div>

                {/* Quote icon with fun styling */}
                <div className="relative mb-4">
                  <Quote className="w-10 h-10 text-primary-500 transform group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-700 italic mb-6 flex-1 text-base leading-relaxed">
                  &ldquo;{testimonial.quote[language]}&rdquo;
                </blockquote>

                {/* Product badge */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-primary-400 to-secondary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer info with initials */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mr-4 flex-shrink-0 border-3 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg tracking-wide">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm font-medium">
                      {testimonial.location[language]}
                    </p>
                  </div>
                </div>

                {/* Happy stomach mascot corner */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">😊</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade triggerOnce delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-layer group"
            >
              {language === 'en' ? 'More Happy Stories' : 'Hadithi Zaidi za Furaha'}
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Fade>

        {/* TAM TAM brand tagline */}
        <Fade triggerOnce delay={400}>
          <div className="mt-8 text-center">
            <p className="text-2xl font-heading font-bold text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              {language === 'en' ? 'Bidhaa Ya Ah... Adi...' : 'Bidhaa Ya Ah... Adi...'}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;