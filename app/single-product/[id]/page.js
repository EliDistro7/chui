'use client'

import { useEffect, useState, use } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingCart, Truck, Shield, Star, Clock, Zap, Award, Phone, Battery } from 'lucide-react';
import Link from 'next/link';

import { productsData } from '@/data/single.js';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { AddToCartButton } from '@/app/components/AddToCartButton';

const CHUIBatterySingleProductPage = ({ params }) => {
  const resolvedParams = use(params);
  const productId = resolvedParams?.id ? parseInt(resolvedParams.id) : 1;
  const {language} = useLanguage();
  const { getCartItem } = useCart();
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const cartItem = getCartItem(productId);
  const isInCart = cartItem && cartItem.quantity > 0;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const product = productsData.find(p => p.id === productId) || productsData[0];
  
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
      en: "Back to Batteries",
      sw: "Rudi kwenye Betri"
    },
    specifications: {
      en: "Technical Specifications",
      sw: "Vipimo vya Kiufundi"
    },
    description: {
      en: "About This Battery",
      sw: "Kuhusu Betri Hii"
    },
    features: {
      en: "Key Features",
      sw: "Vipengele Muhimu"
    },
    availability: {
      en: "Availability",
      sw: "Upatikanaji"
    },
    available: {
      en: "In Stock & Ready!",
      sw: "Ipo Hifadhini na Tayari!"
    },
    shipping: {
      en: "Delivery",
      sw: "Usafirishaji"
    },
    shippingInfo: {
      en: "Fast delivery nationwide",
      sw: "Utoaji wa haraka kote nchini"
    },
    warranty: {
      en: "Warranty",
      sw: "Dhamana"
    },
    warrantyInfo: {
      en: "Comprehensive warranty coverage",
      sw: "Ulinzi wa dhamana kamili"
    },
    technology: {
      en: "Technology",
      sw: "Teknolojia"
    },
    technologyInfo: {
      en: "German engineering standards",
      sw: "Viwango vya uhandisi wa Kijerumani"
    },
    relatedProducts: {
      en: "Other CHUI Batteries",
      sw: "Betri Nyingine za CHUI"
    },
    addToCart: {
      en: "Add to Cart",
      sw: "Ongeza kwenye Kikasha"
    },
    buyNow: {
      en: "Order Now",
      sw: "Agiza Sasa"
    },
    contactUs: {
      en: "Contact Dealer",
      sw: "Wasiliana na Mdallali"
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '💬', '⭐', '🎯'][i % 8],
  }));

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen relative overflow-hidden">
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
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.5); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-bounce-fun { animation: bounce-fun 2s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .shadow-soft { box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); }
        .shadow-layer { box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingElements.map((element, i) => (
          <div
            key={element.id}
            className="absolute text-xl md:text-2xl opacity-10 animate-pulse"
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

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white/10 backdrop-blur-sm py-3 md:py-4 border-b border-white/20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <button className="flex items-center text-yellow-400 hover:text-yellow-300 font-bold transition-colors group text-sm md:text-base">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            {productPageContent.backToProducts[language]}
          </button>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-6 md:py-12 lg:py-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
            {/* Product Images - Left Column */}
            <div className="lg:sticky lg:top-24 self-start">
              {/* Main Image */}
              <div className="relative group mb-4 md:mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden shadow-layer border-2 border-white/20">
                  <img 
                    src={product.image} 
                    alt={product.name[language]} 
                    className="w-full h-auto object-contain aspect-square p-4 md:p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {[1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl border-2 p-2 md:p-3 transition-all ${
                      selectedImage === idx 
                        ? 'border-yellow-400 shadow-lg' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img src={product.image} alt={`View ${idx}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info - Right Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Brand Tag */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full text-xs md:text-sm font-bold border border-yellow-400/30">
                  <Battery className="w-3 h-3 md:w-4 md:h-4" />
                  CHUI Batteries
                </span>
              </div>
              
              {/* Product Name */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                {product.name[language]}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-blue-100 font-medium">({product.rating}/5.0)</span>
              </div>
              
              {/* Price */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {product.price[language]}
              </div>
              
              {/* Short Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-soft">
                <p className="text-blue-100 leading-relaxed text-sm md:text-base lg:text-lg">
                  {product.description[language]}
                </p>
              </div>

              {/* Key Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {/* Availability */}
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-green-400/30 shadow-soft hover:shadow-layer transition-all">
                  <h4 className="font-bold text-white mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    {productPageContent.availability[language]}
                  </h4>
                  <p className="text-green-300 font-medium text-xs md:text-sm">
                    {productPageContent.available[language]}
                  </p>
                </div>
                
                {/* Delivery */}
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-400/30 shadow-soft hover:shadow-layer transition-all">
                  <h4 className="font-bold text-white mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                    {productPageContent.shipping[language]}
                  </h4>
                  <p className="text-blue-300 font-medium text-xs md:text-sm">
                    {productPageContent.shippingInfo[language]}
                  </p>
                </div>
                
                {/* Warranty */}
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-purple-400/30 shadow-soft hover:shadow-layer transition-all">
                  <h4 className="font-bold text-white mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    {productPageContent.warranty[language]}
                  </h4>
                  <p className="text-purple-300 font-medium text-xs md:text-sm">
                    {productPageContent.warrantyInfo[language]}
                  </p>
                </div>
                
                {/* Technology */}
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-indigo-400/30 shadow-soft hover:shadow-layer transition-all">
                  <h4 className="font-bold text-white mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                    {productPageContent.technology[language]}
                  </h4>
                  <p className="text-indigo-300 font-medium text-xs md:text-sm">
                    {productPageContent.technologyInfo[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                <AddToCartButton 
                  productId={product.id}
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base lg:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 animate-pulse-glow"
                />
                
                <Link
                  href="/cart"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base lg:text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
                >
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="whitespace-nowrap">
                    {cartItem && cartItem.quantity > 0 
                      ? `${language === 'en' ? 'View Cart' : 'Tazama Cart'} (${cartItem.quantity})`
                      : productPageContent.buyNow[language]
                    }
                  </span>
                </Link>
              </div>

              {/* Contact Button */}
            
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      <section className="py-6 md:py-8 lg:py-12 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-4 md:space-y-6">
            
            {/* Product Specifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-layer border border-white/20 overflow-hidden">
              <button
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white flex items-center gap-2 md:gap-3">
                  <Battery className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  {productPageContent.specifications[language]}
                </h3>
                {isSpecsOpen ? 
                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" /> : 
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                }
              </button>
              
              {isSpecsOpen && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-3 md:p-4 rounded-lg md:rounded-xl border border-yellow-400/20">
                        <dt className="font-bold text-white mb-1 text-sm md:text-base">{spec.name[language]}</dt>
                        <dd className="text-yellow-300 font-medium text-xs md:text-sm">{spec.value[language]}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-layer border border-white/20 overflow-hidden">
              <button
                onClick={() => setIsDescOpen(!isDescOpen)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white flex items-center gap-2 md:gap-3">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  {productPageContent.description[language]}
                </h3>
                {isDescOpen ? 
                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" /> : 
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                }
              </button>
              
              {isDescOpen && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-blue-100 leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                    {product.description[language]}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      {productPageContent.features[language]}
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        "German technology with maintenance-free design",
                        "Superior starting power and reliability",
                        "Built for Tanzania's challenging climate conditions",
                        "Long-lasting performance and durability"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                          <span className="text-green-400 mt-0.5 flex-shrink-0 text-sm md:text-base">✓</span>
                          <span className="text-blue-100 text-xs md:text-sm lg:text-base">{feature}</span>
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
      <section className="py-8 md:py-12 lg:py-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-6 md:mb-8 lg:mb-10 text-white flex items-center justify-center gap-2 md:gap-3">
            <Battery className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            {productPageContent.relatedProducts[language]}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-layer border border-white/20 overflow-hidden group hover:shadow-2xl transition-all transform hover:scale-105 hover:border-yellow-400/50">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name[language]} 
                    className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-white mb-1 md:mb-2 line-clamp-2 text-sm md:text-base">
                    {relatedProduct.name[language]}
                  </h3>
                  <p className="text-yellow-400 font-black text-base md:text-lg">
                    {relatedProduct.price[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Tagline */}
      <div className="pb-6 md:pb-8 lg:pb-10 text-center relative z-10 px-4">
        <p className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {language === 'en' ? 'The Power Leader Experience' : 'Uzoefu wa Kiongozi wa Nguvu'}
        </p>
      </div>
    </div>
  );
};

export default CHUIBatterySingleProductPage;