//single.js
// This file contains the data for CHUI battery products, including their details, specifications, features,

import { Award, Zap, Globe, BookOpen, TrendingUp, Star } from 'lucide-react';

// Enhanced CHUI Battery Products Data
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
      en: "TSh 120,000",
      sw: "TSh 120,000"
    },
    description: {
      en: "Reliable 12V 50AH maintenance-free battery with German technology. Perfect for medium-sized vehicles and backup power applications. Built to withstand Tanzania's challenging climate conditions while delivering consistent, dependable power for years.",
      sw: "Betri ya kuaminika 12V 50AH isiyohitaji ukarabati na teknolojia ya Kijerumani. Inafaa kwa magari ya wastani na matumizi ya nguvu za msaada. Imetengenezwa kustahimili mazingira magumu ya Tanzania huku ikitoa nguvu za kuaminika kwa miaka mingi."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "50AH", sw: "50AH" }
      },
      {
        name: { en: "Type", sw: "Aina" },
        value: { en: "Maintenance Free", sw: "Haitaji Ukarabati" }
      },
      {
        name: { en: "Warranty", sw: "Dhamana" },
        value: { en: "12 months", sw: "Miezi 12" }
      }
    ],
    features: [
      {
        en: "German technology with maintenance-free design for reliability",
        sw: "Teknolojia ya Kijerumani na muundo usiopata ukarabati kwa uaminifu"
      },
      {
        en: "Superior starting power in all weather conditions",
        sw: "Nguvu bora za kuanza katika hali zote za hewa"
      },
      {
        en: "Built specifically for Tanzania's climate challenges",
        sw: "Imetengenezwa maalum kwa changamoto za hali ya hewa ya Tanzania"
      },
      {
        en: "Long-lasting performance with 24-month warranty coverage",
        sw: "Utendaji wa muda mrefu na ulinzi wa dhamana ya miezi 24"
      }
    ],
    featured: true,
    rating: 4.8,
    images: ["/images/n50mf.jpeg", "/images/n60mf.jpeg", "/images/n80mf.jpeg"]
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
      en: "TSh 150,000",
      sw: "TSh 150,000"
    },
    description: {
      en: "High-performance 12V 70AH battery with 580A CCA rating. Ideal for larger vehicles and commercial applications requiring reliable starting power. Engineered with advanced German technology for maximum durability and performance.",
      sw: "Betri ya utendaji wa juu 12V 70AH na kiwango cha 580A CCA. Inafaa kwa magari makubwa na matumizi ya kibiashara yanayohitaji nguvu za kuanza za kuaminika. Imetengenezwa kwa teknolojia ya kisasa ya Kijerumani kwa uimara na utendaji wa juu."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "70AH", sw: "70AH" }
      },
      {
        name: { en: "CCA Rating", sw: "Kiwango cha CCA" },
        value: { en: "580A", sw: "580A" }
      },
      {
        name: { en: "Technology", sw: "Teknolojia" },
        value: { en: "German Standard", sw: "Kiwango cha Kijerumani" }
      }
    ],
    features: [
      {
        en: "High CCA rating for reliable cold weather starting",
        sw: "Kiwango cha juu cha CCA kwa kuanza kwa kuaminika hali ya baridi"
      },
      {
        en: "Perfect for commercial vehicles and heavy-duty applications",
        sw: "Bora kwa magari ya kibiashara na matumizi ya kazi nzito"
      },
      {
        en: "Advanced plate technology for extended battery life",
        sw: "Teknolojia ya kisasa ya sahani kwa maisha marefu ya betri"
      },
      {
        en: "Sealed maintenance-free design prevents acid leakage",
        sw: "Muundo uliosimbwa usiopata ukarabati unazuia kuvuja kwa asidi"
      }
    ],
    featured: true,
    rating: 4.9,
    images: ["/images/n70mf.jpeg", "/images/n70mf.jpeg", "/images/n70mf.jpeg"]
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
      en: "TSh 110,000",
      sw: "TSh 110,000"
    },
    description: {
      en: "Compact 12V 36AH battery with 360A CCA rating. Perfect for smaller vehicles, motorcycles, and compact car applications. Despite its compact size, it delivers reliable power with German engineering excellence.",
      sw: "Betri ndogo 12V 36AH na 360A CCA. Inafaa kwa magari madogo, pikipiki, na matumizi ya magari madogo. Licha ya ukubwa wake mdogo, inatoa nguvu za kuaminika na ubora wa uhandisi wa Kijerumani."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "36AH", sw: "36AH" }
      },
      {
        name: { en: "CCA Rating", sw: "Kiwango cha CCA" },
        value: { en: "360A", sw: "360A" }
      },
      {
        name: { en: "Size", sw: "Ukubwa" },
        value: { en: "Compact Design", sw: "Muundo Mdogo" }
      }
    ],
    features: [
      {
        en: "Compact size perfect for motorcycles and small cars",
        sw: "Ukubwa mdogo mkamilifu kwa pikipiki na magari madogo"
      },
      {
        en: "Excellent power-to-size ratio for maximum efficiency",
        sw: "Uwiano bora wa nguvu kwa ukubwa kwa ufanisi wa juu"
      },
      {
        en: "Vibration-resistant construction for rough road conditions",
        sw: "Ujenzi unaopinga mtetemeko kwa hali za barabara mbaya"
      },
      {
        en: "Quick charging capability for convenient use",
        sw: "Uwezo wa kuchaji haraka kwa matumizi rahisi"
      }
    ],
    featured: false,
    rating: 4.7,
    images: ["/images/ns40mf.jpeg", "/images/ns40mf.jpeg", "/images/ns40mf.jpeg"]
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
      en: "TSh 330,000",
      sw: "TSh 330,000"
    },
    description: {
      en: "Heavy-duty 12V 150AH industrial battery designed for trucks, buses, and high-capacity backup power systems. This premium battery delivers maximum power and reliability for the most demanding commercial applications.",
      sw: "Betri ya kazi nzito 12V 150AH ya viwandani iliyotengenezwa kwa malori, mabasi, na mifumo ya nguvu za msaada za uwezo mkubwa. Betri hii ya hali ya juu inatoa nguvu za juu na uaminifu kwa matumizi makubwa zaidi ya kibiashara."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "150AH", sw: "150AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Heavy Duty/Industrial", sw: "Kazi Nzito/Viwandani" }
      },
      {
        name: { en: "Construction", sw: "Ujenzi" },
        value: { en: "Deep Cycle", sw: "Mzunguko wa Kina" }
      }
    ],
    features: [
      {
        en: "Maximum capacity for trucks, buses, and industrial equipment",
        sw: "Uwezo wa juu kwa malori, mabasi, na vifaa vya viwandani"
      },
      {
        en: "Deep cycle technology for extended power backup applications",
        sw: "Teknolojia ya mzunguko wa kina kwa matumizi ya nguvu za msaada za muda mrefu"
      },
      {
        en: "Heavy-duty construction withstands harsh operating conditions",
        sw: "Ujenzi wa kazi nzito unastahimili mazingira magumu ya kufanya kazi"
      },
      {
        en: "Professional-grade reliability for commercial fleet operations",
        sw: "Uaminifu wa kiwango cha kitaaluma kwa shughuli za magari ya kibiashara"
      }
    ],
    featured: true,
    rating: 4.9,
    images: ["/chui-n150mf.jpg", "/chui-n150mf-industrial.jpg", "/chui-n150mf-truck.jpg"]
  },
  {
    id: 5,
    name: {
      en: "CHUI N100MF Battery",
      sw: "Betri ya CHUI N100MF"
    },
    category: "heavy",
    image: "/images/n80mf.jpeg",
    price: {
      en: "TSh 215,000",
      sw: "TSh 215,000"
    },
    description: {
      en: "High-capacity 12V 100AH maintenance-free battery ideal for SUVs, pickup trucks, and medium commercial vehicles. Combines German technology with robust construction for exceptional performance and longevity.",
      sw: "Betri ya uwezo wa juu 12V 100AH isiyohitaji ukarabati inayofaa kwa SUV, malori madogo, na magari ya kibiashara ya wastani. Inachanganya teknolojia ya Kijerumani na ujenzi mkuu kwa utendaji wa kipekee na maisha marefu."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "100AH", sw: "100AH" }
      },
      {
        name: { en: "CCA Rating", sw: "Kiwango cha CCA" },
        value: { en: "750A", sw: "750A" }
      },
      {
        name: { en: "Vehicle Type", sw: "Aina ya Gari" },
        value: { en: "SUV/Pickup", sw: "SUV/Pickup" }
      }
    ],
    features: [
      {
        en: "High CCA rating perfect for larger engines and SUVs",
        sw: "Kiwango cha juu cha CCA kinafaa kwa injini kubwa na SUV"
      },
      {
        en: "Extended reserve capacity for accessories and electronics",
        sw: "Uwezo wa akiba ulioongezwa kwa vifaa na elektroniki"
      },
      {
        en: "Robust design handles frequent start-stop cycles",
        sw: "Muundo mkuu unashughulikia mizunguko ya mara kwa mara ya kuanza-kusimama"
      },
      {
        en: "Optimal balance of power and size for versatile applications",
        sw: "Usawaziko bora wa nguvu na ukubwa kwa matumizi mbalimbali"
      }
    ],
    featured: false,
    rating: 4.8,
    images: ["/chui-n100mf.jpg", "/chui-n100mf-suv.jpg", "/chui-n100mf-pickup.jpg"]
  },
  {
    id: 6,
    name: {
      en: "CHUI N200MF Battery",
      sw: "Betri ya CHUI N200MF"
    },
    category: "industrial",
    image: "/images/n150mf.jpeg",
    price: {
      en: "TSh 420,000",
      sw: "TSh 420,000"
    },
    description: {
      en: "Ultra-high capacity 12V 200AH industrial battery designed for the most demanding applications including marine vessels, generators, and large commercial vehicles. The ultimate power solution for professional use.",
      sw: "Betri ya uwezo wa juu sana 12V 200AH ya viwandani iliyotengenezwa kwa matumizi makubwa zaidi ikiwa ni pamoja na meli, jenereta, na magari makubwa ya kibiashara. Suluhisho la mwisho la nguvu kwa matumizi ya kitaaluma."
    },
    specifications: [
      {
        name: { en: "Voltage", sw: "Volti" },
        value: { en: "12V DC", sw: "12V DC" }
      },
      {
        name: { en: "Capacity", sw: "Uwezo" },
        value: { en: "200AH", sw: "200AH" }
      },
      {
        name: { en: "Application", sw: "Matumizi" },
        value: { en: "Marine/Generator", sw: "Bahari/Jenereta" }
      },
      {
        name: { en: "Cycle Life", sw: "Maisha ya Mzunguko" },
        value: { en: "1500+ cycles", sw: "Mizunguko 1500+" }
      }
    ],
    features: [
      {
        en: "Ultra-high capacity for marine and generator applications",
        sw: "Uwezo wa juu sana kwa matumizi ya bahari na jenereta"
      },
      {
        en: "Extended cycle life for frequent charge-discharge operations",
        sw: "Maisha ya mzunguko ulioongezwa kwa shughuli za mara kwa mara za kuchaji-kutoa"
      },
      {
        en: "Corrosion-resistant terminals for marine environments",
        sw: "Vituo vyenye kupinga kutu kwa mazingira ya bahari"
      },
      {
        en: "Professional-grade construction for maximum reliability",
        sw: "Ujenzi wa kiwango cha kitaaluma kwa uaminifu wa juu"
      }
    ],
    featured: true,
    rating: 4.9,
    images: ["/images/n150mf.jpeg", "/images/n150mf.jpeg", "/images/n200mf.jpeg"]
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
      batteryImage: "/images/ns40mf.jpeg"
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
      batteryImage: "/images/ns50mf.jpeg"
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
      batteryImage: "/heavy-battery-hero.jpg"
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
      batteryImage: "/images/ns70mf.jpeg"
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