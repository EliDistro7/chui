'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingCart, Star, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TamTamHero = () => {
  const { language } = useLanguage();
  const [currentSnack, setCurrentSnack] = useState(0);
  
  const heroText = {
    tagline: {
      en: "Bidhaa Ya Ah... Adi...",
      sw: "Bidhaa Ya Ah... Adi..."
    },
    subtitle: {
      en: "Indulge in our delicious",
      sw: "Furahia chakula chetu kitamu cha"
    },
    description: {
      en: "Experience the perfect crunch, taste, and joy in every bite. TAM TAM brings you premium snacks that make every moment special!",
      sw: "Pata uzoefu wa mlolongo mkamilifu, ladha, na furaha katika kila kinyamaso. TAM TAM inakujia na vitafunio vya ubora ambavyo hufanya kila wakati kuwa wa kipekee!"
    },
    shopNow: {
      en: "Shop Now",
      sw: "Nunua Sasa"
    },
    ourProducts: {
      en: "Our Products",
      sw: "Bidhaa Zetu"
    },
    rating: {
      en: "4.9/5 Rating",
      sw: "Kiwango 4.9/5"
    },
    customers: {
      en: "Happy Customers",
      sw: "Wateja Wenye Furaha"
    },
    scrollText: {
      en: "Scroll for more",
      sw: "Sokota kuona zaidi"
    },
    premiumQuality: {
      en: "Premium Quality",
      sw: "Ubora wa Hali ya Juu"
    }
  };
  
  const snacks = [
    { 
      name: { en: 'Cheese Balls', sw: 'Mipira ya Jibini' }, 
      color: 'bg-yellow-400', 
      emoji: '🧀',
      image: '/snack1.png' // Add your product image path
    },
    { 
      name: { en: 'Choco Crunch', sw: 'Chokoleti ya Mlolongo' }, 
      color: 'bg-orange-500', 
      emoji: '🍫',
      image: '/snack2.png' // Add your product image path
    },
    { 
      name: { en: 'Multigrain Crisps', sw: 'Nafaka Kadhaa' }, 
      color: 'bg-green-500', 
      emoji: '🌾',
      image: '/snack3.png' // Add your product image path
    },
    { 
      name: { en: 'Rings', sw: 'Pete' }, 
      color: 'bg-yellow-500', 
      emoji: '⭕',
      image: '/snack3.png' // Add your product image path
    },
    { 
      name: { en: 'Choco Bites', sw: 'Vipande vya Chokoleti' }, 
      color: 'bg-orange-600', 
      emoji: '🍪',
      image: '/adv.jpeg' // Add your product image path
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnack((prev) => (prev + 1) % snacks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    emoji: ['🧀', '🍫', '🌾', '⭕', '🍪', '✨', '🎉', '💫'][i % 8],
    delay: i * 0.2,
    duration: 3 + (i % 3),
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Animated Logo/Brand */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white rounded-full p-3 shadow-lg">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <motion.h1 
                className="text-6xl lg:text-8xl font-display font-black text-white drop-shadow-lg"
                animate={{ 
                  textShadow: [
                    "2px 2px 0px #ef4444",
                    "4px 4px 0px #ef4444", 
                    "2px 2px 0px #ef4444"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                TAM TAM
              </motion.h1>
            </motion.div>

            {/* Dynamic Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-white">
                {heroText.tagline[language]}
              </h2>
              <motion.p 
                className="text-xl lg:text-2xl text-white/90 font-medium"
                key={currentSnack}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {heroText.subtitle[language]}{' '}
                <span className={`px-3 py-1 rounded-full text-white font-bold ${snacks[currentSnack].color}`}>
                  {snacks[currentSnack].emoji} {snacks[currentSnack].name[language]}
                </span>
              </motion.p>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {heroText.description[language]}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{heroText.shopNow[language]}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-3 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Star className="w-5 h-5" />
                <span>{heroText.ourProducts[language]}</span>
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">{heroText.rating[language]}</span>
              </div>
              <div className="text-white">
                <span className="font-bold text-xl">10k+</span>
                <span className="ml-1">{heroText.customers[language]}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase with Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Product Display with Photo */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <motion.div
                  key={currentSnack}
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-center"
                >
                  {/* Product Photo */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl"
                    >
                      <img
                        src={snacks[currentSnack].image}
                        alt={snacks[currentSnack].name[language]}
                        className="w-full h-96 object-cover shadow-lg"
                      
                      />
                      {/* Emoji Fallback */}
                      <div 
                        className="w-full h-48 flex items-center justify-center text-8xl bg-white/20 rounded-2xl"
                        style={{ display: 'none' }}
                      >
                        {snacks[currentSnack].emoji}
                      </div>
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    >
                      NEW!
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {snacks[currentSnack].name[language]}
                  </h3>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-block px-4 py-2 rounded-full text-white font-bold ${snacks[currentSnack].color}`}
                  >
                    {heroText.premiumQuality[language]}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Product Icons */}
            <div className="absolute inset-0">
              {snacks.map((snack, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${20 + (index * 15)}%`,
                    top: `${10 + (index * 20)}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: currentSnack === index ? [0.3, 0.8, 0.3] : 0.2,
                    scale: currentSnack === index ? [1, 1.2, 1] : 0.8,
                  }}
                  transition={{
                    duration: 2 + index,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {/* Small product images as floating elements */}
                  <div className="relative">
                    <img
                      src={snack.image}
                      alt={snack.name[language]}
                      className="w-12 h-12 object-cover rounded-full border-2 border-white/50 shadow-lg"
                      
                    />
                    <div 
                      className="w-12 h-12 flex items-center justify-center text-2xl bg-white/20 rounded-full border-2 border-white/50"
                      style={{ display: 'none' }}
                    >
                      {snack.emoji}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional decorative photo elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20"
            >
              <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                <img
                  src="/images/tam-tam-logo.png" // Add your logo image
                  alt="TAM TAM Logo"
                  className="w-20 h-20 object-contain"
               
                />
                <div 
                  className="w-20 h-20 items-center justify-center text-4xl text-white"
                  style={{ display: 'none' }}
                >
                  🍿
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
          style={{ transform: 'rotate(180deg)' }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(255,255,255,0.1)"
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V60.29c47.79,10.2,103.59,20.17,158,18,70.36-3.37,136.33-23.31,206.8-27.5C438.64,22.43,512.34,43.67,583,62.05c69.27,14,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-19.34C989.49,15,1113-4.29,1200,42.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <Zap className="w-6 h-6 mx-auto" />
        <p className="text-sm mt-2">{heroText.scrollText[language]}</p>
      </motion.div>
    </section>
  );
};

export default TamTamHero;