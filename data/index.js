import { Award, Zap, Globe, BookOpen, TrendingUp, Star } from 'lucide-react';

// CHUI Battery Products Data with Real Prices
export const productsData = [
  {
    id: 1,
    name: {
      en: "CHUI N5 Battery",
      sw: "Betri ya CHUI N5"
    },
    category: "compact",
    image: "/images/n5.jpeg",
    price: {
      en: "TSh 89,000",
      sw: "TSh 89,000"
    },
    description: {
      en: "Compact maintenance-free battery with German technology. Perfect for smaller vehicles and motorcycles.",
      sw: "Betri ndogo isiyohitaji ukarabati na teknolojia ya Kijerumani. Inafaa kwa magari madogo na pikipiki."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      }
    ],
    featured: false,
    rating: 4.7
  },
  {
    id: 2,
    name: {
      en: "CHUI N6 Battery",
      sw: "Betri ya CHUI N6"
    },
    category: "compact",
    image: "/images/n6.jpeg",
    price: {
      en: "TSh 21,000",
      sw: "TSh 21,000"
    },
    description: {
      en: "Ultra-compact battery ideal for motorcycles and small applications requiring reliable starting power.",
      sw: "Betri ndogo sana inayofaa kwa pikipiki na matumizi madogo yanayohitaji nguvu za kuanza za kuaminika."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      }
    ],
    featured: false,
    rating: 4.6
  },
  {
    id: 3,
    name: {
      en: "CHUI N9 Battery",
      sw: "Betri ya CHUI N9"
    },
    category: "compact",
    image: "/images/n9.jpeg",
    price: {
      en: "TSh 23,000",
      sw: "TSh 23,000"
    },
    description: {
      en: "Reliable small-capacity battery perfect for motorcycles and compact vehicles with German engineering.",
      sw: "Betri ya uwezo mdogo ya kuaminika inayofaa kwa pikipiki na magari madogo na uhandisi wa Kijerumani."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      }
    ],
    featured: false,
    rating: 4.6
  },
  {
    id: 4,
    name: {
      en: "CHUI N36 Battery",
      sw: "Betri ya CHUI N36"
    },
    category: "medium",
    image: "/images/n36.jpeg",
    price: {
      en: "TSh 90,000",
      sw: "TSh 90,000"
    },
    description: {
      en: "Medium-duty 12V battery with excellent starting power. Perfect for standard passenger vehicles and light commercial use.",
      sw: "Betri ya kazi ya wastani 12V na nguvu bora za kuanza. Inafaa kwa magari ya kawaida ya abiria na matumizi mepesi ya kibiashara."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "36AH", sw: "36AH" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      }
    ],
    featured: true,
    rating: 4.8
  },
  {
    id: 5,
    name: {
      en: "CHUI N40 Battery",
      sw: "Betri ya CHUI N40"
    },
    category: "medium",
    image: "/images/n40.jpeg",
    price: {
      en: "TSh 110,000",
      sw: "TSh 110,000"
    },
    description: {
      en: "High-performance 12V 40AH battery with superior starting power. Ideal for medium-sized vehicles and backup applications.",
      sw: "Betri ya utendaji wa juu 12V 40AH na nguvu bora za kuanza. Inafaa kwa magari ya wastani na matumizi ya msaada."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "40AH", sw: "40AH" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      }
    ],
    featured: true,
    rating: 4.8
  },
  {
    id: 6,
    name: {
      en: "CHUI N60 Battery",
      sw: "Betri ya CHUI N60"
    },
    category: "heavy",
    image: "/images/n60.jpeg",
    price: {
      en: "TSh 130,000",
      sw: "TSh 130,000"
    },
    description: {
      en: "Heavy-duty 12V 60AH battery designed for larger vehicles and demanding applications requiring consistent power delivery.",
      sw: "Betri ya kazi nzito 12V 60AH iliyotengenezwa kwa magari makubwa na matumizi makubwa yanayohitaji utoaji wa nguvu thabiti."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "60AH", sw: "60AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Heavy Duty", sw: "Kazi Nzito" }
      }
    ],
    featured: true,
    rating: 4.9
  },
  {
    id: 7,
    name: {
      en: "CHUI N70 Battery",
      sw: "Betri ya CHUI N70"
    },
    category: "heavy",
    image: "/images/n70.jpeg",
    price: {
      en: "TSh 150,000",
      sw: "TSh 150,000"
    },
    description: {
      en: "Premium 12V 70AH battery with exceptional starting power. Perfect for large vehicles and commercial applications.",
      sw: "Betri bora 12V 70AH na nguvu za kipekee za kuanza. Inafaa kwa magari makubwa na matumizi ya kibiashara."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "70AH", sw: "70AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Heavy Duty", sw: "Kazi Nzito" }
      }
    ],
    featured: true,
    rating: 4.9
  },
  {
    id: 8,
    name: {
      en: "CHUI N100 Battery",
      sw: "Betri ya CHUI N100"
    },
    category: "industrial",
    image: "/images/n100.jpeg",
    price: {
      en: "TSh 215,000",
      sw: "TSh 215,000"
    },
    description: {
      en: "Industrial-grade 12V 100AH battery designed for trucks, buses, and high-capacity backup power systems.",
      sw: "Betri ya kiwango cha viwandani 12V 100AH iliyotengenezwa kwa malori, mabasi, na mifumo ya nguvu za msaada za uwezo mkubwa."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "100AH", sw: "100AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Industrial", sw: "Viwandani" }
      }
    ],
    featured: true,
    rating: 4.9
  },
  {
    id: 9,
    name: {
      en: "CHUI N150 Battery",
      sw: "Betri ya CHUI N150"
    },
    category: "industrial",
    image: "/images/n150.jpeg",
    price: {
      en: "TSh 339,000",
      sw: "TSh 339,000"
    },
    description: {
      en: "Maximum capacity 12V 150AH industrial battery for heavy commercial vehicles, trucks, and high-demand applications.",
      sw: "Betri ya viwandani ya uwezo wa juu 12V 150AH kwa magari makubwa ya kibiashara, malori, na matumizi ya mahitaji makubwa."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "150AH", sw: "150AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Heavy Industrial", sw: "Viwandani Vikuu" }
      }
    ],
    featured: true,
    rating: 4.9
  },
  {
    id: 10,
    name: {
      en: "CHUI N200 Battery",
      sw: "Betri ya CHUI N200"
    },
    category: "industrial",
    image: "/images/n200.jpeg",
    price: {
      en: "TSh 420,000",
      sw: "TSh 420,000"
    },
    description: {
      en: "Premium industrial 12V 200AH battery for the most demanding commercial and industrial applications requiring maximum power and reliability.",
      sw: "Betri bora ya viwandani 12V 200AH kwa matumizi makubwa zaidi ya kibiashara na viwandani yanayohitaji nguvu na uaminifu wa juu."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "200AH", sw: "200AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Maximum Industrial", sw: "Viwandani vya Juu" }
      }
    ],
    featured: true,
    rating: 5.0
  }
];

// Categories for CHUI batteries
export const categories = [
  {
    id: "all",
    name: { en: "All Batteries", sw: "Betri Zote" },
    icon: "🔋"
  },
  {
    id: "compact",
    name: { en: "Compact Size", sw: "Ukubwa Mdogo" },
    icon: "⚡"
  },
  {
    id: "medium",
    name: { en: "Medium Duty", sw: "Kazi ya Wastani" },
    icon: "🔌"
  },
  {
    id: "heavy",
    name: { en: "Heavy Duty", sw: "Kazi Nzito" },
    icon: "⚙️"
  },
  {
    id: "industrial",
    name: { en: "Industrial", sw: "Viwandani" },
    icon: "🏭"
  }
];

// Hero content for CHUI
export const heroContent = {
  title: {
    en: "The Power Leader Experience",
    sw: "Uzoefu wa Kiongozi wa Nguvu"
  },
  subtitle: {
    en: "CHUI delivers reliable, maintenance-free batteries with German technology for all your power needs",
    sw: "CHUI inatoa betri za kuaminika, zisizohitaji ukarabati na teknolojia ya Kijerumani kwa mahitaji yako yote ya nguvu"
  },
  ctaPrimary: {
    en: "Shop Batteries",
    sw: "Nunua Betri"
  },
  ctaSecondary: {
    en: "Find Dealers",
    sw: "Tafuta Madalali"
  },
  trustText: {
    en: "Trusted by vehicle owners nationwide",
    sw: "Imezalishwa na wamiliki wa magari kote nchini"
  },
  whyChooseTitle: {
    en: "Why Choose CHUI Batteries?",
    sw: "Kwa Nini Uchague Betri za CHUI?"
  },
  whyChooseReasons: [
    {
      icon: Award,
      text: {
        en: "German technology with maintenance-free design",
        sw: "Teknolojia ya Kijerumani na muundo usiopata ukarabati"
      }
    },
    {
      icon: Globe,
      text: {
        en: "Made in Tanzania for local conditions",
        sw: "Imetengenezwa Tanzania kwa mazingira ya ndani"
      }
    },
    {
      icon: Star,
      text: {
        en: "Consistently rated 4.7+ stars by customers",
        sw: "Inapewa alama za nyota 4.7+ na wateja"
      }
    },
    {
      icon: Zap,
      text: {
        en: "Superior starting power and reliability",
        sw: "Nguvu bora za kuanza na uaminifu"
      }
    },
    {
      icon: TrendingUp,
      text: {
        en: "Leading automotive battery brand",
        sw: "Chapa inayoongoza ya betri za magari"
      }
    }
  ],
  products: [
    {
      name: {
        en: "Compact Batteries",
        sw: "Betri Ndogo"
      },
      description: {
        en: "Perfect for motorcycles and small vehicles",
        sw: "Inafaa kwa pikipiki na magari madogo"
      },
      batteryImage: "/images/n6.jpeg",
      priceRange: {
        en: "From TSh 21,000",
        sw: "Kuanzia TSh 21,000"
      }
    },
    {
      name: {
        en: "Medium Duty",
        sw: "Kazi ya Wastani"
      },
      description: {
        en: "Reliable power for everyday vehicles",
        sw: "Nguvu za kuaminika kwa magari ya kila siku"
      },
      batteryImage: "/images/n40.jpeg",
      priceRange: {
        en: "From TSh 90,000",
        sw: "Kuanzia TSh 90,000"
      }
    },
    {
      name: {
        en: "Heavy Duty",
        sw: "Kazi Nzito"
      },
      description: {
        en: "High-performance for demanding applications",
        sw: "Utendaji wa juu kwa matumizi makubwa"
      },
      batteryImage: "/images/n70.jpeg",
      priceRange: {
        en: "From TSh 130,000",
        sw: "Kuanzia TSh 130,000"
      }
    },
    {
      name: {
        en: "Industrial Grade",
        sw: "Kiwango cha Viwandani"
      },
      description: {
        en: "Maximum capacity for commercial use",
        sw: "Uwezo wa juu kwa matumizi ya kibiashara"
      },
      batteryImage: "/images/n200.jpeg",
      priceRange: {
        en: "From TSh 215,000",
        sw: "Kuanzia TSh 215,000"
      }
    }
  ]
};

// Additional product features for detailed pages
export const productFeatures = {
  reliability: {
    en: "Guaranteed Reliability",
    sw: "Uhakika wa Uaminifu"
  },
  technology: {
    en: "German Technology Standards",
    sw: "Viwango vya Teknolojia ya Kijerumani"
  },
  maintenance: {
    en: "Maintenance-Free Operation",
    sw: "Utendaji Pasipo Ukarabati"
  },
  warranty: {
    en: "Comprehensive Warranty Coverage",
    sw: "Ulinzi wa Dhamana Kamili"
  }
};