'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, MessageCircle, Star, Globe } from "lucide-react";

const ContactSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative overflow-hidden">
      {/* Fun background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-10 h-10 bg-snack-cheese rounded-full animate-float opacity-15"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-secondary-400 rounded-full animate-bounce-fun opacity-20"></div>
        <div className="absolute bottom-24 left-1/4 w-8 h-8 bg-accent-400 rounded-full animate-float opacity-18"></div>
        <div className="absolute bottom-16 right-1/3 w-12 h-12 bg-snack-orange rounded-full animate-bounce-fun opacity-12"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary-400 rounded-full animate-float opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Fade direction="left" triggerOnce>
            <div>
              {/* Header with fun icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center animate-pulse-glow">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                    {language === 'en' 
                      ? 'Find TAM TAM Near You!' 
                      : 'Pata TAM TAM Karibu Nawe!'}
                  </h2>
                  <p className="text-primary-600 font-medium">
                    {language === 'en' ? 'Snack Factory & Headquarters' : 'Kiwanda cha Vitafunio & Makao Makuu'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border-2 border-primary-100 hover:border-primary-300 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Our Factory Location' : 'Mahali pa Kiwanda Chetu'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        TAM TAM Snacks Manufacturing Ltd.<br />
                        Unubini Cocacola, Chang&apos;ombe<br />
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border-2 border-secondary-100 hover:border-secondary-300 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Visit Us' : 'Tutembelee'}
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p><span className="font-medium">Mon-Fri:</span> 8:00 AM - 5:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 9:00 AM - 2:00 PM</p>
                        <p><span className="font-medium text-accent-600">Factory Tours:</span> By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border-2 border-accent-100 hover:border-accent-300 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Get In Touch' : 'Wasiliana Nasi'}
                      </h3>
                      <div className="text-gray-700 space-y-2">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          +255 698 718 888
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          +255 772 111 006
                        </p>
                        <p className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-secondary-500" />
                          <a href="https://happytamtam.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-700 font-medium">
                            happytamtam.com
                          </a>
                        </p>
                        <p className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-accent-500" />
                          @tamtamsnacks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-layer group"
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    {language === 'en' ? 'Get Directions' : 'Pata Maelekezo'}
                  </Link>

                  <Link
                    href="/factory-tour"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-300 text-primary-600 hover:bg-primary-50 hover:border-primary-400 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-soft group"
                  >
                    <Star className="w-5 h-5 mr-3" />
                    {language === 'en' ? 'Book Factory Tour' : 'Book Ziara ya Kiwanda'}
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
          
          <Fade direction="right" triggerOnce>
            <div className="relative">
              {/* Map container with fun border */}
              <div className="h-96 bg-white rounded-2xl overflow-hidden shadow-layer border-4 border-primary-200 relative">
                {/* Actual Google Maps iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.041888038025!2d39.28447!3d-6.81667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMDAuMSJTIDM5wrAxNycwNC4xIkU!5e0!3m2!1sen!2stz!4v1642000000000!5m2!1sen!2stz&q=Unubini+Cocacola+Chang'ombe+Dar+es+Salaam" 
                  width="100%" 
                  height="100%" 
                  loading="lazy" 
                  className="border-0"
                  allowFullScreen
                  aria-label={language === 'en' ? "Visit TAM TAM Factory at Unubini Cocacola, Chang&apos;ombe": "Tembelea Kiwanda cha TAM TAM kwa Unubini Cocacola, Chang&apos;ombe"}
                />
                
                {/* Fallback content (hidden when iframe loads) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                      TAM TAM Factory
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Unubini Cocacola, Chang&apos;ombe<br />
                      Dar es Salaam
                    </p>
                    
                    {/* Fun snack icons around the map */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-snack-cheese rounded-full animate-bounce-fun opacity-60"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 bg-secondary-400 rounded-full animate-float opacity-70"></div>
                    <div className="absolute bottom-4 left-4 w-7 h-7 bg-accent-400 rounded-full animate-float opacity-65"></div>
                    <div className="absolute bottom-4 right-4 w-5 h-5 bg-snack-orange rounded-full animate-bounce-fun opacity-75"></div>
                  </div>
                </div>
              </div>

              {/* Fun decorative elements around the map */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-400 rounded-full animate-float opacity-40"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-secondary-400 rounded-full animate-bounce-fun opacity-50"></div>
              <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-accent-400 rounded-full animate-float opacity-35"></div>
              <div className="absolute -bottom-6 -right-4 w-7 h-7 bg-snack-cheese rounded-full animate-bounce-fun opacity-45"></div>
            </div>
          </Fade>
        </div>

        {/* Fun tagline */}
        <Fade triggerOnce delay={400}>
          <div className="mt-12 text-center">
            <p className="text-2xl font-heading font-bold text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              {language === 'en' 
                ? 'Come see where the magic happens - Bidhaa Ya Ah... Adi...' 
                : 'Njoo uone mahali pa uchawi - Bidhaa Ya Ah... Adi...'}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ContactSection;