import { Award, Zap, Globe, BookOpen, TrendingUp, Star } from 'lucide-react';

// CHUI Battery Products Data
export const productsData = [
  {
    id: 1,
    name: {
      en: "CHUI N50MF Battery",
      sw: "Betri ya CHUI N50MF"
    },
    category: "medium",
    image: "/images/n50mf.jpeg",
    price: {
      en: "TSh 85,000",
      sw: "TSh 85,000"
    },
    description: {
      en: "Reliable 12V 50AH maintenance-free battery with German technology. Perfect for medium-sized vehicles and backup power applications.",
      sw: "Betri ya kuaminika 12V 50AH isiyohitaji ukarabati na teknolojia ya Kijerumani. Inafaa kwa magari ya wastani na matumizi ya nguvu za msaada."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V", sw: "12V" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "50AH", sw: "50AH" }
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
    id: 2,
    name: {
      en: "CHUI N70MF Battery",
      sw: "Betri ya CHUI N70MF"
    },
    category: "heavy",
    image: "/images/n70mf.jpeg",
    price: {
      en: "TSh 120,000",
      sw: "TSh 120,000"
    },
    description: {
      en: "High-performance 12V 70AH battery with 580A CCA rating. Ideal for larger vehicles and commercial applications requiring reliable starting power.",
      sw: "Betri ya utendaji wa juu 12V 70AH na kiwango cha 580A CCA. Inafaa kwa magari makubwa na matumizi ya kibiashara yanayohitaji nguvu za kuanza za kuaminika."
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
        name: { en: "CCA Rating", sw: "Kiwango cha CCA" },
        value: { en: "580A", sw: "580A" }
      }
    ],
    featured: true,
    rating: 4.9
  },
  {
    id: 3,
    name: {
      en: "CHUI NS40MF Battery",
      sw: "Betri ya CHUI NS40MF"
    },
    category: "compact",
    image: "/images/ns40mf.jpeg",
    price: {
      en: "TSh 65,000",
      sw: "TSh 65,000"
    },
    description: {
      en: "Compact 12V 36AH battery with 360A CCA. Perfect for smaller vehicles, motorcycles, and compact car applications.",
      sw: "Betri ndogo 12V 36AH na 360A CCA. Inafaa kwa magari madogo, pikipiki, na matumizi ya magari madogo."
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
        name: { en: "CCA Rating", sw: "Kiwango cha CCA" },
        value: { en: "360A", sw: "360A" }
      }
    ],
    featured: false,
    rating: 4.7
  },
  {
    id: 4,
    name: {
      en: "CHUI N150MF Battery",
      sw: "Betri ya CHUI N150MF"
    },
    category: "industrial",
    image: "/images/n150mf.jpeg",
    price: {
      en: "TSh 280,000",
      sw: "TSh 280,000"
    },
    description: {
      en: "Heavy-duty 12V 150AH industrial battery designed for trucks, buses, and high-capacity backup power systems.",
      sw: "Betri ya kazi nzito 12V 150AH ya viwandani iliyotengenezwa kwa malori, mabasi, na mifumo ya nguvu za msaada za uwezo mkubwa."
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
        value: { en: "Heavy Duty", sw: "Kazi Nzito" }
      }
    ],
    featured: true,
    rating: 4.9
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
        en: "Perfect for small vehicles and motorcycles",
        sw: "Inafaa kwa magari madogo na pikipiki"
      },
      batteryImage: "/images/nm70f.jpeg"
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
      batteryImage: "/medium-battery-hero.jpg"
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
      batteryImage: "/images/n40mf.jpeg"
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
      batteryImage: "/images/n80mf.jpg"
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