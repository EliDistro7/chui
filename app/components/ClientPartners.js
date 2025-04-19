'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import { Building, Landmark, Warehouse, Briefcase, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Define translations
const partnersContent = {
  title: {
    en: "Key Clients & Partnerships",
    sw: "Wateja Wakuu & Ushirikiano"
  },
  subtitle: {
    en: "Trusted by leading organizations across Tanzania",
    sw: "Inaaminiwa na mashirika yanayoongoza Tanzania"
  },
  viewAll: {
    en: "View all partners",
    sw: "Ona washirika wote"
  },
  partners: [
    {
      id: 1,
      name: "Ministry of Agriculture",
      location: "Tanzania",
      logo: "/logos/ministry-agriculture.jpg",
      icon: Landmark,
      hasLogo: true
    },
    {
      id: 2,
      name: "Nyasalon",
      location: "Tanzania",
      logo: "/logos/nyasalon.webp",
      icon: Building,
      hasLogo: true
    },
    {
      id: 3,
      name: "Kapunga Estate",
      location: "Tanzania",
      icon: Warehouse,
      color: "#53cf60",
      textColor: "#ffffff",
      hasLogo: false
    },
    {
      id: 4,
      name: "Mureg General Supply",
      location: "Tanzania",
      icon: Briefcase,
      color: "#3cb849",
      textColor: "#ffffff",
      hasLogo: false
    },
    {
      id: 5,
      name: "Alaf",
      location: "Tanzania",
      logo: "/logos/alaf.jpg",
      icon: Building,
      hasLogo: true
    },
    {
      id: 6,
      name: "Nailit Company Limited",
      location: "Tanzania",
      icon: Building,
      color: "#8a7438",
      textColor: "#ffffff",
      hasLogo: false
    },
    {
      id: 7,
      name: "Halem Company Limited",
      location: "Tanzania",
      logo: "/logos/halem.jpg",
      icon: Building,
      hasLogo: true
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
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-10">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {partnersContent.title[language]}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {partnersContent.subtitle[language]}
            </p>
          </Fade>
        </div>

        <div className="mt-12 relative">
          <Fade triggerOnce>
            <motion.div 
              className="flex gap-8 mb-8"
              variants={marqueeVariants}
              animate="animate"
            >
              {/* Double the items to create a seamless loop */}
              {[...partnersContent.partners, ...partnersContent.partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 relative rounded-xl bg-white p-5 shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-4 min-w-52 group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex-shrink-0">
                    {partner.hasLogo ? (
                      <div className="w-12 h-12 flex items-center justify-center rounded-md overflow-hidden">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-12 h-12 flex items-center justify-center rounded-md"
                        style={{ backgroundColor: partner.color || "#53cf60" }}
                      >
                        <partner.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    {partner.hasLogo ? (
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-primary-600 transition-colors">
                        {partner.name}
                      </h3>
                    ) : (
                      <div className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                        {partner.name}
                      </div>
                    )}
                    <p className="text-neutral-500 text-xs">{partner.location}</p>
                  </div>
                  
                  {/* Subtle accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-b-xl"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </motion.div>
          </Fade>

          {/* Add a second row with opposite direction */}
          <Fade triggerOnce delay={300}>
            <motion.div 
              className="flex gap-8"
              variants={{
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
              }}
              animate="animate"
            >
              {/* Reverse the order to create variety */}
              {[...partnersContent.partners, ...partnersContent.partners].reverse().map((partner, index) => (
                <div
                  key={`reverse-${partner.id}-${index}`}
                  className="flex-shrink-0 relative rounded-xl bg-white p-5 shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-4 min-w-52 group"
                  onMouseEnter={() => setHoveredIndex(`rev-${index}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex-shrink-0">
                    {partner.hasLogo ? (
                      <div className="w-12 h-12 flex items-center justify-center rounded-md overflow-hidden">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-12 h-12 flex items-center justify-center rounded-md"
                        style={{ backgroundColor: partner.color || "#53cf60" }}
                      >
                        <partner.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    {partner.hasLogo ? (
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-primary-600 transition-colors">
                        {partner.name}
                      </h3>
                    ) : (
                      <div className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                        {partner.name}
                      </div>
                    )}
                    <p className="text-neutral-500 text-xs">{partner.location}</p>
                  </div>
                  
                  {/* Subtle accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-b-xl"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredIndex === `rev-${index}` ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </motion.div>
          </Fade>
        </div>
        
      
      </div>
    </section>
  );
};

export default ClientPartners;