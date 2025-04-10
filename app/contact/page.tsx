'use client'

import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import ContactForm from '@/app/components/ContactForm';

// Font definitions
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville'
});

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-source-sans'
});

const contactContent = {
  title: {
    en: "Get in Touch",
    sw: "Wasiliana Nasi"
  },
  subtitle: {
    en: "Our team is ready to assist you with all your agricultural needs",
    sw: "Timu yetu iko tayari kukusaidia kwa mahitaji yako yote ya kilimo"
  },
  contactInfo: {
    en: "Contact Information",
    sw: "Maelezo ya Mawasiliano"
  },
  visitUs: {
    en: "Visit Our Showroom",
    sw: "Tembelea Jumba Letu la Maonyesho"
  },
  address: {
    en: "123 Agriculture Street, Dar es Salaam, Tanzania",
    sw: "Barabara ya Kilimo 123, Dar es Salaam, Tanzania"
  },
  hoursTitle: {
    en: "Working Hours",
    sw: "Masaa ya Kazi"
  },
  hours: {
    en: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
    sw: "Jumatatu-Ijumaa: 8:00 asubuhi - 5:00 jioni\nJumamosi: 9:00 asubuhi - 2:00 jioni\nJumapili: Imefungwa"
  },
  formTitle: {
    en: "Send Us a Message",
    sw: "Tutumie Ujumbe"
  },
  formSubtitle: {
    en: "We'll respond within 24 hours",
    sw: "Tutajibu ndani ya masaa 24"
  }
};

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} bg-gray-50`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-100 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display`}>
              {contactContent.title[language]}
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-sans`}>
              {contactContent.subtitle[language]}
            </p>
          </Fade>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Fade direction="left" triggerOnce>
              <div className="space-y-10">
                <div>
                  <h2 className={`text-3xl font-bold text-gray-900 mb-6 font-display`}>
                    {contactContent.contactInfo[language]}
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <MapPin className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold text-gray-900 mb-1 font-display`}>
                          {contactContent.visitUs[language]}
                        </h3>
                        <p className="text-gray-700">
                          {contactContent.address[language]}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold text-gray-900 mb-1 font-display`}>
                          {language === 'en' ? 'Call Us' : 'Tupeigie Simu'}
                        </h3>
                        <div className="space-y-1">
                          <a href="tel:+255123456789" className="block text-gray-700 hover:text-primary-600 transition-colors">
                            +255 123 456 789 (Sales)
                          </a>
                          <a href="tel:+255987654321" className="block text-gray-700 hover:text-primary-600 transition-colors">
                            +255 987 654 321 (Support)
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold text-gray-900 mb-1 font-display`}>
                          {language === 'en' ? 'Email Us' : 'Tutumie Barua Pepe'}
                        </h3>
                        <div className="space-y-1">
                          <a href="mailto:sales@fourfreyn.co.tz" className="block text-gray-700 hover:text-primary-600 transition-colors">
                            sales@fourfreyn.co.tz
                          </a>
                          <a href="mailto:support@fourfreyn.co.tz" className="block text-gray-700 hover:text-primary-600 transition-colors">
                            support@fourfreyn.co.tz
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold text-gray-900 mb-1 font-display`}>
                          {contactContent.hoursTitle[language]}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                          {contactContent.hours[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.041888038025!2d39.20853831528629!3d-6.792795795044511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f53a0e1e4c1%3A0x5f9b8e9e9e9e9e9e!2s123%20Agriculture%20Street%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz" 
                    width="100%" 
                    height="100%" 
                    loading="lazy" 
                    className="border-0"
                    allowFullScreen
                    aria-label={contactContent.visitUs[language]}
                  ></iframe>
                </div>
              </div>
            </Fade>

            {/* Contact Form */}
            <Fade direction="right" triggerOnce>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="mb-8">
                  <h2 className={`text-3xl font-bold text-gray-900 mb-2 font-display`}>
                    {contactContent.formTitle[language]}
                  </h2>
                  <p className="text-gray-600">
                    {contactContent.formSubtitle[language]}
                  </p>
                </div>

                <ContactForm language={language} />

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 font-display`}>
                    {language === 'en' ? 'Follow Us' : 'Tufuate'}
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                      <Facebook className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                      <Twitter className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                      <Instagram className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}