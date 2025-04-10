'use client'

import { Fade } from "react-awesome-reveal";
import { CheckCircle, Shield, Truck, Sprout, Tractor, Tractor as Irrigation, Truck as Harvester, Tractor as Tools } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';

// Define your custom fonts
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

const ProductsShowcase = () => {
  const { language } = useLanguage();

  const products = [
    {
      name: { en: "Compact Tractors", sw: "Trekta Ndogo" },
      features: [
        { en: "15-35 HP range", sw: "Nguvu 15-35 HP" },
        { en: "Perfect for small farms", sw: "Bora kwa mashamba madogo" },
        { en: "Fuel-efficient engines", sw: "Injini zenye matumizi mazuri ya mafuta" }
      ],
      image: "/tractor-1.jpg",
      icon: <Tractor className="w-6 h-6 text-primary-600" />
    },
    {
      name: { en: "Organic Fertilizers", sw: "Mbolea ya Asili" },
      features: [
        { en: "100% natural ingredients", sw: "Vifaa 100% asili" },
        { en: "Improves soil health", sw: "Inaboresha afya ya udongo" },
        { en: "Certified organic", sw: "Imethibitishwa kuwa ya asili" }
      ],
      image: "/mbolea-1.jpg",
      icon: <Sprout className="w-6 h-6 text-primary-600" />
    },
    {
      name: { en: "Irrigation Systems", sw: "Mifumo ya Umwagiliaji" },
      features: [
        { en: "Drip & sprinkler options", sw: "Chagua kati ya umwagiliaji wa mifereji na wa kunyunyizia" },
        { en: "Water conservation", sw: "Uhifadhi wa maji" },
        { en: "Automated controls", sw: "Udhibiti wa kiotomatiki" }
      ],
      image: "/irrigation-1.jpg",
      icon: <Irrigation className="w-6 h-6 text-primary-600" />
    },
    {
      name: { en: "Combine Harvesters", sw: "Vifaa vkuvuna" },
      features: [
        { en: "High-capacity harvesting", sw: "Uwezo mkubwa wa kuvuna" },
        { en: "Multi-crop compatibility", sw: "Inafaa kwa mazao mbalimbali" },
        { en: "Low grain loss", sw: "Upotezaji mdogo wa nafaka" }
      ],
      image: "/harvestor-1.jpg",
      icon: <Harvester className="w-6 h-6 text-primary-600" />
    },
    {
      name: { en: "Farm Tools", sw: "Vifaa vya Shambani" },
      features: [
        { en: "Durable construction", sw: "Uimara wa juu" },
        { en: "Ergonomic designs", sw: "Miundo ya kuvumilia kazi" },
        { en: "Complete tool sets", sw: "Seti kamili za vifaa" }
      ],
      image: "/tools-1.jpg",
      icon: <Tools className="w-6 h-6 text-primary-600" />
    },
    {
      name: { en: "Grain Storage", sw: "Hifadhi ya Nafaka" },
      features: [
        { en: "Pest-proof solutions", sw: "Kuhifadhi bila mambuzi" },
        { en: "Various capacity options", sw: "Vipimo mbalimbali" },
        { en: "Moisture control", sw: "Udhibiti wa unyevu" }
      ],
      image: "/storage-1.jpg",
      icon: <Shield className="w-6 h-6 text-primary-600" />
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${sourceSans.variable} ${baskerville.variable}`}>
      <div className="container mx-auto px-6">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 font-heading tracking-tight`}>
              {language === 'en' ? 'Our Best Selling Products' : 'Bidhaa Zetu Zinazouzwa Zaidi'}
            </h2>
            <p className={`mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-sans`}>
              {language === 'en' 
                ? 'Trusted by thousands of farmers nationwide' 
                : 'Imeaminika na maelfu ya wakulima nchini'}
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-100 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name[language]} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 font-display`}>
                    {product.name[language]}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-sans">{feature[language]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/products" 
                      className={`text-primary-600 hover:text-primary-700 font-bold flex items-center font-sans`}
                    >
                      {language === 'en' ? 'View Details' : 'Angalia Maelezo'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-bold">
                      {language === 'en' ? 'In Stock' : 'Ipo'}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade triggerOnce delay={300}>
          <div className="mt-12 bg-primary-50 rounded-xl p-6 md:p-8 border border-primary-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 font-display`}>
                  {language === 'en' 
                    ? 'Need help choosing the right equipment?' 
                    : 'Unahitaji usaidizi kuchagua vifaa sahihi?'}
                </h3>
                <p className={`text-gray-700 font-sans`}>
                  {language === 'en'
                    ? 'Our agricultural experts will guide you to the perfect solution'
                    : 'Wataalamu wetu wa kilimo watakufanyia uongozi kwa uamuzi sahihi'}
                </p>
              </div>
              <Link
                href="/contact"
                className={`px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold whitespace-nowrap font-sans text-lg`}
              >
                {language === 'en' ? 'Consult Our Experts' : 'Shauriana na Wataalamu'}
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ProductsShowcase;