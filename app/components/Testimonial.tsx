'use client';

import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      quote: {
        en: "Fourfreyn's tractors transformed our farm productivity",
        sw: "Trekta za Fourfreyn zilibadilisha utendaji kazi wa shamba letu"
      },
      name: "John Mwamba",
      location: { en: "Arusha", sw: "Mkoa wa Arusha" },
      image: "/farmer-1.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {language === 'en' 
                ? 'What Our Customers Say' 
                : 'Wateja Wetu Wanachosema'}
            </h2>
          </div>
        </Fade>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote[language]}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location[language]}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade triggerOnce delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              {language === 'en' ? 'View more testimonials' : 'Angalia ushuhuda zaidi'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials