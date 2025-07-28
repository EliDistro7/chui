'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import { Store, ShoppingCart, Building2, Truck, Heart, Users, MapPin, Crown } from 'lucide-react';

// Define translations
const partnersContent = {
  title: {
    en: "Our Retail Partners & Friends",
    sw: "Washirika Wetu wa Reja Reja & Marafiki"
  },
  subtitle: {
    en: "Available at your favorite stores across Tanzania - bringing happiness to every corner!",
    sw: "Inapatikana katika maduka yako upendeayo kote Tanzania - tukiwaletea furaha kila mahali!"
  },
  viewAll: {
    en: "Find TAM TAM near you",
    sw: "Pata TAM TAM karibu nawe"
  },
  partners: [
    {
      id: 1,
      name: "Shoprite Tanzania",
      location: "Nationwide",
      icon: ShoppingCart,
      color: "#e74c3c",
      textColor: "#ffffff",
      description: "Premium Supermarkets"
    },
    {
      id: 2,
      name: "Quality Center",
      location: "Dar es Salaam",
      icon: Crown,
      color: "#9b59b6",
      textColor: "#ffffff",
      description: "Quality Shopping"
    },
    {
      id: 3,
      name: "Nakumatt Stores",
      location: "Major Cities",
      icon: Store,
      color: "#3498db",
      textColor: "#ffffff",
      description: "Everything Under One Roof"
    },
    {
      id: 4,
      name: "Local Dukas",
      location: "Every Street",
      icon: Building2,
      color: "#f39c12",
      textColor: "#ffffff",
      description: "Your Neighborhood Store"
    },
    {
      id: 5,
      name: "School Canteens",
      location: "Schools Nationwide",
      icon: Users,
      color: "#27ae60",
      textColor: "#ffffff",
      description: "Happy School Snacks"
    },
    {
      id: 6,
      name: "Wholesalers",
      location: "Distribution Hubs",
      icon: Truck,
      color: "#e67e22",
      textColor: "#ffffff",
      description: "Bulk Distribution"
    },
    {
      id: 7,
      name: "Corner Shops",
      location: "Every Neighborhood",
      icon: MapPin,
      color: "#1abc9c",
      textColor: "#ffffff",
      description: "Quick & Easy Access"
    },
    {
      id: 8,
      name: "Family Markets",
      location: "Community Centers",
      icon: Heart,
      color: "#e91e63",
      textColor: "#ffffff",
      description: "Family Favorites"
    }
  ]
};

const ClientPartners = () => {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Container animation for the marquee effect
  const marqueeVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  const reverseMarqueeVariants = {
    animate: {
      x: [-1500, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 overflow-hidden relative">
      {/* Fun background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-snack-cheese rounded-full animate-float opacity-10"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-secondary-300 rounded-full animate-bounce-fun opacity-15"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-accent-300 rounded-full animate-float opacity-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-snack-orange rounded-full animate-bounce-fun opacity-18"></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-12">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mb-6 animate-pulse-glow">
              <Store className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {partnersContent.title[language]}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {partnersContent.subtitle[language]}
            </p>
          </Fade>
        </div>

        <div className="mt-12 relative">
          {/* First row - left to right */}
          <Fade triggerOnce>
            <motion.div 
              className="flex gap-6 mb-8"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...partnersContent.partners, ...partnersContent.partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 relative rounded-2xl bg-white p-6 shadow-soft hover:shadow-layer transition-all duration-300 min-w-64 group border-2 border-primary-100 hover:border-primary-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Partner icon with gradient background */}
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-14 h-14 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${partner.color}, ${partner.color}dd)`
                      }}
                    >
                      <partner.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                        {partner.name}
                      </h3>
                      <p className="text-primary-600 text-sm font-medium">{partner.description}</p>
                    </div>
                  </div>
                  
                  {/* Location with MapPin icon */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm font-medium">{partner.location}</span>
                  </div>
                  
                  {/* Fun hover effect - snack crumbs */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-snack-cheese rounded-full animate-bounce-fun"></div>
                  </div>
                  <div className="absolute top-2 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-float"></div>
                  </div>
                  
                  {/* Animated bottom accent */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: partner.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              ))}
            </motion.div>
          </Fade>

          {/* Second row - right to left */}
          <Fade triggerOnce delay={300}>
            <motion.div 
              className="flex gap-6"
              variants={reverseMarqueeVariants}
              animate="animate"
            >
              {[...partnersContent.partners, ...partnersContent.partners].reverse().map((partner, index) => (
                <div
                  key={`reverse-${partner.id}-${index}`}
                  className="flex-shrink-0 relative rounded-2xl bg-white p-6 shadow-soft hover:shadow-layer transition-all duration-300 min-w-64 group border-2 border-secondary-100 hover:border-secondary-300"
                  onMouseEnter={() => setHoveredIndex(`rev-${index}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Partner icon with gradient background */}
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-14 h-14 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${partner.color}, ${partner.color}dd)`
                      }}
                    >
                      <partner.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-secondary-600 transition-colors leading-tight">
                        {partner.name}
                      </h3>
                      <p className="text-secondary-600 text-sm font-medium">{partner.description}</p>
                    </div>
                  </div>
                  
                  {/* Location with MapPin icon */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium">{partner.location}</span>
                  </div>
                  
                  {/* Fun hover effect - snack crumbs */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-snack-orange rounded-full animate-bounce-fun"></div>
                  </div>
                  <div className="absolute top-2 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-float"></div>
                  </div>
                  
                  {/* Animated bottom accent */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: partner.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredIndex === `rev-${index}` ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              ))}
            </motion.div>
          </Fade>
        </div>

        {/* Call to action */}
        <Fade triggerOnce delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-layer group cursor-pointer">
              <MapPin className="w-5 h-5 mr-3" />
              {partnersContent.viewAll[language]}
            </div>
            <p className="mt-4 text-gray-600 font-medium">
              {language === 'en' 
                ? 'Join thousands of happy families enjoying TAM TAM snacks!' 
                : 'Jiunge na familia elfu nyingi zinazofurahia vitafunio vya TAM TAM!'}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ClientPartners;