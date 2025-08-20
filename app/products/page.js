'use client'

import { useLanguage } from '@/context/LanguageContext';
import { Fade } from 'react-awesome-reveal';
import { Filter, Search, Star, Heart, ShoppingCart, Sparkles, Zap, Battery, BatteryCharging, Power } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { productsData, categories } from '@/data/index';

// Font definitions
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville'
});

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans'
});

const productsContent = {
  title: {
    en: "CHUI Battery Collection",
    sw: "Mkusanyiko wa Betri za CHUI"
  },
  subtitle: {
    en: "Discover our reliable range of maintenance-free batteries with German technology",
    sw: "Gundua aina zetu za kuaminika za betri zisizohitaji ukarabati na teknolojia ya Kijerumani"
  },
  searchPlaceholder: {
    en: "Search for your battery solution...",
    sw: "Tafuta suluhisho lako la betri..."
  },
  filterTitle: {
    en: "Choose Your Power",
    sw: "Chagua Nguvu Yako"
  },
  viewAll: {
    en: "View All Batteries",
    sw: "Tazama Betri Zote"
  },
  specifications: {
    en: "Battery Specifications",
    sw: "Vipimo vya Betri"
  },
  addToCart: {
    en: "Add to Cart",
    sw: "Ongeza Kwenye Cart"
  },
  rating: {
    en: "Rating",
    sw: "Ukadiriaji"
  },
  newProduct: {
    en: "New!",
    sw: "Mpya!"
  },
  popular: {
    en: "Popular",
    sw: "Maarufu"
  },
  trusted: {
    en: "Trusted",
    sw: "Imezalishwa"
  },
  germanTech: {
    en: "German Tech",
    sw: "Teknolojia ya Kijerumani"
  }
};

// Enhanced specifications parsing for battery products
const parseSpecifications = (product, language) => {
  if (product.specifications) return product.specifications;
  
  // Default specs for batteries if not provided
  return [
    {
      name: { en: "Voltage", sw: "Volti" },
      value: { en: "12V", sw: "12V" }
    },
    {
      name: { en: "Type", sw: "Aina" },
      value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
    }
  ];
};

// Create engaging short descriptions
const createShortDescription = (product, language) => {
  const fullDesc = product.description?.[language];
  if (!fullDesc) return '';
  
  const firstSentence = fullDesc.split('.')[0] + '.';
  return firstSentence.length > 120 ? firstSentence.substring(0, 120) + '...' : firstSentence;
};

export default function ProductsPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name?.[language]?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description?.[language]?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Floating elements similar to testimonials
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '💬', '⭐', '🎯'][i % 8],
  }));

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} tp-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-sans relative overflow-hidden`}>
      {/* Animated Background Elements - Same as testimonials */}
      <div className="absolute inset-0 z-0">
        {floatingElements.map((element, i) => (
          <div
            key={element.id}
            className="absolute text-2xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay - Same as testimonials */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Battery power decorations - Same as testimonials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-500/20 rounded-sm animate-pulse opacity-20"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-500/20 rounded-sm animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-blue-500/20 rounded-sm animate-pulse opacity-25"></div>
        <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-green-500/20 rounded-sm animate-bounce opacity-20"></div>
      </div>

      {/* Header Section */}
      <section className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade direction="down" triggerOnce>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 animate-pulse" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
                {productsContent.title[language]}
              </h1>
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {productsContent.subtitle[language]}
            </p>
          </Fade>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" triggerOnce>
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Enhanced Search Bar */}
              <div className="relative group w-full">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none z-10">
                  <Search className="h-4 w-4 md:h-5 md:w-5 text-blue-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={productsContent.searchPlaceholder[language]}
                  className="block w-full pl-10 md:pl-12 pr-12 md:pr-16 py-3 md:py-4 border-2 border-white/20 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:border-yellow-400/50 transition-all duration-300 text-sm md:text-base placeholder-blue-200 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-1.5 md:p-2 shadow-lg">
                    <Battery className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === 'all' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' 
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg border border-white/20'
                  }`}
                >
                  <span className="mr-1 md:mr-2">🔋</span>
                  <span className="hidden sm:inline">{language === 'en' ? 'All Batteries' : 'Zote'}</span>
                  <span className="sm:hidden">{language === 'en' ? 'All' : 'Zote'}</span>
                </button>
                {categories.filter(cat => cat.id !== 'all').map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 md:gap-2 ${
                      activeCategory === category.id 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' 
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg border border-white/20'
                    }`}
                  >
                    <span className="text-sm md:text-lg">{category.icon}</span>
                    <span className="hidden lg:inline">{category.name[language]}</span>
                  </button>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => {
                const specifications = parseSpecifications(product, language);
                const shortDescription = product.shortDescription ? 
                  product.shortDescription[language] : 
                  createShortDescription(product, language);
                
                return (
                  <Fade key={product.id} direction="up" delay={Math.min(index * 50, 200)} triggerOnce>
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-white/20 hover:border-yellow-400/50">
                      {/* Product Image with Overlay */}
                      <div className="relative h-56 sm:h-64 md:h-72 lg:h-56 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name?.[language]} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-110"
                        />
                        
                        {/* Power indicator background pattern - like testimonials */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-full opacity-50"></div>
                        
                        {/* Badges */}
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex flex-col gap-1 md:gap-2 z-20">
                          {product.featured && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse shadow-lg">
                              ⭐ {language === 'en' ? 'Featured' : 'Maalum'}
                            </span>
                          )}
                          {index < 2 && (
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                              🔥 {productsContent.popular[language]}
                            </span>
                          )}
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                            🇩🇪 {productsContent.germanTech[language]}
                          </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-20 border border-white/30"
                        >
                          <Heart 
                            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                              favorites.has(product.id) 
                                ? 'text-red-400 fill-current' 
                                : 'text-white hover:text-red-400'
                            }`}
                          />
                        </button>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                      </div>

                      {/* Product Details */}
                      <div className="p-4 md:p-6">
                        {/* Category Tag and Rating */}
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <span className="inline-flex items-center px-2 md:px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full text-xs font-semibold border border-yellow-400/30">
                            <span className="mr-1">{categories.find(c => c.id === product.category)?.icon}</span>
                            <span className="hidden sm:inline">{categories.find(c => c.id === product.category)?.name?.[language]}</span>
                          </span>
                          
                          {/* Rating */}
                          {product.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                              <span className="text-xs md:text-sm font-bold text-white">{product.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors leading-tight">
                          {product.name?.[language]}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-blue-100 mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-2">
                          {shortDescription}
                        </p>
                        
                        {/* Specifications as Pills */}
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                          {specifications.slice(0, 3).map((spec, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-white/20">
                              <span className="text-xs font-medium text-blue-200">
                                {spec.name[language]}: <span className="font-bold text-yellow-400">{spec.value[language]}</span>
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between">
                          <div className="text-xl md:text-2xl font-display font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            {product.price?.[language]}
                          </div>
                          
                          <div className="flex gap-2">
                            <Link 
                              href={`/single-product/${product.id}`}
                              className="flex items-center justify-center p-2 text-yellow-400 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm border border-white/20"
                            >
                              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            
                            <button className="flex items-center justify-center p-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                              <Plus className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Power indicator icon - like testimonials */}
                        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">⚡</span>
                          </div>
                        </div>

                        {/* Floating sparkle effects on hover - like testimonials */}
                        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          ) : (
            <Fade direction="up" triggerOnce>
              <div className="text-center py-12 md:py-20">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                  <Battery className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 md:mb-4">
                  {language === 'en' ? 'No batteries found' : 'Hakuna betri zilizopatikana'}
                </h3>
                <p className="text-blue-100 mb-6 md:mb-8 text-base md:text-lg max-w-md mx-auto">
                  {language === 'en' 
                    ? 'Try a different search or explore our categories' 
                    : 'Jaribu utafutaji mwingine au chunguza kategoria zetu'}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' ? 'Show All Batteries' : 'Onyesha Betri Zote'}
                </button>
              </div>
            </Fade>
          )}

          {/* Enhanced CTA Section */}
          {filteredProducts.length > 0 && (
            <Fade triggerOnce>
              <div className="mt-12 md:mt-20 text-center bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg border-2 border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-3 md:mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
                    {language === 'en' ? 'Need More Power?' : 'Unahitaji Nguvu Zaidi?'}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto">
                    {language === 'en' 
                      ? 'Discover our complete collection of reliable battery solutions' 
                      : 'Gundua mkusanyiko wetu kamili wa mifumo ya betri za kuaminika'}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Battery className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    {language === 'en' ? 'Explore All Solutions' : 'Chunguza Suluhisho Zote'}
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
                  </Link>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* CHUI brand tagline - like testimonials */}
      <Fade triggerOnce delay={400}>
        <div className="pb-8 text-center relative z-10">
          <p className="text-2xl font-heading font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {language === 'en' ? 'The Power Leader Experience' : 'Uzoefu wa Kiongozi wa Nguvu'}
          </p>
        </div>
      </Fade>
    </div>
  );
}