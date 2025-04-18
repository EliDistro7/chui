'use client'

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ArrowLeft, ChevronDown, ChevronUp, ShoppingCart, Truck, Shield, Star, Clock } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { productsData } from '@/data/index';



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

const productPageContent = {
  backToProducts: {
    en: "Back to Products",
    sw: "Rudi kwenye Bidhaa"
  },
  specifications: {
    en: "Specifications",
    sw: "Vipimo"
  },
  overview: {
    en: "Overview",
    sw: "Maelezo ya Jumla"
  },
  description: {
    en: "Description",
    sw: "Maelezo"
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
    en: "In Stock",
    sw: "Inapatikana"
  },
  unavailable: {
    en: "Out of Stock",
    sw: "Haipatikani"
  },
  shipping: {
    en: "Shipping",
    sw: "Usafirishaji"
  },
  shippingInfo: {
    en: "Free delivery within Dar es Salaam. Nationwide shipping available.",
    sw: "Usafirishaji wa bure ndani ya Dar es Salaam. Usafirishaji wa kitaifa unapatikana."
  },
  warranty: {
    en: "Warranty",
    sw: "Dhamana"
  },
  warrantyInfo: {
    en: "1-year manufacturer warranty",
    sw: "Dhamana ya mtengenezaji ya mwaka 1"
  },
  financing: {
    en: "Financing",
    sw: "Ufadhili"
  },
  financingInfo: {
    en: "Flexible payment plans available",
    sw: "Mipango rahisi ya malipo inapatikana"
  },
  relatedProducts: {
    en: "Related Products",
    sw: "Bidhaa Zinazohusiana"
  },
  viewDetails: {
    en: "View Details",
    sw: "Angalia Maelezo"
  },
  contactUs: {
    en: "Contact Us About This Product",
    sw: "Wasiliana Nasi Kuhusu Bidhaa Hii"
  },
  requestQuote: {
    en: "Request Quote",
    sw: "Omba Bei"
  }
};

export default function SingleProductPage() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const [product, setProduct] = useState(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (pathname) {
      const productId = pathname.split('/').pop();
      console.log('product Id', productId)
      console.log('products', productsData)
      const foundProduct = productsData.find(p => p.id === Number(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Assuming each product might have multiple images
        // Using the main image as default, and potentially others if they exist
        const productImages = [
          foundProduct.image,
          // Add more images if they exist in your data structure
          // E.g., ...(foundProduct.additionalImages || [])
        ];
        
        setSelectedImage(0); // Reset to first image when product changes
      }
    }
  }, [pathname]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Find the category name for this product
  const categoryObj = {
    tractors: { en: "Tractors & Machinery", sw: "Trekta na Mashine" },
    harvesters: { en: "Harvesting Equipment", sw: "Vifaa vya Kuvuna" },
    tillers: { en: "Tillers", sw: "Tillers" },
    seeders: { en: "Seeders", sw: "Vifaa vya Kupanda" },
    fertilizers: { en: "Fertilizers & Inputs", sw: "Mbolea na Pembejeo" },
    irrigation: { en: "Irrigation Systems", sw: "Mifumo ya Umwagiliaji" },
    storage: { en: "Storage Solutions", sw: "Vifaa vya Uhifadhi" }
  };
  
  const categoryName = categoryObj[product.category]?.[language] || product.category;

  // Parse specifications from product data
  const parseSpecifications = () => {
    if (product.specifications) return product.specifications;
    
    // If there are no structured specifications, extract them from description
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
    
    // Add some default specs if we couldn't extract enough
    if (specs.length < 3) {
      if (specs.length < 1) {
        specs.push({
          name: { en: "Model", sw: "Modeli" },
          value: { 
            en: product.name[language],
            sw: product.name[language]
          }
        });
      }
      
      if (specs.length < 2) {
        specs.push({
          name: { en: "Category", sw: "Kategoria" },
          value: { 
            en: categoryName,
            sw: categoryName
          }
        });
      }
      
      if (specs.length < 3) {
        specs.push({
          name: { en: "Warranty", sw: "Dhamana" },
          value: { 
            en: "1 Year",
            sw: "Mwaka 1"
          }
        });
      }
    }
    
    return specs;
  };
  
  // Get related products (same category, exclude current product)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Extract features from description
  const extractFeatures = () => {
    const description = product.description[language];
    // Split by sentences and take first few as features
    const sentences = description.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    return sentences.slice(0, Math.min(4, sentences.length)).map(sentence => sentence.trim());
  };

  const specifications = parseSpecifications();
  const features = extractFeatures();

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} bg-white min-h-screen`}>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-6">
          <Link href="/products" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {productPageContent.backToProducts[language]}
          </Link>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Product Images - Left Column (2/5) */}
            <div className="md:col-span-2">
              <Fade direction="left" triggerOnce>
                <div className="sticky top-8">
                  {/* Main Image */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="w-full h-auto object-contain aspect-square"
                    />
                  </div>
                  
                  {/* Image Thumbnails (if there were multiple images) */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    <button 
                      className={`border-2 rounded-md overflow-hidden w-16 h-16 flex-shrink-0 ${selectedImage === 0 ? 'border-primary-600' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(0)}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name[language]} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                    {/* Add more thumbnails here if you have additional images */}
                  </div>
                </div>
              </Fade>
            </div>

            {/* Product Info - Right Column (3/5) */}
            <div className="md:col-span-3">
              <Fade direction="right" triggerOnce>
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {categoryName}
                  </span>
                </div>
                
                {/* Product Name */}
                <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display`}>
                  {product.name[language]}
                </h1>
                
                {/* Price */}
                <div className={`text-2xl font-bold text-primary-600 mb-6 font-sans`}>
                  {product.price[language]}
                </div>
                
                {/* Short Description */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {product.description[language].split('.')[0] + '.'}
                </p>

                {/* Key Information Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {/* Availability */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {productPageContent.availability[language]}
                    </h4>
                    <p className="flex items-center text-green-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {productPageContent.available[language]}
                    </p>
                  </div>
                  
                  {/* Shipping */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {productPageContent.shipping[language]}
                    </h4>
                    <p className="flex items-center text-gray-600 text-sm">
                      <Truck className="w-4 h-4 mr-2 flex-shrink-0" />
                      {productPageContent.shippingInfo[language]}
                    </p>
                  </div>
                  
                  {/* Warranty */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {productPageContent.warranty[language]}
                    </h4>
                    <p className="flex items-center text-gray-600 text-sm">
                      <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                      {productPageContent.warrantyInfo[language]}
                    </p>
                  </div>
                  
                  {/* Financing */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {productPageContent.financing[language]}
                    </h4>
                    <p className="flex items-center text-gray-600 text-sm">
                      <Star className="w-4 h-4 mr-2 flex-shrink-0" />
                      {productPageContent.financingInfo[language]}
                    </p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Link
                    href={`/quote?product=${product.id}`}
                    className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors"
                  >
                    {productPageContent.requestQuote[language]}
                  </Link>
                  <Link
                    href={`/contact?product=${product.id}`}
                    className="w-full flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-bold transition-colors"
                  >
                    {productPageContent.contactUs[language]}
                  </Link>
                </div>
                
                {/* Collapsible Sections */}
                <div className="mt-12 border-t border-gray-200 pt-8 space-y-6">
                  {/* Specifications */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left font-bold text-lg text-gray-900 mb-4"
                      onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                    >
                      <span>{productPageContent.specifications[language]}</span>
                      {isSpecsOpen ? 
                        <ChevronUp className="w-5 h-5" /> : 
                        <ChevronDown className="w-5 h-5" />
                      }
                    </button>
                    
                    {isSpecsOpen && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                          {specifications.map((spec, idx) => (
                            <div key={idx} className="border-b border-gray-200 pb-3">
                              <h4 className="font-medium text-gray-900 mb-1">
                                {spec.name[language]}
                              </h4>
                              <p className="text-gray-600">
                                {spec.value[language]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Description & Features */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left font-bold text-lg text-gray-900 mb-4"
                      onClick={() => setIsDescOpen(!isDescOpen)}
                    >
                      <span>{productPageContent.description[language]}</span>
                      {isDescOpen ? 
                        <ChevronUp className="w-5 h-5" /> : 
                        <ChevronDown className="w-5 h-5" />
                      }
                    </button>
                    
                    {isDescOpen && (
                      <div className="space-y-6">
                        {/* Full Description */}
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            {product.description[language]}
                          </p>
                        </div>
                        
                        {/* Key Features */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">
                            {productPageContent.features[language]}
                          </h4>
                          <ul className="space-y-2">
                            {features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <Fade triggerOnce>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-display`}>
                {productPageContent.relatedProducts[language]}
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gray-100 overflow-hidden relative">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name[language]} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                        {relatedProduct.name[language]}
                      </h3>
                      <div className={`text-lg font-bold text-primary-600 mb-4 font-sans`}>
                        {relatedProduct.price[language]}
                      </div>
                      <Link 
                        href={`/products/${relatedProduct.id}`}
                        className="w-full flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                      >
                        {productPageContent.viewDetails[language]}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>
      )}
    </div>
  );
}