"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Languages, Sparkles, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
  home: {
    en: "Home",
    sw: "Nyumbani",
  },
  products: {
    en: "Products",
    sw: "Bidhaa",
  },
  about: {
    en: "About Us",
    sw: "Kuhusu Sisi",
  },
  contact: {
    en: "Contact",
    sw: "Mawasiliano",
  },
};

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-primary-500/10" 
          : "bg-gradient-to-r from-primary-500/90 to-secondary-500/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* TAM TAM Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 20px rgba(245,158,11,0.4)"
              }}
              transition={{ duration: 0.3 }}
              className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 flex items-center justify-center shadow-lg overflow-hidden"
            >
              {/* Animated background sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-30"
              >
                <Sparkles className="absolute top-1 left-1 w-3 h-3 text-white" />
                <Sparkles className="absolute bottom-1 right-1 w-2 h-2 text-white" />
              </motion.div>
              
              <span className="relative z-10 font-display text-white text-lg font-black tracking-tight">
                TT
              </span>
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`font-display text-2xl font-black tracking-tight transition-colors ${
                  scrolled ? "text-primary-600" : "text-white"
                } drop-shadow-sm`}
              >
                TAM TAM
              </motion.span>
              <span className={`text-xs font-medium -mt-1 ${
                scrolled ? "text-secondary-500" : "text-white/80"
              }`}>
                Premium Snacks
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {Object.entries(navItems).map(([key, translations]) => (
              <motion.div key={key} className="relative">
                <Link
                  href={`/${key === "home" ? "" : key}`}
                  className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    scrolled 
                      ? "text-gray-700 hover:text-primary-600 hover:bg-primary-50" 
                      : "text-white hover:text-primary-100 hover:bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    {translations[language]}
                  </motion.span>
                  
                  {/* Animated hover background */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${
                      scrolled ? "bg-primary-100" : "bg-white/20"
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Shop Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(245,158,11,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ml-2 ${
                scrolled
                  ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-50 shadow-lg"
              }`}
            >
              <ShoppingBag size={16} />
              <span>{language === "en" ? "Shop" : "Nunua"}</span>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ml-2 border-2 ${
                scrolled
                  ? "bg-white text-primary-600 border-primary-200 hover:border-primary-300 shadow-sm"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              }`}
              aria-label={
                language === "en"
                  ? "Switch to Swahili"
                  : "Switch to English"
              }
            >
              <motion.div
                animate={{ rotate: language === "en" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <Languages size={16} />
              </motion.div>
              <span className="font-bold text-sm">
                {language === "en" ? "SW" : "EN"}
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Shop Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm transition-all ${
                scrolled
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 shadow-lg"
              }`}
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">
                {language === "en" ? "Shop" : "Nunua"}
              </span>
            </motion.button>

            {/* Mobile Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all border-2 ${
                scrolled
                  ? "bg-white text-primary-600 border-primary-200 shadow-sm"
                  : "bg-white/10 text-white border-white/30 backdrop-blur-sm"
              }`}
              aria-label={
                language === "en"
                  ? "Switch to Swahili"
                  : "Switch to English"
              }
            >
              <Languages size={14} />
              <span className="font-bold text-sm">
                {language === "en" ? "SW" : "EN"}
              </span>
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              className={`p-2.5 rounded-full transition-all ${
                scrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/10 text-white backdrop-blur-sm"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X size={24} className={scrolled ? "text-primary-600" : "text-white"} />
                ) : (
                  <Menu size={24} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className={`rounded-2xl m-4 p-4 ${
                scrolled 
                  ? "bg-white shadow-xl border border-gray-100" 
                  : "bg-white/10 backdrop-blur-lg border border-white/20"
              }`}>
                <nav className="flex flex-col gap-2">
                  {Object.entries(navItems).map(([key, translations], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`/${key === "home" ? "" : key}`}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all font-semibold ${
                          scrolled
                            ? "text-gray-800 hover:bg-primary-50 hover:text-primary-600"
                            : "text-white hover:bg-white/10"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            scrolled ? "bg-primary-400" : "bg-white/60"
                          }`} />
                          <span>{translations[language]}</span>
                        </motion.div>
                        
                        {/* Navigation arrow */}
                        <motion.div
                          whileHover={{ x: 3 }}
                          className={`w-1.5 h-1.5 border-r-2 border-t-2 rotate-45 ${
                            scrolled ? "border-primary-400" : "border-white/60"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg"
                    >
                      🛒 {language === "en" ? "Start Shopping" : "Anza Ununuzi"}
                    </motion.button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}