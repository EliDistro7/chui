'use client';
import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart, Zap, Battery, Award, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { productsData, categories } from '@/data/single.js';
import { motion, AnimatePresence } from 'framer-motion';

export default function CHUIBatteryShowcase() {
  const { language } = useLanguage();
  const { addToCart, getCartItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId) => {
    addToCart(productId, 1);
    setAddedToCart(prev => ({ ...prev, [productId]: true }));
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  const content = {
    title: {
      en: "CHUI Battery Collection",
      sw: "Betri za CHUI"
    },
    subtitle: {
      en: "Betri ni Chui - Reliable batteries with German technology for all your power needs!",
      sw: "Betri ni Chui - Betri za kuaminika na teknolojia ya Kijerumani kwa mahitaji yako yote ya nguvu!"
    },
    searchPlaceholder: {
      en: "Search CHUI batteries...",
      sw: "Tafuta betri za CHUI..."
    },
    addToCart: {
      en: "Add to Cart",
      sw: "Ongeza Kwenye Kikapu"
    },
    addedToCart: {
      en: "Added!",
      sw: "Imeongezwa!"
    },
    viewDetails: {
      en: "View Details",
      sw: "Angalia Maelezo"
    },
    specifications: {
      en: "Technical Specs",
      sw: "Vipimo vya Kiufundi"
    },
    noProducts: {
      en: "No batteries found",
      sw: "Hakuna betri zilizopatikana"
    },
    resetFilters: {
      en: "Reset Filters",
      sw: "Weka Upya Vichujio"
    }
  };

  // Floating elements similar to hero
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '🎯', '💪', '🚗', '🔧', '⭐', '🏆', '🌟'][i % 12],
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, i) => (
          <div
            key={element.id}
            className="absolute text-2xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-gray-800/20 text-white py-16 backdrop-blur-sm border-b border-white/10">
        {/* Floating Background Elements for Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">🔋</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-20">⚡</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-20">🔌</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-pulse opacity-20">⚙️</div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6 animate-bounce">🔋</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
              {content.title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">
              {content.subtitle[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-300" />
              </div>
              <input
                type="text"
                placeholder={content.searchPlaceholder[language]}
                className="block w-full pl-12 pr-4 py-4 border-2 border-white/20 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-lg text-white placeholder-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

       {/* Category Filters */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-3 min-w-max justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:border-yellow-400 hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name[language]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const cartItem = getCartItem(product.id);
              const isInCart = !!cartItem;
              const isAdded = addedToCart[product.id];

              return (
                <motion.div 
                  key={product.id} 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:scale-105 h-full flex flex-col border-2 border-white/20 hover:border-yellow-400/50">
                    {/* Product Image */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-100/20 to-gray-100/20 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name[language]} 
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.featured && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                            ⭐ {language === 'en' ? 'Featured' : 'Maalum'}
                          </div>
                        )}
                        {isInCart && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                          >
                            <ShoppingCart className="w-3 h-3" />
                            <span>{cartItem.quantity}</span>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                          favorites.includes(product.id)
                            ? 'bg-yellow-500 text-white'
                            : 'bg-white/20 backdrop-blur-sm text-gray-200 hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                      </button>

                      {/* Floating elements */}
                      <div className="absolute bottom-2 right-2 text-2xl opacity-30 animate-pulse">⚡</div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-400/30">
                            {categories.find(c => c.id === product.category)?.name[language]}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-300">{product.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-black text-white mb-3">
                          {product.name[language]}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {product.description[language]}
                        </p>
                        
                        {/* Specifications */}
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm flex items-center gap-1">
                            <Battery className="w-4 h-4 text-yellow-400" />
                            {content.specifications[language]}
                          </h4>
                          <ul className="space-y-1">
                            {product.specifications.slice(0, 2).map((spec, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                <span className="font-medium text-gray-200">{spec.name[language]}: </span>
                                <span className="text-gray-300 ml-1">{spec.value[language]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Price and Actions */}
                      <div className="mt-auto">
                        <div className="text-2xl font-black text-yellow-400 mb-4 flex items-center gap-2">
                          {product.price[language]}
                          <span className="text-lg animate-bounce">💰</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => handleAddToCart(product.id)}
                            disabled={isAdded}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex-1 font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                              isAdded
                                ? 'bg-green-500 text-white cursor-not-allowed'
                                : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white'
                            }`}
                          >
                            <AnimatePresence mode="wait">
                              {isAdded ? (
                                <motion.div
                                  key="added"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0, rotate: 180 }}
                                  className="flex items-center gap-2"
                                >
                                  <Check className="w-4 h-4" />
                                  <span className="hidden sm:inline">{content.addedToCart[language]}</span>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="add"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <ShoppingCart className="w-4 h-4" />
                                  <span className="hidden sm:inline">{content.addToCart[language]}</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                          
                          <Link href={`/single-product/${product.id}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all backdrop-blur-sm border border-white/30"
                            >
                              <span className="hidden sm:inline">{content.viewDetails[language]}</span>
                              <span className="sm:hidden">👁️</span>
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black text-white mb-3">
              {content.noProducts[language]}
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              {language === 'en' 
                ? 'Try adjusting your search or filter criteria to find your ideal CHUI battery!' 
                : 'Jaribu kubadilisha utafutaji au vigezo vya kuchuja kupata betri yako bora ya CHUI!'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              {content.resetFilters[language]}
            </button>
          </div>
        )}
      </div>
      
      {/* Brand Footer */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-gray-800/20 text-white py-8 mt-16 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl mb-4 animate-bounce">🔋</div>
          <p className="text-xl font-semibold">
            {language === 'en' ? 'CHUI - The Power Leader Experience!' : 'CHUI - Uzoefu wa Kiongozi wa Nguvu!'}
          </p>
          <div className="flex justify-center items-center gap-4 mt-4 text-blue-200">
            <Award className="w-5 h-5" />
            <span className="text-sm">
              {language === 'en' ? 'German Technology • Made in Tanzania' : 'Teknolojia ya Kijerumani • Imetengenezwa Tanzania'}
            </span>
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}