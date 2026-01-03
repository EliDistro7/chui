'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Battery, Zap, Award, Globe } from 'lucide-react';
import Link from 'next/link';

const footerContent = {
  company: {
    en: "Company",
    sw: "Kampuni"
  },
  links: {
    en: "Our Batteries",
    sw: "Betri Zetu"
  },
  dealers: {
    en: "Find Dealers",
    sw: "Tafuta Madalali"
  },
  contact: {
    en: "Get In Touch",
    sw: "Wasiliana Nasi"
  },
  newsletter: {
    en: "Stay Powered Up!",
    sw: "Baki na Nguvu!"
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
  warranty: {
    en: "Warranty",
    sw: "Dhamana"
  },
  tagline: {
    en: "Betri ni Chui - Reliable Energy for Life!",
    sw: "Betri ni Chui - Nguvu za Kuaminika kwa Maisha!"
  }
};

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Electric background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary-400 rounded-full animate-pulse-electric"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-electric-400 rounded-full animate-voltage-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-secondary-400 rounded-full animate-power-glow"></div>
        <div className="absolute bottom-20 right-1/5 w-14 h-14 bg-battery-charge rounded-full animate-battery-bounce"></div>
        
        {/* Electric grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 via-orange-500 to-primary-600 flex items-center justify-center shadow-power group-hover:scale-110 transition-transform duration-300 border border-primary-300/20 relative overflow-hidden">
                {/* Electric pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-400/20 to-primary-400/20 animate-pulse-electric"></div>
                <Battery className="w-6 h-6 text-white relative z-10" />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-white block leading-tight">
                  CHUI
                </span>
                <span className="text-primary-400 text-sm font-medium">
                  {language === 'en' ? 'Power Leader' : 'Betri ni Chui'}
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              {language === 'en' 
                ? 'Powering Tanzania with reliable, maintenance-free batteries built with German technology. Every CHUI battery delivers consistent, dependable power for your journey.' 
                : 'Tunaongoza Tanzania kwa betri za kuaminika, zisizohitaji ukarabati zilizojengwa kwa teknolojia ya Kijerumani. Kila betri ya CHUI inatoa nguvu za kuaminika kwa safari yako.'}
            </p>

            {/* Key Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">{language === 'en' ? 'German Technology' : 'Teknolojia ya Kijerumani'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-electric-400" />
                <span className="text-gray-300">{language === 'en' ? 'Made in Tanzania' : 'Imetengenezwa Tanzania'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-secondary-400" />
                <span className="text-gray-300">{language === 'en' ? '12 Month Warranty' : 'Dhamana ya Miezi 12'}</span>
              </div>
            </div>
            
            {/* Social Media 
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft hover:shadow-electric">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft hover:shadow-electric">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft hover:shadow-electric">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-soft hover:shadow-electric">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            */}
          </div>

          {/* Battery Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Battery className="w-5 h-5 text-primary-400" />
              {footerContent.links[language]}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/single-product/2" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-battery-positive/20 rounded group-hover:bg-battery-positive/40 transition-colors">
                    <div className="w-2 h-3 bg-battery-positive rounded-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  {language === 'en' ? 'N50MF Compact (50AH)' : 'N50MF Ndogo (50AH)'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/4" className="text-gray-400 hover:text-secondary-400 transition-colors flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-battery-charge/20 rounded group-hover:bg-battery-charge/40 transition-colors">
                    <div className="w-2 h-3 bg-battery-charge rounded-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  {language === 'en' ? 'N70MF Heavy Duty (70AH)' : 'N70MF Kazi Nzito (70AH)'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/5" className="text-gray-400 hover:text-electric-400 transition-colors flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-electric-500/20 rounded group-hover:bg-electric-500/40 transition-colors">
                    <div className="w-2 h-3 bg-electric-500 rounded-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  {language === 'en' ? 'N100MF SUV Power (100AH)' : 'N100MF Nguvu SUV (100AH)'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/3" className="text-gray-400 hover:text-battery-capacity transition-colors flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-battery-capacity/20 rounded group-hover:bg-battery-capacity/40 transition-colors">
                    <div className="w-2 h-3 bg-battery-capacity rounded-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  {language === 'en' ? 'N150MF Industrial (150AH)' : 'N150MF Viwandani (150AH)'}
                </Link>
              </li>
              <li>
                <Link href="/single-product/7" className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-accent-500/20 rounded group-hover:bg-accent-500/40 transition-colors">
                    <div className="w-2 h-3 bg-accent-500 rounded-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  {language === 'en' ? 'N200MF Marine (200AH)' : 'N200MF Bahari (200AH)'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-400 hover:text-primary-300 transition-colors font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {language === 'en' ? 'View All Batteries →' : 'Angalia Betri Zote →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Dealers */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent-400" />
              {footerContent.contact[language]}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-power">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Customer Support' : 'Msaada kwa Wateja'}
                  </p>
                  <a href="tel:+255123456789" className="text-white hover:text-primary-400 transition-colors font-medium">
                    +255 768 484 715 <br/>
                   
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-electric-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-electric">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}
                  </p>
                  <a href="mailto:info@chui-battery-tanzania.com" className="text-white hover:text-secondary-400 transition-colors font-medium">
                   mpandilashop@gmail.com <br />
                  info@chui-battery-tanzania.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-electric-500 to-primary-500 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? 'Head Office' : 'Makao Makuu'}
                  </p>
                  <p className="text-white font-medium">
                    Industrial Area,<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </li>
            </ul>

            {/* Dealer Locator Link */}
        
          </div>

          {/* Newsletter & Warranty */}
          <div>
          

            {/* Warranty Info */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <Link href="/warranty" className="flex items-center gap-2 text-electric-400 hover:text-electric-300 transition-colors font-medium group">
                <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {footerContent.warranty[language]}
              </Link>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'en' ? '12-month comprehensive coverage' : 'Ulinzi mkamilifu wa miezi 12'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm mb-2">
                © {new Date().getFullYear()} CHUI Batteries Ltd. {footerContent.rights[language]}
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
                <Link href="/warranty" className="text-gray-500 hover:text-electric-400 text-sm transition-colors">
                  {footerContent.warranty[language]}
                </Link>
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-1">
                Powered by <Battery className="w-4 h-4 text-primary-400 animate-pulse" /> German Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;