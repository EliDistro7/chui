'use client'

import { useLanguage } from '@/context/LanguageContext';
import { Fade } from 'react-awesome-reveal';
import { Filter, Search, Star, Heart, ShoppingCart, Sparkles, Zap } from 'lucide-react';
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
    en: "TAM TAM Snack Collection",
    sw: "Mkusanyiko wa Vitafunio vya TAM TAM"
  },
  subtitle: {
    en: "Discover our delicious range of premium snacks",
    sw: "Gundua aina zetu za vitafunio vya hali ya juu"
  },
  searchPlaceholder: {
    en: "Search for your favorite snack...",
    sw: "Tafuta kitafunio chako unachokipenda..."
  },
  filterTitle: {
    en: "Choose Your Flavor",
    sw: "Chagua Ladha Yako"
  },
  viewAll: {
    en: "View All Snacks",
    sw: "Tazama Vitafunio Vyote"
  },
  specifications: {
    en: "Product Details",
    sw: "Maelezo ya Bidhaa"
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
  }
};

// Enhanced specifications parsing for snack products
const parseSpecifications = (product, language) => {
  if (product.specifications) return product.specifications;
  
  // Default specs for snacks if not provided
  return [
    {
      name: { en: "Weight", sw: "Uzito" },
      value: { en: "50g", sw: "50g" }
    },
    {
      name: { en: "Type", sw: "Aina" },
      value: { en: "Premium Snack", sw: "Kitafunio cha Hali ya Juu" }
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

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 font-sans`}>
      {/* Short Intro Section with Parallax Background */}
      <section className="relative overflow-hidden bg-primary-500 py-12 md:py-16">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
          }}
        />
        
        {/* Floating Snack Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-10 left-10 w-12 h-12 md:w-16 md:h-16 text-4xl md:text-5xl opacity-30 animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            🍿
          </div>
          <div 
            className="absolute top-20 right-20 w-12 h-12 md:w-16 md:h-16 text-4xl md:text-5xl opacity-30 animate-bounce-fun"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            🥨
          </div>
          <div 
            className="absolute bottom-10 left-1/4 w-12 h-12 md:w-16 md:h-16 text-4xl md:text-5xl opacity-30 animate-float"
            style={{ transform: `translateY(${scrollY * 0.4}px)`, animationDelay: '1s' }}
          >
            🍪
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                {productsContent.title[language]}
              </h1>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {productsContent.subtitle[language]}
            </p>
          </Fade>
        </div>
      </section>

      {/* Search and Filter Section with Parallax */}
      <section 
        className="py-8 md:py-12 bg-white shadow-soft border-b border-neutral-200 relative z-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" triggerOnce>
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Enhanced Search Bar */}
              <div className="relative group w-full">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none z-10">
                  <Search className="h-4 w-4 md:h-5 md:w-5 text-primary-400 group-focus-within:text-primary-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={productsContent.searchPlaceholder[language]}
                  className="block w-full pl-10 md:pl-12 pr-12 md:pr-16 py-3 md:py-4 border-2 border-neutral-200 rounded-xl md:rounded-2xl bg-white shadow-soft focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm md:text-base placeholder-neutral-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center">
                  <div className="bg-primary-500 rounded-lg p-1.5 md:p-2 shadow-glow">
                    <Zap className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === 'all' 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow' 
                      : 'bg-white text-neutral-700 hover:bg-neutral-50 shadow-soft border border-neutral-200'
                  }`}
                >
                  <span className="mr-1 md:mr-2">🍿</span>
                  <span className="hidden sm:inline">{language === 'en' ? 'All Snacks' : 'Vyote'}</span>
                  <span className="sm:hidden">{language === 'en' ? 'All' : 'Vyote'}</span>
                </button>
                {categories.filter(cat => cat.id !== 'all').map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 md:gap-2 ${
                      activeCategory === category.id 
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow' 
                        : 'bg-white text-neutral-700 hover:bg-neutral-50 shadow-soft border border-neutral-200'
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

      {/* Products Grid with Parallax Effects */}
      <section 
        className="py-8 md:py-12 lg:py-16 relative"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {/* Background Parallax Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div 
            className="absolute top-20 right-10 text-6xl md:text-8xl"
            style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)` }}
          >
            🌟
          </div>
          <div 
            className="absolute bottom-40 left-10 text-6xl md:text-8xl"
            style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.1}deg)` }}
          >
            🎉
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => {
                const specifications = parseSpecifications(product, language);
                const shortDescription = product.shortDescription ? 
                  product.shortDescription[language] : 
                  createShortDescription(product, language);
                
                return (
                  <Fade key={product.id} direction="up" delay={Math.min(index * 50, 200)} triggerOnce>
                    <div 
                      className="group relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-soft hover:shadow-layer transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-neutral-100 hover:border-primary-200"
                      style={{
                        transform: `translateY(${Math.sin((scrollY + index * 100) * 0.001) * 5}px)`,
                      }}
                    >
                      {/* Product Image with Overlay - Bold Full Coverage */}
                      <div className="relative h-56 sm:h-64 md:h-72 lg:h-56 bg-neutral-900 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name?.[language]} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-110 saturate-110"
                        />
                        
                        {/* Badges - Enhanced visibility */}
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex flex-col gap-1 md:gap-2 z-20">
                          {product.featured && (
                            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse-glow shadow-lg">
                              ⭐ {language === 'en' ? 'Featured' : 'Maalum'}
                            </span>
                          )}
                          {index < 2 && (
                            <span className="bg-accent-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                              🔥 {productsContent.popular[language]}
                            </span>
                          )}
                        </div>

                        {/* Favorite Button - Enhanced visibility */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-20 border border-white/50"
                        >
                          <Heart 
                            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                              favorites.has(product.id) 
                                ? 'text-accent-500 fill-current' 
                                : 'text-neutral-500 hover:text-accent-500'
                            }`}
                          />
                        </button>

                        {/* Bold Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                      </div>

                      {/* Product Details */}
                      <div className="p-4 md:p-6">
                        {/* Category Tag and Rating */}
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <span className="inline-flex items-center px-2 md:px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-semibold">
                            <span className="mr-1">{categories.find(c => c.id === product.category)?.icon}</span>
                            <span className="hidden sm:inline">{categories.find(c => c.id === product.category)?.name?.[language]}</span>
                          </span>
                          
                          {/* Rating */}
                          {product.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 md:w-4 md:h-4 text-snack-cheese fill-current" />
                              <span className="text-xs md:text-sm font-bold text-neutral-700">{product.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg md:text-xl font-heading font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                          {product.name?.[language]}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-neutral-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-2">
                          {shortDescription}
                        </p>
                        
                        {/* Specifications as Pills */}
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                          {specifications.slice(0, 2).map((spec, idx) => (
                            <div key={idx} className="bg-neutral-50 rounded-full px-2 md:px-3 py-1">
                              <span className="text-xs font-medium text-neutral-600">
                                {spec.name[language]}: {spec.value[language]}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between">
                          <div className="text-xl md:text-2xl font-display font-black text-primary-600">
                            {product.price?.[language]}
                          </div>
                          
                          <div className="flex gap-2">
                            <Link 
                              href={`/single-product/${product.id}`}
                              className="flex items-center justify-center p-2 text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                            >
                              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            
                            <button className="flex items-center justify-center p-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                              <Plus className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                          </div>
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
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-primary-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 mb-3 md:mb-4">
                  {language === 'en' ? 'No snacks found' : 'Hakuna vitafunio vilivyopatikana'}
                </h3>
                <p className="text-neutral-600 mb-6 md:mb-8 text-base md:text-lg max-w-md mx-auto">
                  {language === 'en' 
                    ? 'Try a different search or explore our categories' 
                    : 'Jaribu utafutaji mwingine au chunguza kategoria zetu'}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-soft hover:shadow-layer transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' ? 'Show All Snacks' : 'Onyesha Vitafunio Vyote'}
                </button>
              </div>
            </Fade>
          )}

          {/* Enhanced CTA Section with Parallax */}
          {filteredProducts.length > 0 && (
            <Fade triggerOnce>
              <div 
                className="mt-12 md:mt-20 text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-layer"
                style={{
                  transform: `translateY(${scrollY * 0.08}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-3 md:mb-4">
                    {language === 'en' ? 'Craving More?' : 'Unataka Zaidi?'}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
                    {language === 'en' 
                      ? 'Discover our complete collection of delicious snacks' 
                      : 'Gundua mkusanyiko wetu kamili wa vitafunio vizuri'}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-layer"
                  >
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    {language === 'en' ? 'Explore All Flavors' : 'Chunguza Ladha Zote'}
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
                  </Link>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>
    </div>
  );
}