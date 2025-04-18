'use client'

import { useLanguage } from '@/context/LanguageContext';

import { Fade } from 'react-awesome-reveal';
import { Filter, Search, Tractor, Sprout, Sprout as Irrigation, Tractor as Harvester, Sprout as Tools, Warehouse } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import {productsData} from '@/data/index'

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

const productsContent = {
  title: {
    en: "Our Agricultural Products",
    sw: "Bidhaa Zetu za Kilimo"
  },
  subtitle: {
    en: "Premium quality equipment and supplies for modern farming",
    sw: "Vifaa na vifaa vya hali ya juu kwa kilimo cha kisasa"
  },
  searchPlaceholder: {
    en: "Search products...",
    sw: "Tafuta bidhaa..."
  },
  filterTitle: {
    en: "Filter by Category",
    sw: "Chuja kwa Kategoria"
  },
  viewAll: {
    en: "View All Products",
    sw: "Tazama Bidhaa Zote"
  },
  specifications: {
    en: "Key Specifications",
    sw: "Vipimo Muhimu"
  },
  categories: [
    {
      id: "tractors",
      name: { en: "Tractors & Machinery", sw: "Trekta na Mashine" },
      icon: <Tractor className="w-5 h-5" />
    },
    {
      id: "harvesters",
      name: { en: "Harvesting Equipment", sw: "Vifaa vya Kuvuna" },
      icon: <Harvester className="w-5 h-5" />
    },
    {
      id: "tillers",
      name: { en: "Tillers", sw: "Tillers" },
      icon: <Tools className="w-5 h-5" />
    },
    {
      id: "seeders",
      name: { en: "Seeders", sw: "Vifaa vya Kupanda" },
      icon: <Sprout className="w-5 h-5" />
    },
    {
      id: "fertilizers",
      name: { en: "Fertilizers & Inputs", sw: "Mbolea na Pembejeo" },
      icon: <Sprout className="w-5 h-5" />
    },
    {
      id: "irrigation",
      name: { en: "Irrigation Systems", sw: "Mifumo ya Umwagiliaji" },
      icon: <Irrigation className="w-5 h-5" />
    },
    {
      id: "storage",
      name: { en: "Storage Solutions", sw: "Vifaa vya Uhifadhi" },
      icon: <Warehouse className="w-5 h-5" />
    }
  ]
};

// Convert description into structured specifications
const parseSpecifications = (product, language) => {
  if (product.specifications) return product.specifications;
  
  // If there are no structured specifications, we extract them from description
  const description = product.description[language];
  const specs = [];
  
  // Extract specs based on common patterns in the descriptions
  if (description.includes("HP")) {
    const powerMatch = description.match(/(\d+HP|\d+ HP|HP \d+|HP \d+,|\d+,\s*\d+,\s*\d+HP)/i);
    if (powerMatch) {
      specs.push({
        name: { en: "Power", sw: "Nguvu" },
        value: { 
          en: powerMatch[0].replace(/,$/, ''),
          sw: powerMatch[0].replace(/,$/, '').replace('HP', 'HP')
        }
      });
    }
  }
  
  // Extract engine information
  if (description.toLowerCase().includes("engine")) {
    const engineMatch = description.match(/[^ ]+ engine|engine [^.]+/i);
    if (engineMatch) {
      specs.push({
        name: { en: "Engine", sw: "Injini" },
        value: { 
          en: engineMatch[0].replace(/,$/, ''),
          sw: language === 'en' ? engineMatch[0].replace(/,$/, '') : 'Injini ya ' + engineMatch[0].replace(/,$/, '')
        }
      });
    }
  }
  
  // Extract brakes information
  if (description.toLowerCase().includes("brake")) {
    const brakesMatch = description.match(/[^ ]+ (brakes|brake) [^,.]*/i);
    if (brakesMatch) {
      specs.push({
        name: { en: "Brakes", sw: "Breki" },
        value: { 
          en: brakesMatch[0].replace(/,$/, ''),
          sw: language === 'en' ? brakesMatch[0].replace(/,$/, '') : 'Breki za ' + brakesMatch[0].replace(/,$/, '')
        }
      });
    }
  }
  
  // Extract weight information
  if (description.toLowerCase().includes("kg")) {
    const weightMatch = description.match(/\d+\s*kg|\d+\.\d+\s*kg/i);
    if (weightMatch) {
      specs.push({
        name: { en: "Weight", sw: "Uzito" },
        value: { 
          en: weightMatch[0],
          sw: weightMatch[0]
        }
      });
    }
  }
  
  // If we couldn't extract specs or have fewer than 2, add a generic one
  if (specs.length < 2) {
    specs.push({
      name: { en: "Details", sw: "Maelezo" },
      value: { 
        en: description.split('.')[0] + '.',
        sw: description.split('.')[0] + '.'
      }
    });
  }
  
  return specs;
};

// Create a short description from the full description
const createShortDescription = (product, language) => {
  const fullDesc = product.description[language];
  const firstSentence = fullDesc.split('.')[0] + '.';
  return firstSentence.length > 100 ? firstSentence.substring(0, 100) + '...' : firstSentence;
};

export default function ProductsPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} bg-white`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display`}>
              {productsContent.title[language]}
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-sans`}>
              {productsContent.subtitle[language]}
            </p>
          </Fade>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filters and Search */}
          <Fade direction="up" triggerOnce>
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={productsContent.searchPlaceholder[language]}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-sans"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category Filter Dropdown (Mobile) */}
                <div className="md:hidden">
                  <div className="relative">
                    <select
                      className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-sans appearance-none"
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                    >
                      <option value="all">
                        {language === 'en' ? 'All Categories' : 'Kategoria Zote'}
                      </option>
                      {productsContent.categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name[language]}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Filter className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Filter (Desktop) */}
              <div className="hidden md:block">
                <h3 className={`text-lg font-bold text-gray-900 mb-4 font-display`}>
                  {productsContent.filterTitle[language]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors font-sans font-medium`}
                  >
                    {language === 'en' ? 'All Products' : 'Bidhaa Zote'}
                  </button>
                  {productsContent.categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 ${activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors font-sans font-medium`}
                    >
                      {category.icon}
                      {category.name[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Fade>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => {
                const specifications = parseSpecifications(product, language);
                const shortDescription = product.shortDescription ? 
                  product.shortDescription[language] : 
                  createShortDescription(product, language);
                
                return (
                  <Fade key={product.id} direction="up" delay={Math.min(index * 100, 300)} triggerOnce>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="h-48 bg-gray-100 overflow-hidden relative">
                        <img 
                          src={product.image} 
                          alt={product.name[language]} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {product.featured && (
                          <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {language === 'en' ? 'Featured' : 'Maalum'}
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium mb-2">
                            {productsContent.categories.find(c => c.id === product.category)?.name[language] || product.category}
                          </span>
                          <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                            {product.name[language]}
                          </h3>
                          
                          {/* Short description */}
                          <p className="text-gray-600 mb-4">
                            {shortDescription}
                          </p>
                          
                          {/* Specifications displayed as a structured list */}
                          <div className="mt-3">
                            <h4 className="font-medium text-gray-900 mb-2">
                              {productsContent.specifications[language]}
                            </h4>
                            <ul className="text-sm space-y-1">
                              {specifications.slice(0, 3).map((spec, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                                  <div>
                                    <span className="font-medium">{spec.name[language]}: </span>
                                    <span className="text-gray-600">{spec.value[language]}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <div className={`text-lg font-bold text-primary-600 mb-4 font-sans`}>
                            {product.price[language]}
                          </div>
                          <Link 
                            href={`/single-product/${product.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                          >
                            {language === 'en' ? 'View Details' : 'Angalia Maelezo'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          ) : (
            <Fade direction="up" triggerOnce>
              <div className="text-center py-12">
                <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                  {language === 'en' ? 'No products found' : 'Hakuna bidhaa zilizopatikana'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'en' 
                    ? 'Try adjusting your search or filter criteria' 
                    : 'Badilisha utafutaji au vigezo vya kuchuja'}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium"
                >
                  {language === 'en' ? 'Reset Filters' : 'Weka Upya Vichujio'}
                </button>
              </div>
            </Fade>
          )}

          {/* View All CTA */}
          {filteredProducts.length > 0 && activeCategory !== 'all' && (
            <Fade triggerOnce>
              <div className="mt-12 text-center">
                <Link
                  href="/products"
                  onClick={() => setActiveCategory('all')}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-lg"
                >
                  {productsContent.viewAll[language]}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* Special Offer Banner */}
      <Fade triggerOnce>
        <section className="bg-primary-700 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 font-display`}>
              {language === 'en' 
                ? 'Special Financing Available' 
                : 'Uwezo wa Kifedha Maalum Unapatikana'}
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Get flexible payment plans for all equipment purchases above TZS 10,000,000'
                : 'Pata mipango rahisi ya malipo kwa ununuzi wowote wa vifaa zaidi ya TZS Milioni 10'}
            </p>
            <Link
              href="/financing"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-700 hover:bg-gray-100 rounded-lg font-bold text-lg"
            >
              {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </Fade>
    </div>
  );
}