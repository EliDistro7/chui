import { Award, Zap, Globe, BookOpen, TrendingUp, Star } from 'lucide-react';

// TAM TAM Products Data
export const productsData = [
  {
    id: 1,
    name: {
      en: "TAM TAM Cheese Balls",
      sw: "TAM TAM Cheese Balls"
    },
    category: "balls",
    image: "/tamtam-cheese-balls.jpg",
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
    image: "/tamtam-choco-crunch.jpg",
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
    image: "/crisp.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
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
  },
  {
    id: 6,
    name: {
      en: "TAM TAM Spicy Mix",
      sw: "TAM TAM Mchanganyiko wa Pilipili"
    },
    category: "spicy",
    image: "/pafki.jpeg",
    price: {
      en: "TSh 550",
      sw: "TSh 550"
    },
    description: {
      en: "A fiery blend of spiced snacks that pack a punch. Perfect for those who love heat in their treats.",
      sw: "Mchanganyiko wa vitafunio vyenye pilipili kali. Bora kwa wale wanaopenda joto katika vitafunio vyao."
    },
    specifications: [
      {
        name: { en: "Weight", sw: "Uzito" },
        value: { en: "45g", sw: "45g" }
      },
      {
        name: { en: "Heat Level", sw: "Kiwango cha Joto" },
        value: { en: "Hot & Spicy", sw: "Moto na Pilipili" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Mixed Snacks", sw: "Vitafunio Mchanganyiko" }
      }
    ],
    featured: true,
    rating: 4.4
  }
];

// Categories for TAM TAM products
export const categories = [
  {
    id: "all",
    name: { en: "All Snacks", sw: "Vitafunio Vyote" },
    icon: "🍿"
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
  },
  {
    id: "spicy",
    name: { en: "Spicy", sw: "Pilipili" },
    icon: "🌶️"
  }
];

// Hero content for TAM TAM
export const heroContent = {
  title: {
    en: "Premium Snack Experience",
    sw: "Vitafunio vya Hali ya Juu"
  },
  subtitle: {
    en: "TAM TAM delivers delicious, high-quality snacks that bring joy to every moment",
    sw: "TAM TAM inatoa vitafunio vizuri vya hali ya juu vinavyoleta furaha kwa kila wakati"
  },
  ctaPrimary: {
    en: "Shop Snacks",
    sw: "Nunua Vitafunio"
  },
  ctaSecondary: {
    en: "Find Stores",
    sw: "Tafuta Maduka"
  },
  trustText: {
    en: "Loved by snack enthusiasts nationwide",
    sw: "Inapendwa na wapenda vitafunio kote nchini"
  },
  whyChooseTitle: {
    en: "Why Choose TAM TAM?",
    sw: "Kwa Nini Uchague TAM TAM?"
  },
  whyChooseReasons: [
    {
      icon: Award,
      text: {
        en: "Premium quality ingredients in every pack",
        sw: "Viungo vya hali ya juu katika kila kifurushi"
      }
    },
    {
      icon: Globe,
      text: {
        en: "Available in stores across Tanzania",
        sw: "Inapatikana katika maduka kote Tanzania"
      }
    },
    {
      icon: Star,
      text: {
        en: "Consistently rated 4.5+ stars by customers",
        sw: "Inapewa alama za nyota 4.5+ na wateja"
      }
    },
    {
      icon: BookOpen,
      text: {
        en: "Variety of flavors for every taste preference",
        sw: "Aina mbalimbali za ladha kwa kila mtazamo wa ladha"
      }
    },
    {
      icon: TrendingUp,
      text: {
        en: "Growing brand with loyal customer base",
        sw: "Chapa inayokua na wateja waaminifu"
      }
    }
  ],
  products: [
    {
      name: {
        en: "Cheese Balls",
        sw: "Cheese Balls"
      },
      description: {
        en: "Crispy golden cheese perfection",
        sw: "Jibini la dhahabu lenye kigumu"
      },
      snackImage: "/cheese-balls-hero.jpg"
    },
    {
      name: {
        en: "Chocolate",
        sw: "Chokoleti"
      },
      description: {
        en: "Rich cocoa indulgence",
        sw: "Utamu wa kakao tajiri"
      },
      snackImage: "/chocolate-hero.jpg"
    },
    {
      name: {
        en: "Healthy Options",
        sw: "Chaguo za Afya"
      },
      description: {
        en: "Nutritious multigrain goodness",
        sw: "Utamu wa nafaka mchanganyiko wenye lishe"
      },
      snackImage: "/healthy-hero.jpg"
    },
    {
      name: {
        en: "Fun Shapes",
        sw: "Maumbo ya Kufurahisha"
      },
      description: {
        en: "Exciting shapes and bold flavors",
        sw: "Maumbo ya kusisimua na ladha kali"
      },
      snackImage: "/fun-shapes-hero.jpg"
    }
  ]
};

// Additional product features for detailed pages
export const productFeatures = {
  freshness: {
    en: "Always Fresh Guarantee",
    sw: "Uhakika wa Upya Daima"
  },
  quality: {
    en: "Premium Quality Ingredients",
    sw: "Viungo vya Hali ya Juu"
  },
  variety: {
    en: "Wide Range of Flavors",
    sw: "Aina Mbalimbali za Ladha"
  },
  availability: {
    en: "Available Nationwide",
    sw: "Inapatikana Kote Nchini"
  }
};