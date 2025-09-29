"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Languages, Battery, MapPin, Zap, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
  home: {
    en: "Home",
    sw: "Nyumbani",
  },
  products: {
    en: "Batteries",
    sw: "Betri",
  },
  about: {
    en: "About CHUI",
    sw: "Kuhusu CHUI",
  },
  contact: {
    en: "Contact",
    sw: "Mawasiliano",
  },
};

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { getTotalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = getTotalItems();

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
          : "bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-800/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 pl-2">
        <div className="flex items-center justify-between h-18">
          {/* CHUI Logo */}
          <Link href="/" className="flex items-center gap-3 group px-0 mx-0">
            <motion.div 
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -3, 3, 0],
                boxShadow: "0 0 25px rgba(251,191,36,0.5)"
              }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center shadow-lg overflow-hidden border border-primary-300/20"
            />
            
            <div className="flex flex-col px-0 mr-3">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`font-display text-2xl font-black tracking-tight transition-colors ${
                  scrolled ? "text-slate-800" : "text-white"
                } drop-shadow-sm`}
              >
                CHUI
              </motion.span>
              <span className={`text-xs font-medium -mt-1 ${
                scrolled ? "text-primary-600" : "text-primary-300"
              }`}>
                {language === "en" ? "Betri ni Chui" : "Betri ni Chui"}
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
                      : "text-white hover:text-primary-200 hover:bg-white/10 backdrop-blur-sm"
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

            {/* Cart Icon - Desktop */}
            <Link href="/cart">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ml-2 ${
                  scrolled
                    ? "bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300 shadow-sm"
                    : "bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <ShoppingCart size={18} />
                <AnimatePresence mode="wait">
                  {totalItems > 0 && (
                    <motion.span
                      key={totalItems}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5 shadow-lg"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </Link>

            {/* Shop Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(251,191,36,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-primary-500 to-orange-500 text-white hover:from-primary-600 hover:to-orange-600 shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-50 shadow-lg"
              }`}
            >
              <Link href="/products" className="flex items-center gap-2">
                <Battery size={16} />
                <span>{language === "en" ? "Buy Now" : "Nunua Sasa"}</span>
              </Link>
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
              <span className="font-bold text-sm">
                {language === "en" ? "SW" : "EN"}
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Cart Icon */}
            <Link href="/cart">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-all border-2 ${
                  scrolled
                    ? "bg-white text-primary-600 border-primary-200 shadow-sm"
                    : "bg-white/10 text-white border-white/30 backdrop-blur-sm"
                }`}
              >
                <ShoppingCart size={16} />
                <AnimatePresence mode="wait">
                  {totalItems > 0 && (
                    <motion.span
                      key={totalItems}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-lg"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </Link>

            {/* Mobile Shop Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm transition-all ${
                scrolled
                  ? "bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg"
                  : "bg-white text-primary-600 shadow-lg"
              }`}
            >
              <Link href="/products" className="flex items-center gap-1.5">
                <Battery size={14} />
                <span className="sm:inline">
                  {language === "en" ? "Buy" : "Nunua"}
                </span>
              </Link>
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
                          <motion.div 
                            animate={{ 
                              backgroundColor: scrolled ? "#fbbf24" : "#ffffff60",
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              scale: { duration: 2, repeat: Infinity },
                              backgroundColor: { duration: 0.3 }
                            }}
                            className="w-2 h-2 rounded-full"
                          />
                          <span>{translations[language]}</span>
                          
                          {key === "products" && (
                            <Battery className="w-4 h-4 opacity-60" />
                          )}
                        </motion.div>
                        
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
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(251,191,36,0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <Link href="/products" className="flex items-center gap-2">
                          <Battery className="w-5 h-5" />
                          <span>
                            {language === "en" ? "Shop CHUI Batteries" : "Nunua Betri za CHUI"}
                          </span>
                          <Zap className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.button>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className={`text-xs text-center mt-2 ${
                        scrolled ? "text-gray-500" : "text-white/70"
                      }`}
                    >
                      {language === "en" 
                        ? "German Technology • 24 Month Warranty" 
                        : "Teknolojia ya Kijerumani • Dhamana ya Miezi 24"
                      }
                    </motion.p>
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