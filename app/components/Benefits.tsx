'use client';

import React, { useEffect, useState } from "react";
import { Shield, Truck, Heart, Clock, Star, Gift } from "lucide-react";

const TamTamBenefitsSection = () => {
    const [language, setLanguage] = useState<'en' | 'sw'>('en');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const benefits = [
      {
        icon: <Shield className="w-8 h-8 text-primary-600" />,
        title: { en: "Quality Guarantee", sw: "Hakiki ya Ubora" },
        description: {
          en: "All TAM TAM snacks are made with premium ingredients and quality controls",
          sw: "Vitafunio vyote vya TAM TAM vimetengenezwa kwa viungo bora na udhibiti wa ubora"
        },
        graphic: "🏆"
      },
      {
        icon: <Truck className="w-8 h-8 text-primary-600" />,
        title: { en: "Fast Delivery", sw: "Utoaji wa Haraka" },
        description: {
          en: "Same-day delivery available in Dar es Salaam and major cities",
          sw: "Utoaji wa siku moja unapatikana Dar es Salaam na miji mikuu"
        },
        graphic: "🚚"
      },
      {
        icon: <Heart className="w-8 h-8 text-primary-600" />,
        title: { en: "Happy Stomach Promise", sw: "Ahadi ya Tumbo Furaha" },
        description: {
          en: "Our snacks are crafted to bring joy and satisfaction to every bite",
          sw: "Vitafunio vyetu vimetengenezwa kuleta furaha na uongozi kwa kila kidonda"
        },
        graphic: "😋"
      },
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: { en: "Always Fresh", sw: "Kila Wakati Mbichi" },
        description: {
          en: "We ensure freshness with proper storage and fast turnover",
          sw: "Tunahakikisha ubunifu kwa uhifadhi sahihi na mzunguko wa haraka"
        },
        graphic: "🌿"
      },
      {
        icon: <Star className="w-8 h-8 text-primary-600" />,
        title: { en: "Premium Quality", sw: "Ubora wa Hali ya Juu" },
        description: {
          en: "Made with the finest ingredients for the best taste experience",
          sw: "Imetengenezwa kwa viungo bora zaidi kwa uzoefu bora wa ladha"
        },
        graphic: "⭐"
      },
      {
        icon: <Gift className="w-8 h-8 text-primary-600" />,
        title: { en: "Family Friendly", sw: "Rafiki wa Familia" },
        description: {
          en: "Perfect snacks for kids and adults - bringing families together",
          sw: "Vitafunio kamili kwa watoto na watu wazima - kuunganisha familia"
        },
        graphic: "👨‍👩‍👧‍👦"
      }
    ];

    const parallaxOffset = scrollY * 0.5;
    const slowParallax = scrollY * 0.2;
    const fastParallax = scrollY * 0.8;
  
    return (
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes bounce-fun {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-5deg) scale(1.05); }
            75% { transform: rotate(5deg) scale(1.05); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); }
            50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.6); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-bounce-fun { animation: bounce-fun 3s ease-in-out infinite; }
          .animate-wiggle { animation: wiggle 4s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .shadow-soft { box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
          .shadow-layer { box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }
          .shadow-glow { box-shadow: 0 0 30px rgba(251, 146, 60, 0.4); }
        `}</style>

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Snack Graphics */}
          <div 
            className="absolute top-20 left-16 text-6xl animate-float opacity-20"
            style={{ transform: `translateY(${slowParallax}px)` }}
          >
            🥨
          </div>
          <div 
            className="absolute top-32 right-20 text-5xl animate-wiggle opacity-20"
            style={{ transform: `translateY(${-parallaxOffset}px)` }}
          >
            🍪
          </div>
          <div 
            className="absolute top-60 left-1/4 text-4xl animate-bounce-fun opacity-20"
            style={{ transform: `translateY(${fastParallax}px)` }}
          >
            🥜
          </div>
          <div 
            className="absolute bottom-40 right-16 text-5xl animate-float opacity-20"
            style={{ transform: `translateY(${-slowParallax}px)` }}
          >
            🍿
          </div>
          <div 
            className="absolute bottom-60 left-20 text-6xl animate-wiggle opacity-20"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            🧀
          </div>

          {/* Geometric Shapes with Parallax */}
          <div 
            className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-float"
            style={{ transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0001})` }}
          ></div>
          <div 
            className="absolute top-20 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-15 animate-bounce-fun"
            style={{ transform: `translateY(${-fastParallax}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-400 rounded-full opacity-10 animate-float"
            style={{ transform: `translateY(${slowParallax}px)`, animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-15 animate-bounce-fun"
            style={{ transform: `translateY(${-parallaxOffset}px)`, animationDelay: '2s' }}
          ></div>

          {/* Decorative Stars */}
          <div 
            className="absolute top-1/4 left-3/4 text-3xl animate-wiggle opacity-30"
            style={{ transform: `translateY(${fastParallax}px)` }}
          >
            ✨
          </div>
          <div 
            className="absolute top-3/4 left-1/6 text-2xl animate-float opacity-30"
            style={{ transform: `translateY(${-slowParallax}px)` }}
          >
            💫
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Language Toggle */}
          <div className="absolute top-4 right-6 z-10">
            <button
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-orange-200 hover:bg-orange-100 transition-all"
            >
              {language === 'en' ? 'SW' : 'EN'}
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                  <span className="text-2xl animate-bounce-fun">🐘</span>
                </div>
                {/* Decorative rings around elephant */}
                <div className="absolute -inset-2 border-2 border-orange-300 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute -inset-4 border border-yellow-300 rounded-full opacity-30 animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent">
                {language === 'en' 
                  ? 'Why Choose TAM TAM?' 
                  : 'Kwa Nini Uchague TAM TAM?'}
              </h2>
              {/* Decorative elements around title */}
              <div className="absolute -top-4 -right-4 text-2xl animate-wiggle">🎯</div>
              <div className="absolute -bottom-4 -left-4 text-2xl animate-float">🌟</div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Discover what makes TAM TAM snacks the perfect choice for happy moments and satisfied cravings!'
                : 'Gundua ni nini kinachofanya vitafunio vya TAM TAM kuwa chaguo kamili kwa nyakati za furaha na kutoshelezwa!'}
            </p>
            {/* Fun decorative line under description */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
              <span className="text-2xl animate-bounce-fun">🎪</span>
              <div className="h-1 w-12 bg-gradient-to-l from-orange-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Featured Advertisement Image */}
          <div className="mb-20 w-full px-0 -mx-6">
            <div className="relative group w-full">
              {/* Decorative frame elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-none sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-none sm:rounded-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-none sm:rounded-2xl p-2 sm:p-4 shadow-layer border-0 sm:border border-orange-200 overflow-hidden">
                <img 
                  src="/adv.jpeg" 
                  alt="TAM TAM Advertisement"
                  className="w-full h-auto sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-none sm:rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating decorative elements around image */}
                <div className="absolute -top-3 -left-3 text-2xl sm:text-3xl animate-bounce-fun opacity-70">🎊</div>
                <div className="absolute -top-3 -right-3 text-2xl sm:text-3xl animate-wiggle opacity-70">🎉</div>
                <div className="absolute -bottom-3 -left-3 text-2xl sm:text-3xl animate-float opacity-70">✨</div>
                <div className="absolute -bottom-3 -right-3 text-2xl sm:text-3xl animate-bounce-fun opacity-70" style={{animationDelay: '1s'}}>🌟</div>
                
                {/* Corner sparkles */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs sm:text-sm animate-ping">✨</span>
                    <span className="text-xs sm:text-sm animate-pulse" style={{animationDelay: '0.3s'}}>💫</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs sm:text-sm animate-pulse">⭐</span>
                    <span className="text-xs sm:text-sm animate-ping" style={{animationDelay: '0.6s'}}>✨</span>
                  </div>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-2 sm:inset-4 bg-gradient-to-t from-orange-500/10 via-transparent to-yellow-500/10 rounded-none sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating snack graphics around the image - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 left-8 text-3xl lg:text-4xl animate-float opacity-40">🥨</div>
              <div className="hidden sm:block absolute -top-8 right-8 text-3xl lg:text-4xl animate-wiggle opacity-40">🍪</div>
              <div className="hidden sm:block absolute -bottom-8 left-16 text-3xl lg:text-4xl animate-bounce-fun opacity-40">🥜</div>
              <div className="hidden sm:block absolute -bottom-8 right-16 text-3xl lg:text-4xl animate-float opacity-40" style={{animationDelay: '2s'}}>🍿</div>
              <div className="hidden md:block absolute top-1/2 -left-12 text-2xl lg:text-3xl animate-wiggle opacity-30">🧀</div>
              <div className="hidden md:block absolute top-1/2 -right-12 text-2xl lg:text-3xl animate-bounce-fun opacity-30">🥤</div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-soft hover:shadow-layer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Graphics */}
                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity animate-float">
                  {benefit.graphic}
                </div>
                <div className="absolute -bottom-6 -right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                  {benefit.graphic}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft relative">
                    {benefit.icon}
                    {/* Floating mini graphic */}
                    <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-fun">
                      {benefit.graphic}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors flex items-center gap-2">
                    {benefit.title[language]}
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity animate-wiggle">
                      {benefit.graphic}
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description[language]}
                  </p>
                </div>

                {/* Hover Effect Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                
                {/* Sparkle effect on hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs animate-ping">✨</span>
                    <span className="text-xs animate-pulse" style={{animationDelay: '0.5s'}}>⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-layer border border-orange-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 rounded-3xl"></div>
              <div className="absolute top-4 left-4 text-2xl opacity-20 animate-float">🎊</div>
              <div className="absolute top-4 right-4 text-2xl opacity-20 animate-wiggle">🎈</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-20 animate-bounce-fun">🎁</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-20 animate-float" style={{animationDelay: '1s'}}>🎪</div>
              
              <div className="relative">
                <div className="text-6xl animate-bounce-fun relative">
                  🎉
                  <div className="absolute -top-2 -right-2 text-2xl animate-ping">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">💫</div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                  {language === 'en' 
                    ? 'Ready for a TAM TAM Experience?' 
                    : 'Tayari kwa Uzoefu wa TAM TAM?'}
                  <span className="text-lg animate-wiggle">🚀</span>
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  {language === 'en'
                    ? 'Join thousands of happy customers who trust TAM TAM for their snacking needs!'
                    : 'Jiunge na maelfu ya wateja wenye furaha wanaomtegemea TAM TAM kwa mahitaji yao ya vitafunio!'}
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-glow hover:shadow-layer flex items-center gap-3 relative overflow-hidden group">
                <span className="text-xl animate-bounce-fun">🛒</span>
                {language === 'en' ? 'Shop TAM TAM Now' : 'Nunua TAM TAM Sasa'}
                <span className="text-xl animate-wiggle">🎯</span>
                
                {/* Button sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-1 left-1/4 text-xs animate-ping">✨</div>
                  <div className="absolute bottom-1 right-1/4 text-xs animate-pulse">⭐</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Wave Effect with Graphics */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {/* Floating snacks in the wave area */}
          <div className="absolute bottom-8 left-1/6 text-3xl animate-float opacity-30">🥨</div>
          <div className="absolute bottom-12 left-1/3 text-2xl animate-bounce-fun opacity-30">🍪</div>
          <div className="absolute bottom-6 right-1/3 text-3xl animate-wiggle opacity-30">🥜</div>
          <div className="absolute bottom-10 right-1/6 text-2xl animate-float opacity-30">🍿</div>
          
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                  className="fill-orange-500 opacity-20"></path>
          </svg>
        </div>
      </section>
    );
  };

  export default TamTamBenefitsSection;