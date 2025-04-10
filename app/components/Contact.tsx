'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";


const ContactSection = () => {
    const { language } = useLanguage();
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {language === 'en' 
                    ? 'Visit Our Showroom' 
                    : 'Tembelea Jumba Showroom yetu'}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'Location' : 'Mahali'}
                    </h3>
                    <p className="text-gray-700">
                      123 Agriculture Street, Dar es Salaam, Tanzania
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'Working Hours' : 'Masaa ya Kazi'}
                    </h3>
                    <p className="text-gray-700">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium mt-4"
                  >
                    {language === 'en' ? 'Get Directions' : 'Pata Maelekezo'}
                  </Link>
                </div>
              </div>
            </Fade>
            
            <Fade direction="right" triggerOnce>
              <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with actual map component */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.041888038025!2d39.20853831528629!3d-6.792795795044511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f53a0e1e4c1%3A0x5f9b8e9e9e9e9e9e!2s123%20Agriculture%20Street%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz" 
                    width="100%" 
                    height="100%" 
                    loading="lazy" 
                    className="border-0"
                    allowFullScreen
                    aria-label={language === 'en' ? "Visit us": "Tutembelee"}
                  ></iframe>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  };

  export default ContactSection