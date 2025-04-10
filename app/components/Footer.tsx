'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerContent = {
  company: {
    en: "Company",
    sw: "Kampuni"
  },
  links: {
    en: "Quick Links",
    sw: "Viungo Haraka"
  },
  contact: {
    en: "Contact Us",
    sw: "Wasiliana Nasi"
  },
  newsletter: {
    en: "Subscribe to our newsletter",
    sw: "Jiandikishe kwa barua pepe yetu"
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
  }
};

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="font-display text-white text-lg">FF</span>
              </div>
              <span className="font-display text-xl font-bold text-white">
                FOURFREYN
              </span>
            </Link>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'Your trusted partner in agricultural solutions' 
                : 'Mshirika wako wa kuaminika katika ufumbuzi wa kilimo'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerContent.links[language]}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Products' : 'Bidhaa'}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Services' : 'Huduma'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'About Us' : 'Kuhusu Sisi'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Blog' : 'Makala'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Contact' : 'Mawasiliano'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerContent.contact[language]}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    {language === 'en' ? 'Sales Department' : 'Idara ya Mauzo'}
                  </p>
                  <a href="tel:+255123456789" className="text-white hover:text-primary-500 transition-colors">
                    +255 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    {language === 'en' ? 'Email Us' : 'Tutumie Barua Pepe'}
                  </p>
                  <a href="mailto:info@fourfreyn.co.tz" className="text-white hover:text-primary-500 transition-colors">
                    info@fourfreyn.co.tz
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    {language === 'en' ? 'Head Office' : 'Makao Makuu'}
                  </p>
                  <p className="text-white">
                    123 Agriculture Street,<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerContent.newsletter[language]}
            </h3>
            <p className="text-gray-400 mb-4">
              {language === 'en' 
                ? 'Get the latest updates on products and offers' 
                : 'Pata sasisho za hivi punde kuhusu bidhaa na ofa'}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email address' : 'Barua pepe yako'}
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 w-full"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                {footerContent.subscribe[language]}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Fourfreyn Company Limited. {footerContent.rights[language]}
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              {footerContent.privacy[language]}
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              {footerContent.terms[language]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;