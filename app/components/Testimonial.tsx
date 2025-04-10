'use client';

import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    },
    {
      quote: {
        en: "The irrigation systems doubled our crop yields",
        sw: "Mifumo ya umwagiliaji iliongeza mavuno yetu mara mbili"
      },
      name: "Sarah Juma",
      location: { en: "Morogoro", sw: "Mkoa wa Morogoro" },
      image: "/farmer-2.jpg"
    },
    {
      quote: {
        en: "Reliable equipment and excellent after-sales service",
        sw: "Vifaa thabiti na huduma bora ya baada ya mauzo"
      },
      name: "Michael Kileo",
      location: { en: "Kilimanjaro", sw: "Mkoa wa Kilimanjaro" },
      image: "/farmer-3.jpg"
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
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Hear from farmers who trust our solutions'
                : 'Sikiliza kutoka kwa wakulima ambao wanatuamini'}
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <blockquote className="text-gray-700 italic mb-6 flex-1">
                  &ldquo;{testimonial.quote[language]}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={48}
                      height={48}
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
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
            >
              {language === 'en' ? 'View more testimonials' : 'Angalia ushuhuda zaidi'}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;