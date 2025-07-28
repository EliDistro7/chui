'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart, Star } from 'lucide-react';
import Link from 'next/link';

const footerContent = {
  company: {
    en: "Company",
    sw: "Kampuni"
  },
  links: {
    en: "Our Snacks",
    sw: "Vitafunio Vyetu"
  },
  contact: {
    en: "Get In Touch",
    sw: "Wasiliana Nasi"
  },
  newsletter: {
    en: "Join the TAM TAM Family!",
    sw: "Jiunge na Familia ya TAM TAM!"
  },
  subscribe: {
    en: "Subscribe",
    sw: "Jiandikishe"
  },
  rights: {
    en: "All rights reserved",
    sw: "Haki zote zimehifadhiwa"
  },
  privacy: {
    en: "Privacy Policy",
    sw: "Sera ya Faragha"
  },
  terms: {
    en: "Terms of Service",
    sw: "Sheria za Matumizi"
  },
  tagline: {
    en: "Making every moment deliciously happy!",
    sw: "Tukifanya kila wakati kuwa wa furaha na ladha!"
  }
};

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Fun background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-secondary-400 rounded-full animate-bounce-fun"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/5 w-14 h-14 bg-snack-cheese rounded-full animate-bounce-fun"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <span className="font-heading text-white text-xl font-bold">TT</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-white block leading-tight">
                  TAM TAM
                </span>
                <span className="text-primary-400 text-sm font-medium">
                  Happy Snacks
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              {language === 'en' 
                ? 'Bringing joy to families across Tanzania with our delicious and nutritious snacks. Every bite is a happy moment!' 
                : 'Tunawaletea furaha familia kote Tanzania kwa vitafunio vyetu vizuri na vya lishe. Kila ulaji ni wakati wa furaha!'}
            </p>

            {/* Tagline */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-bold text-lg">
              Bidhaa Ya Ah... Adi...
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary-400" />
              {footerContent.links[language]}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/single-product/1" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-snack-cheese rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {language === 'en' ? 'Cheese Balls' : 'Mpira wa Jibini'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/2" className="text-gray-400 hover:text-secondary-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-snack-chocolate rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {language === 'en' ? 'Choco Crunch' : 'Choco Crunch'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/3" className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-success-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {language === 'en' ? 'Multigrain Crisps' : 'Multigrain Crisps'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/4" className="text-gray-400 hover:text-snack-orange transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-snack-orange rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {language === 'en' ? 'TAM TAM Rings' : 'TAM TAM Rings'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/5" className="text-gray-400 hover:text-snack-strawberry transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-snack-strawberry rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {language === 'en' ? 'Choco Bites' : 'Choco Bites'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                  {language === 'en' ? 'View All Products →' : 'Angalia Bidhaa Zote →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent-400" />
              {footerContent.contact[language]}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Customer Care' : 'Huduma kwa Wateja'}
                  </p>
                  <a href="tel:+255123456789" className="text-white hover:text-primary-400 transition-colors font-medium">
                    +255 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Email Us' : 'Tutumie Barua Pepe'}
                  </p>
                  <a href="mailto:hello@tamtamsnacks.co.tz" className="text-white hover:text-secondary-400 transition-colors font-medium">
                    hello@tamtamsnacks.co.tz
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Snack Factory' : 'Kiwanda cha Vitafunio'}
                  </p>
                  <p className="text-white font-medium">
                    Industrial Area,<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              {footerContent.newsletter[language]}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {language === 'en' 
                ? 'Get exclusive offers, new product launches, and fun family activities delivered to your inbox!' 
                : 'Pokea ofa za kipekee, bidhaa mpya, na shughuli za familia zilizotumwa kwenye barua pepe yako!'}
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Your email address' : 'Barua pepe yako'}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 border-2 border-transparent focus:border-primary-300 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-layer"
              >
                {footerContent.subscribe[language]} 🎉
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm mb-2">
                © {new Date().getFullYear()} TAM TAM Snacks Ltd. {footerContent.rights[language]}
              </p>
              <p className="text-primary-400 text-sm font-medium italic">
                {footerContent.tagline[language]}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                  {footerContent.privacy[language]}
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-secondary-400 text-sm transition-colors">
                  {footerContent.terms[language]}
                </Link>
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-accent-400 animate-pulse" /> in Tanzania
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;