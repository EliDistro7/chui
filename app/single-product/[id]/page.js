'use client'

import { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingCart, Truck, Shield, Star, Clock, Heart, Gift } from 'lucide-react';

const TamTamSingleProductPage = () => {
  const [language, setLanguage] = useState('en');
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock product data for TAM TAM snacks
  const product = {
    id: 1,
    name: {
      en: "TAM TAM Crunchy Peanut Mix",
      sw: "TAM TAM Mchanganyiko wa Karanga wa Mchuzi"
    },
    price: {
      en: "TSh 2,500",
      sw: "TSh 2,500"
    },
    category: "snacks",
    image: "/api/placeholder/400/400",
    description: {
      en: "Delicious crunchy peanut mix with the perfect blend of spices. Made with premium roasted peanuts, corn, and special TAM TAM seasoning. Perfect for sharing with family and friends. Rich in protein and energy. Great for parties, movie nights, or anytime snacking.",
      sw: "Mchanganyiko wa karanga wenye ladha ya kupendeza na mchanganyiko kamili wa viungo. Imetengenezwa kwa karanga bora zilizokangwa, mahindi, na chumvi maalum ya TAM TAM. Kamili kwa kushirikiana na familia na marafiki. Tajiri kwa protini na nishati. Bora kwa sherehe, usiku wa sinema, au chakula cha wakati wowote."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "150g", sw: "150g" }
      },
      {
        name: { en: "Ingredients", sw: "Viungo" },
        value: { en: "Peanuts, Corn, Salt, Spices", sw: "Karanga, Mahindi, Chumvi, Viungo" }
      },
      {
        name: { en: "Shelf Life", sw: "Muda wa Uhifadhi" },
        value: { en: "6 months", sw: "Miezi 6" }
      },
      {
        name: { en: "Storage", sw: "Uhifadhi" },
        value: { en: "Store in cool, dry place", sw: "Hifadhi mahali baridi na pakavu" }
      }
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: { en: "TAM TAM Spicy Chips", sw: "TAM TAM Chipsi za Mchuzi" },
      price: { en: "TSh 1,800", sw: "TSh 1,800" },
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: { en: "TAM TAM Sweet Popcorn", sw: "TAM TAM Popcorn Tamu" },
      price: { en: "TSh 2,200", sw: "TSh 2,200" },
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: { en: "TAM TAM Mixed Nuts", sw: "TAM TAM Uyoga Mchanganyiko" },
      price: { en: "TSh 3,500", sw: "TSh 3,500" },
      image: "/api/placeholder/300/300"
    }
  ];

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

  const features = [
    "Premium roasted peanuts for maximum crunch",
    "Perfect blend of spices for amazing taste",
    "Great source of protein and energy",
    "Perfect for sharing with friends and family"
  ];

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
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
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
                      src={product.image} 
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
                  <button 
                    className={`border-3 rounded-xl overflow-hidden w-16 h-16 flex-shrink-0 transition-all ${selectedImage === 0 ? 'border-orange-500 shadow-pulse-glow' : 'border-orange-200 hover:border-orange-400'}`}
                    onClick={() => setSelectedImage(0)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="w-full h-full object-cover"
                    />
                  </button>
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
                  <p className="text-blue-600 font-medium text-sm">
                    {productPageContent.shippingInfo[language]}
                  </p>
                </div>
                
                {/* Freshness */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-purple-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-float opacity-20 group-hover:opacity-40 transition-opacity">🌿</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    {productPageContent.freshness[language]}
                  </h4>
                  <p className="text-purple-600 font-medium text-sm">
                    {productPageContent.freshnessInfo[language]}
                  </p>
                </div>
                
                {/* Satisfaction */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-yellow-200 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-bounce-fun opacity-20 group-hover:opacity-40 transition-opacity">🏆</div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-600" />
                    {productPageContent.satisfaction[language]}
                  </h4>
                  <p className="text-yellow-600 font-medium text-sm">
                    {productPageContent.satisfactionInfo[language]}
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <button
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-layer relative overflow-hidden group"
                >
                  <span className="text-2xl animate-bounce-fun">🛒</span>
                  {productPageContent.addToCart[language]}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-1 left-1/4 text-xs animate-ping">✨</div>
                    <div className="absolute bottom-1 right-1/4 text-xs animate-pulse">⭐</div>
                  </div>
                </button>
                <button
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 border-3 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-2xl font-black text-lg transition-all transform hover:scale-105"
                >
                  <span className="text-xl animate-wiggle">💬</span>
                  {productPageContent.contactUs[language]}
                </button>
              </div>
              
              {/* Collapsible Sections */}
              <div className="space-y-6">
                {/* Specifications */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-soft overflow-hidden">
                  <button 
                    className="flex items-center justify-between w-full text-left font-black text-lg text-gray-900 p-6 hover:bg-orange-50 transition-colors"
                    onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="animate-bounce-fun">📋</span>
                      {productPageContent.specifications[language]}
                    </span>
                    {isSpecsOpen ? 
                      <ChevronUp className="w-6 h-6 text-orange-500" /> : 
                      <ChevronDown className="w-6 h-6 text-orange-500" />
                    }
                  </button>
                  
                  {isSpecsOpen && (
                    <div className="px-6 pb-6">
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl">
                        <div className="grid grid-cols-1 gap-4">
                          {product.specifications.map((spec, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-orange-200 pb-3 last:border-b-0">
                              <h4 className="font-bold text-gray-900">
                                {spec.name[language]}
                              </h4>
                              <p className="text-gray-700 font-medium">
                                {spec.value[language]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Description & Features */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-soft overflow-hidden">
                  <button 
                    className="flex items-center justify-between w-full text-left font-black text-lg text-gray-900 p-6 hover:bg-orange-50 transition-colors"
                    onClick={() => setIsDescOpen(!isDescOpen)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="animate-wiggle">📝</span>
                      {productPageContent.description[language]}
                    </span>
                    {isDescOpen ? 
                      <ChevronUp className="w-6 h-6 text-orange-500" /> : 
                      <ChevronDown className="w-6 h-6 text-orange-500" />
                    }
                  </button>
                  
                  {isDescOpen && (
                    <div className="px-6 pb-6 space-y-6">
                      {/* Full Description */}
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                          {product.description[language]}
                        </p>
                      </div>
                      
                      {/* Key Features */}
                      <div>
                        <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                          <span className="animate-bounce-fun">💖</span>
                          {productPageContent.features[language]}
                        </h4>
                        <ul className="space-y-3">
                          {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                              <span className="inline-block w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-1 group-hover:scale-125 transition-transform"></span>
                              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-yellow-50/50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <span className="animate-bounce-fun">🎭</span>
              {productPageContent.relatedProducts[language]}
              <span className="animate-wiggle">🎪</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <div key={relatedProduct.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-soft overflow-hidden border-2 border-orange-100 hover:shadow-layer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <div className="h-48 bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 text-2xl animate-bounce-fun opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
                  <div className="absolute bottom-3 left-3 text-xl animate-wiggle opacity-0 group-hover:opacity-100 transition-opacity">🌟</div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-2 right-2 text-lg opacity-20 group-hover:opacity-40 transition-opacity animate-float">🎉</div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {relatedProduct.name[language]}
                  </h3>
                  <div className="text-lg font-black text-orange-600 mb-4">
                    {relatedProduct.price[language]}
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-xl font-bold transition-all group-hover:scale-105">
                    <span className="animate-bounce-fun">👀</span>
                    View Details
                  </button>
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