'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EducationalContent = () => {
    const { language } = useLanguage();
  
    const resources = [
      {
        title: {
          en: "How to Choose the Right Tractor",
          sw: "Jinsi ya Kuchagua Trekta Sahihi"
        },
        type: { en: "Guide", sw: "Mwongozo" }
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {language === 'en' 
                  ? 'Farmers Resources Center' 
                  : 'Kituo cha Rasilimali kwa Wakulima'}
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Learn how to maximize your farm productivity'
                  : 'Jifunze jinsi ya kuongeza tija ya shamba lako'}
              </p>
            </div>
          </Fade>
  
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                <div className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/tractor-guide.jpg" 
                      alt={resource.title[language]} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-2">
                      {resource.type[language]}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title[language]}
                    </h3>
                    <Link
                      href="/resources/how-to-choose-tractor"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {language === 'en' ? 'Read Now' : 'Soma Sasa'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default EducationalContent;