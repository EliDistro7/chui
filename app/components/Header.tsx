"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
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
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-sm" : "shadow-none"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Company Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-sm"
            >
              <span className="font-display text-white text-lg font-semibold">FF</span>
            </motion.div>
            <span className="font-display text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors hidden sm:block">
              FOURFREYN
            </span>
            <span className="font-display text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors hidden md:block">
              COMPANY LIMITED
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {Object.entries(navItems).map(([key, translations]) => (
              <Link
                key={key}
                href={`/${key === "home" ? "" : key}`}
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  {translations[language]}
                </motion.span>
                <motion.span 
                  layoutId={`nav-underline-${key}`}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-primary-600 px-3 py-1.5 rounded-md transition-all border border-gray-200 shadow-sm ml-2"
              aria-label={
                language === "en"
                  ? "Switch to Swahili"
                  : "Switch to English"
              }
            >
              <Languages size={16} className="text-primary-600" />
              <span className="font-medium text-sm">
                {language === "en" ? "SW" : "EN"}
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 bg-white text-primary-600 px-3 py-1.5 rounded-md transition-all border border-gray-200 shadow-sm"
              aria-label={
                language === "en"
                  ? "Switch to Swahili"
                  : "Switch to English"
              }
            >
              <Languages size={16} className="text-primary-600" />
              <span className="font-medium text-sm">
                {language === "en" ? "SW" : "EN"}
              </span>
            </motion.button>
            
            <motion.button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-primary-600" />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-1 py-2">
                {Object.entries(navItems).map(([key, translations]) => (
                  <Link
                    key={key}
                    href={`/${key === "home" ? "" : key}`}
                    className="text-gray-800 hover:bg-gray-100 px-4 py-3 rounded-md transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <span>{translations[language]}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}