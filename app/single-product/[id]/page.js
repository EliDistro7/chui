'use client'

import { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingCart, Truck, Shield, Star, Clock, Heart, Gift } from 'lucide-react';

import { productsData } from '@/data/single.js';

const TamTamSingleProductPage = ({ params }) => {
  const productId = params?.id ? parseInt(params.id) : 1;
  const [language, setLanguage] = useState('en');
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get the current product
  const product = productsData.find(p => p.id === productId) || productsData[0];
  
  // Get related products (excluding current product)
  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image
    }));

  const productPageContent = {
    backToProducts: {
      en: "Back to Snacks",
      sw: "Rudi kwenye Vitafunio"
    },
    specifications: {
      en: "Product Details",
      sw: "Maelezo ya Bidhaa"
    },
    description: {
      en: "About This Snack",
      sw: "Kuhusu Kitafunio Hiki"
    },
    features: {
      en: "Why You'll Love It",
      sw: "Kwa Nini Utakipenda"
    },
    availability: {
      en: "Availability",
      sw: "Upatikanaji"
    },
    available: {
      en: "Fresh & Ready!",
      sw: "Mbichi na Tayari!"
    },
    shipping: {
      en: "Delivery",
      sw: "Usafirishaji"
    },
    shippingInfo: {
      en: "Same-day delivery in Dar es Salaam",
      sw: "Utoaji wa siku moja Dar es Salaam"
    },
    freshness: {
      en: "Freshness",
      sw: "Ubunifu"
    },
    freshnessInfo: {
      en: "Made fresh daily",
      sw: "Imetengenezwa kila siku"
    },
    satisfaction: {
      en: "Guarantee",
      sw: "Hakiki"
    },
    satisfactionInfo: {
      en: "100% satisfaction or money back",
      sw: "Kuridhika 100% au pesa kurudi"
    },
    relatedProducts: {
      en: "You Might Also Love",
      sw: "Unaweza Pia Kupenda"
    },
    addToCart: {
      en: "Add to Cart",
      sw: "Ongeza kwenye Kikasha"
    },
    buyNow: {
      en: "Buy Now",
      sw: "Nunua Sasa"
    },
    contactUs: {
      en: "Ask About This Snack",
      sw: "Uliza Kuhusu Kitafunio Hiki"
    }
  };

  const parallaxOffset = scrollY * 0.3;
  const slowParallax = scrollY * 0.1;

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen relative overflow-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes bounce-fun {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); }
          50% { box-shadow: 0 0 30px rgba(251, 146, 60, 0.5); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-bounce-fun { animation: bounce-fun 2s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .shadow-soft { box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
        .shadow-layer { box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-20 left-16 text-4xl animate-float opacity-10"
          style={{ transform: `translateY(${slowParallax}px)` }}
        >
          🥜
        </div>
        <div 
          className="absolute top-32 right-20 text-3xl animate-wiggle opacity-10"
          style={{ transform: `translateY(${-parallaxOffset}px)` }}
        >
          🍿
        </div>
        <div 
          className="absolute bottom-40 left-20 text-5xl animate-bounce-fun opacity-10"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          🥨
        </div>
        <div 
          className="absolute bottom-60 right-16 text-4xl animate-float opacity-10"
          style={{ transform: `translateY(${-slowParallax}px)` }}
        >
          🍪
        </div>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold border-2 border-orange-200 hover:bg-orange-100 transition-all shadow-soft"
        >
          {language === 'en' ? 'SW' : 'EN'}
        </button>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-sm py-4 border-b border-orange-100 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <button className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            {productPageContent.backToProducts[language]}
            <span className="ml-2 animate-bounce-fun">🏠</span>
          </button>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {/* Product Images - Left Column (2/5) */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-8">
                {/* Main Image */}
                <div className="relative group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden mb-4 shadow-layer border-2 border-orange-200">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.name[language]} 
                      className="w-full h-auto object-contain aspect-square group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating decorations */}
                    <div className="absolute top-4 right-4 text-3xl animate-bounce-fun opacity-70">✨</div>
                    <div className="absolute bottom-4 left-4 text-2xl animate-wiggle opacity-70">🌟</div>
                  </div>
                  
                  {/* Floating graphics around image */}
                  <div className="absolute -top-4 -left-4 text-3xl animate-float opacity-50">🎉</div>
                  <div className="absolute -top-4 -right-4 text-3xl animate-bounce-fun opacity-50">🎊</div>
                  <div className="absolute -bottom-4 -left-4 text-2xl animate-wiggle opacity-50">💫</div>
                  <div className="absolute -bottom-4 -right-4 text-2xl animate-float opacity-50">⭐</div>
                </div>
                
                {/* Image Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      className={`border-3 rounded-xl overflow-hidden w-16 h-16 flex-shrink-0 transition-all ${selectedImage === index ? 'border-orange-500 shadow-pulse-glow' : 'border-orange-200 hover:border-orange-400'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name[language]} ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info - Right Column (3/5) */}
            <div className="md:col-span-3">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 rounded-full text-sm font-bold border border-orange-200">
                  <span className="animate-bounce-fun">🍿</span>
                  TAM TAM Snacks
                </span>
              </div>
              
              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent">
                {product.name[language]}
                <span className="ml-3 text-2xl animate-wiggle">🥜</span>
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">({product.rating}/5.0)</span>
              </div>
              
              {/* Price */}
              <div className="text-2xl sm:text-3xl font-black text-orange-600 mb-6 flex items-center gap-2">
                {product.price[language]}
                <span className="text-lg animate-bounce-fun">💰</span>
              </div>
              
              {/* Short Description with fun styling */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-100 shadow-soft relative overflow-hidden">
                <div className="absolute top-2 right-2 text-2xl animate-float opacity-20">🎪</div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description[language].split('.')[0] + '.'}
                </p>
              </div>

              {/* Key Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Availability */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-green-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-bounce-fun opacity-20 group-hover:opacity-40 transition-opacity">✅</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    {productPageContent.availability[language]}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {productPageContent.available[language]}
                  </p>
                </div>
                
                {/* Delivery */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-blue-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-wiggle opacity-20 group-hover:opacity-40 transition-opacity">🚚</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    {productPageContent.shipping[language]}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {productPageContent.shippingInfo[language]}
                  </p>
                </div>
                
                {/* Freshness */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-purple-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-float opacity-20 group-hover:opacity-40 transition-opacity">🌟</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    {productPageContent.freshness[language]}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {productPageContent.freshnessInfo[language]}
                  </p>
                </div>
                
                {/* Guarantee */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-indigo-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-bounce-fun opacity-20 group-hover:opacity-40 transition-opacity">🛡️</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-600" />
                    {productPageContent.satisfaction[language]}
                  </h4>
                  <p className="text-indigo-600 font-medium">
                    {productPageContent.satisfactionInfo[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow">
                  <ShoppingCart className="w-6 h-6" />
                  {productPageContent.addToCart[language]}
                  <span className="animate-bounce-fun">🛒</span>
                </button>
                
                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-yellow-500 hover:to-orange-500 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3">
                  <Gift className="w-6 h-6" />
                  {productPageContent.buyNow[language]}
                  <span className="animate-wiggle">⚡</span>
                </button>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-white/90 backdrop-blur-sm border-2 border-orange-300 text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-soft flex items-center justify-center gap-2">
                {productPageContent.contactUs[language]}
                <span className="animate-bounce-fun">💬</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      <section className="py-8 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Product Specifications */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-layer border border-orange-100 overflow-hidden">
              <button
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-orange-50 transition-colors"
              >
                <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                  <span className="animate-bounce-fun">📋</span>
                  {productPageContent.specifications[language]}
                </h3>
                {isSpecsOpen ? <ChevronUp className="w-6 h-6 text-orange-600" /> : <ChevronDown className="w-6 h-6 text-orange-600" />}
              </button>
              
              {isSpecsOpen && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-100">
                        <dt className="font-bold text-gray-900 mb-1">{spec.name[language]}</dt>
                        <dd className="text-orange-600 font-medium">{spec.value[language]}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-layer border border-orange-100 overflow-hidden">
              <button
                onClick={() => setIsDescOpen(!isDescOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-orange-50 transition-colors"
              >
                <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                  <span className="animate-wiggle">📖</span>
                  {productPageContent.description[language]}
                </h3>
                {isDescOpen ? <ChevronUp className="w-6 h-6 text-orange-600" /> : <ChevronDown className="w-6 h-6 text-orange-600" />}
              </button>
              
              {isDescOpen && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {product.description[language]}
                  </p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="animate-float">⭐</span>
                      {productPageContent.features[language]}
                    </h4>
                    <div className="space-y-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{feature[language]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-8 text-gray-900 flex items-center justify-center gap-3">
            <span className="animate-bounce-fun">💝</span>
            {productPageContent.relatedProducts[language]}
            <span className="animate-wiggle">🎁</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-layer border border-orange-100 overflow-hidden group hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 text-2xl animate-float opacity-70">✨</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name[language]}</h3>
                  <p className="text-orange-600 font-black text-lg">{relatedProduct.price[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamTamSingleProductPage;