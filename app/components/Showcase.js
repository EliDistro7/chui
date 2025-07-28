
'use client';
import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

// Language Context Hook (assuming this exists in your app)


// TAM TAM Products Data
const tamtamProducts = [
  {
    id: 1,
    name: {
      en: "TAM TAM Cheese Balls",
      sw: "TAM TAM Cheese Balls"
    },
    category: "balls",
    image: "/cheese.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
    },
    description: {
      en: "Crispy, golden cheese balls packed with real cheese flavor. The perfect crunchy snack for any time of day.",
      sw: "Mipira ya jibini yenye ladha ya kweli ya jibini. Kifurushi cha kushangaza kwa wakati wowote wa siku."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "50g", sw: "50g" }
      },
      {
        name: { en: "Flavor", sw: "Ladha" },
        value: { en: "Real Cheese", sw: "Jibini Halisi" }
      },
      {
        name: { en: "Texture", sw: "Muundo" },
        value: { en: "Extra Crunchy", sw: "Extra Crunchy" }
      }
    ],
    featured: true,
    rating: 4.8
  },
  {
    id: 2,
    name: {
      en: "TAM TAM Choco Crunch",
      sw: "TAM TAM Chokoleti Kigumu"
    },
    category: "chocolate",
    image: "/crunch.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
    },
    description: {
      en: "Deliciously crunchy chocolate-flavored snacks that melt in your mouth with rich cocoa goodness.",
      sw: "Vitafunio vya chokoleti vyenye ladha nzuri vinavyoyeyuka mdomoni na utamu wa kakao."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "45g", sw: "45g" }
      },
      {
        name: { en: "Flavor", sw: "Ladha" },
        value: { en: "Rich Chocolate", sw: "Chokoleti Tajiri" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Cocoa Crunch", sw: "Kakao Kigumu" }
      }
    ],
    featured: false,
    rating: 4.7
  },
  {
    id: 3,
    name: {
      en: "TAM TAM Multigrain Crisps",
      sw: "TAM TAM Nafaka Mchanganyiko"
    },
    category: "healthy",
    image: "/crisps.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh  550"
    },
    description: {
      en: "Nutritious multigrain crisps made from a blend of wholesome grains. Healthy snacking at its finest.",
      sw: "Vipande vya nafaka mchanganyiko vyenye lishe kutoka mchanganyiko wa nafaka nzuri. Kula vizuri kwa afya."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "60g", sw: "60g" }
      },
      {
        name: { en: "Grains", sw: "Nafaka" },
        value: { en: "5 Mixed Grains", sw: "Nafaka 5 Mchanganyiko" }
      },
      {
        name: { en: "Benefit", sw: "Faida" },
        value: { en: "High Fiber", sw: "High Fiber" }
      }
    ],
    featured: true,
    rating: 4.6
  },
  {
    id: 4,
    name: {
      en: "TAM TAM Rings",
      sw: "TAM TAM Rings"
    },
    category: "rings",
    image: "/rings.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
    },
    description: {
      en: "Fun ring-shaped snacks with a satisfying crunch and bold flavor that kids and adults love.",
      sw: "Vitafunio vya umbo la pete vyenye kigumu cha kuridhisha na ladha kali inayopendwa na watoto na watu wazima."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "40g", sw: "40g" }
      },
      {
        name: { en: "Shape", sw: "Umbo" },
        value: { en: "Ring Shape", sw: "Umbo la Pete" }
      },
      {
        name: { en: "Flavor", sw: "Ladha" },
        value: { en: "Bold & Tangy", sw: "Tamu yenye pilipili" }
      }
    ],
    featured: false,
    rating: 4.5
  },
  {
    id: 5,
    name: {
      en: "TAM TAM Choco Bites",
      sw: "TAM TAM Choco Bites"
    },
    category: "chocolate",
    image: "/choko.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
    },
    description: {
      en: "Bite-sized chocolate treats perfect for sharing or enjoying as a personal indulgence.",
      sw: "Snack ndogo ndogo za chocolate nzuri na tamu."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "35g", sw: "35g" }
      },
      {
        name: { en: "Size", sw: "Ukubwa" },
        value: { en: "Bite-sized", sw: "Ukubwa wa Kidonda" }
      },
      {
        name: { en: "Coating", sw: "Coating" },
        value: { en: "Chocolate Coating", sw: "Mfuniko wa Chokoleti" }
      }
    ],
    featured: false,
    rating: 4.9
  }
];

const categories = [
  {
    id: "all",
    name: { en: "All Snacks", sw: "Snacks Zote" },
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "balls",
    name: { en: "Cheese Balls", sw: "Cheese Balls" },
    icon: "🧀"

  },
  {
    id: "chocolate",
    name: { en: "Chocolate", sw: "Chokoleti" },
    icon: "🍫"
  },
  {
    id: "healthy",
    name: { en: "Healthy Choice", sw: "Chaguo la Afya" },
    icon: "🌾"
  },
  {
    id: "rings",
    name: { en: "Rings", sw: "Pete" },
    icon: "⭕"
  }
];

export default function TamTamProductShowcase() {
  const { language } = useLanguage(); // Use language context
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const filteredProducts = tamtamProducts.filter(product => {
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

  const content = {
    title: {
      en: "TAM TAM Snacks Collection",
      sw: "Mkusanyiko wa Vitafunio vya TAM TAM"
    },
    subtitle: {
      en: "Bidhaa Ya Ah... Adi... - Delicious snacks that make every moment special!",
      sw: "Bidhaa Ya Ah... Adi... - Vitafunio vyenye ladha vinavyofanya kila wakati kuwa maalum!"
    },
    searchPlaceholder: {
      en: "Search TAM TAM snacks...",
      sw: "Tafuta vitafunio vya TAM TAM..."
    },
    addToCart: {
      en: "Add to Cart",
      sw: "Ongeza Kwenye Kikapu"
    },
    viewDetails: {
      en: "View Details",
      sw: "Angalia Maelezo"
    },
    specifications: {
      en: "Product Details",
      sw: "Maelezo ya Bidhaa"
    },
    noProducts: {
      en: "No snacks found",
      sw: "Hakuna vitafunio vilivopatikana"
    },
    resetFilters: {
      en: "Reset Filters",
      sw: "Weka Upya Vichujio"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-8 from-primary-50 via-white to-secondary-50">
 
    

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={content.searchPlaceholder[language]}
                className="block w-full pl-12 pr-4 py-4 border-2 border-primary-200 rounded-2xl bg-white shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl flex items-center gap-3 font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow' 
                    : 'bg-white text-gray-700 hover:bg-primary-50 shadow-soft hover:shadow-layer'
                }`}
              >
                {typeof category.icon === 'string' ? (
                  <span className="text-xl">{category.icon}</span>
                ) : (
                  category.icon
                )}
                {category.name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-3xl shadow-soft hover:shadow-layer transition-all duration-500 overflow-hidden transform group-hover:scale-105 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.featured && (
                        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-glow">
                          ⭐ {language === 'en' ? 'Featured' : 'Maalum'}
                        </div>
                      )}
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-accent-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {categories.find(c => c.id === product.category)?.name[language]}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                        {product.name[language]}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {product.description[language]}
                      </p>
                      
                      {/* Specifications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {content.specifications[language]}
                        </h4>
                        <ul className="space-y-1">
                          {product.specifications.slice(0, 2).map((spec, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                              <span className="font-medium text-gray-700">{spec.name[language]}: </span>
                              <span className="text-gray-600 ml-1">{spec.value[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="mt-auto">
                      <div className="text-2xl font-bold text-primary-600 mb-4 font-heading">
                        {product.price[language]}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link href={`/single-product/${product.id}`} className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-3 px-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-soft">
                          <ShoppingCart className="w-4 h-4" />
                          <span className="hidden sm:inline">{content.addToCart[language]}</span>
                        </Link>
                        
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
              {content.noProducts[language]}
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {language === 'en' 
                ? 'Try adjusting your search or filter criteria to find your favorite TAM TAM snacks!' 
                : 'Jaribu kubadilisha utafutaji au vigezo vya kuchuja kupata vitafunio vyako vya kipendwa vya TAM TAM!'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-soft"
            >
              {content.resetFilters[language]}
            </button>
          </div>
        )}
      </div>
      
      {/* Fun Footer */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl mb-4">🐘</div>
          <p className="text-xl font-semibold">
            {language === 'en' ? 'TAM TAM - Making stomachs happy since always!' : 'TAM TAM - Kufanya tumbo kufurahi tangu kila wakati!'}
          </p>
        </div>
      </div>
    </div>
  );
}