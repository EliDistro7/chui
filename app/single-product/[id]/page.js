'use client'

import { useEffect, useState, use } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingCart, Truck, Shield, Star, Clock, Zap, Award, Phone, Battery } from 'lucide-react';

import { productsData } from '@/data/single.js';
import { useLanguage } from '@/context/LanguageContext';

const CHUIBatterySingleProductPage = ({ params }) => {
  const resolvedParams = use(params);
  const productId = resolvedParams?.id ? parseInt(resolvedParams.id) : 1;
  const {language} = useLanguage();
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

  // Floating elements similar to testimonials
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '💬', '⭐', '🎯'][i % 8],
  }));

  const parallaxOffset = scrollY * 0.3;
  const slowParallax = scrollY * 0.1;

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

      {/* Breadcrumb Navigation */}
      <div className="bg-white/10 backdrop-blur-sm py-4 border-b border-white/20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <button className="flex items-center text-yellow-400 hover:text-yellow-300 font-bold transition-colors group">
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-4 shadow-layer border-2 border-white/20">
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="w-full h-auto object-contain aspect-square group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating decorations */}
                    <div className="absolute top-4 right-4 text-3xl animate-bounce-fun opacity-70">⚡</div>
                    <div className="absolute bottom-4 left-4 text-2xl animate-wiggle opacity-70">🔋</div>
                  </div>
                  
                  {/* Floating graphics around image */}
                  <div className="absolute -top-4 -left-4 text-3xl animate-float opacity-50">⚡</div>
                  <div className="absolute -top-4 -right-4 text-3xl animate-bounce-fun opacity-50">🔌</div>
                  <div className="absolute -bottom-4 -left-4 text-2xl animate-wiggle opacity-50">💫</div>
                  <div className="absolute -bottom-4 -right-4 text-2xl animate-float opacity-50">⭐</div>
                </div>
                
                {/* Additional Battery Views */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-2">
                    <img src={product.image} alt="Side view" className="w-full h-full object-contain" />
                  </div>
                  <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-2">
                    <img src={product.image} alt="Top view" className="w-full h-full object-contain" />
                  </div>
                  <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-2">
                    <img src={product.image} alt="Label view" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info - Right Column (3/5) */}
            <div className="md:col-span-3">
              {/* Brand Tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full text-sm font-bold border border-yellow-400/30">
                  <span className="animate-bounce-fun">🔋</span>
                  CHUI Batteries
                </span>
              </div>
              
              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
                {product.name[language]}
                <span className="ml-3 text-2xl animate-wiggle">⚡</span>
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-blue-100 font-medium">({product.rating}/5.0)</span>
              </div>
              
              {/* Price */}
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                {product.price[language]}
                <span className="text-lg animate-bounce-fun">💰</span>
              </div>
              
              {/* Short Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 shadow-soft relative overflow-hidden">
                <div className="absolute top-2 right-2 text-2xl animate-float opacity-20">🔋</div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {product.description[language]}
                </p>
              </div>

              {/* Key Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Availability */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-green-400/30 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-bounce-fun opacity-20 group-hover:opacity-40 transition-opacity">✅</div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    {productPageContent.availability[language]}
                  </h4>
                  <p className="text-green-300 font-medium">
                    {productPageContent.available[language]}
                  </p>
                </div>
                
                {/* Delivery */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-blue-400/30 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-wiggle opacity-20 group-hover:opacity-40 transition-opacity">🚚</div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-400" />
                    {productPageContent.shipping[language]}
                  </h4>
                  <p className="text-blue-300 font-medium">
                    {productPageContent.shippingInfo[language]}
                  </p>
                </div>
                
                {/* Warranty */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-purple-400/30 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-float opacity-20 group-hover:opacity-40 transition-opacity">🛡️</div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    {productPageContent.warranty[language]}
                  </h4>
                  <p className="text-purple-300 font-medium">
                    {productPageContent.warrantyInfo[language]}
                  </p>
                </div>
                
                {/* Technology */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-indigo-400/30 shadow-soft relative overflow-hidden group hover:shadow-layer transition-all">
                  <div className="absolute top-2 right-2 text-2xl animate-bounce-fun opacity-20 group-hover:opacity-40 transition-opacity">⚙️</div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-400" />
                    {productPageContent.technology[language]}
                  </h4>
                  <p className="text-indigo-300 font-medium">
                    {productPageContent.technologyInfo[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow">
                  <ShoppingCart className="w-6 h-6" />
                  {productPageContent.addToCart[language]}
                  <span className="animate-bounce-fun">🛒</span>
                </button>
                
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-layer hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3">
                  <Zap className="w-6 h-6" />
                  {productPageContent.buyNow[language]}
                  <span className="animate-wiggle">⚡</span>
                </button>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all shadow-soft flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {productPageContent.contactUs[language]}
                <span className="animate-bounce-fun">📞</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      <section className="py-8 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Product Specifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-layer border border-white/20 overflow-hidden">
              <button
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                  <span className="animate-bounce-fun">📋</span>
                  {productPageContent.specifications[language]}
                </h3>
                {isSpecsOpen ? <ChevronUp className="w-6 h-6 text-yellow-400" /> : <ChevronDown className="w-6 h-6 text-yellow-400" />}
              </button>
              
              {isSpecsOpen && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-4 rounded-xl border border-yellow-400/20">
                        <dt className="font-bold text-white mb-1">{spec.name[language]}</dt>
                        <dd className="text-yellow-300 font-medium">{spec.value[language]}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-layer border border-white/20 overflow-hidden">
              <button
                onClick={() => setIsDescOpen(!isDescOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                  <span className="animate-wiggle">📖</span>
                  {productPageContent.description[language]}
                </h3>
                {isDescOpen ? <ChevronUp className="w-6 h-6 text-yellow-400" /> : <ChevronDown className="w-6 h-6 text-yellow-400" />}
              </button>
              
              {isDescOpen && (
                <div className="px-6 pb-6">
                  <p className="text-blue-100 leading-relaxed text-lg mb-6">
                    {product.description[language]}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="animate-float">⭐</span>
                      {productPageContent.features[language]}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-blue-100">German technology with maintenance-free design</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-blue-100">Superior starting power and reliability</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-blue-100">Built for Tanzania's challenging climate conditions</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-blue-100">Long-lasting performance and durability</span>
                      </div>
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
          <h2 className="text-3xl font-black text-center mb-8 text-white bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <span className="animate-bounce-fun">🔋</span>
            {productPageContent.relatedProducts[language]}
            <span className="animate-wiggle">⚡</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-layer border border-white/20 overflow-hidden group hover:shadow-2xl transition-all transform hover:scale-105 hover:border-yellow-400/50">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name[language]} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 text-2xl animate-float opacity-70">⚡</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 line-clamp-2">{relatedProduct.name[language]}</h3>
                  <p className="text-yellow-400 font-black text-lg">{relatedProduct.price[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHUI brand tagline - like testimonials */}
      <div className="pb-8 text-center relative z-10">
        <p className="text-2xl font-heading font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {language === 'en' ? 'The Power Leader Experience' : 'Uzoefu wa Kiongozi wa Nguvu'}
        </p>
      </div>
    </div>
  );
};

export default CHUIBatterySingleProductPage;