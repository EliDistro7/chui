
'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";


const SpecialOffer = () => {
    const { language } = useLanguage();
  
    return (
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Fade direction="up" triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'en'
                  ? 'Limited Time Offer on Tractors'
                  : 'Ofa ya Muda Kwa Trekta'}
              </h2>
            </Fade>
            
            <Fade direction="up" delay={200} triggerOnce>
              <p className="text-xl mb-8">
                {language === 'en'
                  ? 'Get 10% off on all tractor purchases this season with free delivery'
                  : 'Pata punguzo la 10% kwa ununuzi wa trekta msimu huu na uwasilishaji bure'}
              </p>
            </Fade>
  
            <Fade direction="up" delay={400} triggerOnce>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/promotions"
                  className="px-8 py-3.5 bg-white text-primary-700 hover:bg-gray-100 rounded-lg font-bold shadow-lg"
                >
                  {language === 'en' ? 'View Offer Details' : 'Angalia Maelezo ya Ofa'}
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold"
                >
                  {language === 'en' ? 'Contact Sales' : 'Wasiliana na Mauzo'}
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  };

  export default SpecialOffer;