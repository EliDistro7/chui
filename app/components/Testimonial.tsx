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
        en: "My CHUI N70MF battery has been powering my truck for over 2 years without any issues. Reliable German technology!",
        sw: "Betri yangu ya CHUI N70MF imekuwa ikitoa nguvu kwa lori langu kwa zaidi ya miaka 2 bila shida yoyote. Teknolojia ya kuaminika ya Kijerumani!"
      },
      name: "Hassan Mwalimu",
      location: { en: "Dar es Salaam", sw: "Dar es Salaam" },
      product: "N70MF Battery",
      rating: 5,
      initials: "HM",
      color: "from-blue-400 to-indigo-500"
    },
    {
      quote: {
        en: "CHUI N50MF is perfect for my Toyota. Never failed to start even during heavy rains. Best investment for my vehicle!",
        sw: "CHUI N50MF ni bora kwa Toyota yangu. Haijawahi kushindwa kuanza hata wakati wa mvua kubwa. Uongozi bora kwa gari langu!"
      },
      name: "Grace Kimaro",
      location: { en: "Arusha", sw: "Mkoa wa Arusha" },
      product: "N50MF Battery",
      rating: 5,
      initials: "GK",
      color: "from-emerald-400 to-teal-500"
    },
    {
      quote: {
        en: "Running my generator with CHUI N200MF for my business. Maintenance-free and powerful - exactly what I needed!",
        sw: "Ninaendesha jenereta yangu na CHUI N200MF kwa biashara yangu. Haitaji ukarabati na ina nguvu - hasa ninachohitaji!"
      },
      name: "John Mwamba",
      location: { en: "Kilimanjaro", sw: "Mkoa wa Kilimanjaro" },
      product: "N200MF Battery",
      rating: 5,
      initials: "JM",
      color: "from-rose-400 to-pink-500"
    }
  ];

  // Floating elements similar to hero
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '💬', '⭐', '🎯'][i % 8],
  }));

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, i) => (
          <div
            key={element.id}
            className="absolute text-2xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Battery power decorations - updated for dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-500/20 rounded-sm animate-pulse opacity-20"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-500/20 rounded-sm animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-blue-500/20 rounded-sm animate-pulse opacity-25"></div>
        <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-green-500/20 rounded-sm animate-bounce opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg animate-pulse">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
              {language === 'en' 
                ? 'Trusted by Vehicle Owners Nationwide!' 
                : 'Imezalishwa na Wamiliki wa Magari Kote Nchini!'}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Discover why drivers across Tanzania trust CHUI batteries for reliable power and performance'
                : 'Gundua kwa nini madereva kote Tanzania wanaamini betri za CHUI kwa nguvu na utendaji wa kuaminika'}
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-6 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                {/* Power indicator background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-full opacity-50"></div>
                
                {/* Rating stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote icon with power styling */}
                <div className="relative mb-4">
                  <Quote className="w-10 h-10 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-200 italic mb-6 flex-1 text-base leading-relaxed">
                  &ldquo;{testimonial.quote[language]}&rdquo;
                </blockquote>

                {/* Product badge */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer info with initials */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mr-4 flex-shrink-0 border-3 border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg tracking-wide">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm font-medium">
                      {testimonial.location[language]}
                    </p>
                  </div>
                </div>

                {/* Power indicator icon */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                </div>

                {/* Floating sparkle effects on hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade triggerOnce delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {language === 'en' ? 'More Success Stories' : 'Hadithi Zaidi za Mafanikio'}
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Fade>

        {/* CHUI brand tagline */}
        <Fade triggerOnce delay={400}>
          <div className="mt-8 text-center">
            <p className="text-2xl font-heading font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {language === 'en' ? 'The Power Leader Experience' : 'Uzoefu wa Kiongozi wa Nguvu'}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;