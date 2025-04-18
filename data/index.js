
import { Award, Torus as Tool, Globe, BookOpen, TrendingUp } from 'lucide-react';

export const productsData = [
    {
      id: 1,
      name: { en: "Zoomlion Tractor", sw: "Trekta ya Zoomlion" },
      category: "tractors",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Available in 50HP, 70HP, 90HP, 110HP and 130HP. Features dry independently operated double acting clutch, National III engine emissions, wet disc brakes, air-conditioned cab, three point rear suspension (Class III), and half-index lifters hydraulic system.",
        sw: "Inapatikana kwa HP 50, 70, 90, 110 na 130. Ina clutch kavu inayofanya kazi peke yake, uchafuzi wa injini wa National III, breki za diski zenye unyevu, cab yenye hewa, mfumo wa kusimamisha nyuma wa pointi tatu (Class III), na mfumo wa hydraulic wa half-index lifters."
      },
      image: "/zoomlion-tractor.jpg",
      featured: true
    },
    {
      id: 2,
      name: { en: "Massey Ferguson Tractor", sw: "Trekta ya Massey Ferguson" },
      category: "tractors",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Available in 50HP, 75HP, 85HP. Features manual transmission, 2.5D/4.1D engine with 4 cylinders, 8 forward/2 reverse gear box, oil-immersed multi-disc brakes. Extras include hydraulic position control, high PTO power, spring suspension, and deluxe seat.",
        sw: "Inapatikana kwa HP 50, 75, 85. Ina gia za mkononi, injini ya 2.5D/4.1D na silinda 4, sanduku la gia 8 mbele/2 nyuma, breki za diski nyingi zilizozama kwa mafuta. Pia ina udhibiti wa nafasi ya hydraulic, nguvu ya juu ya PTO, suspension ya spring, na kiti cha starehe."
      },
      image: "/massey-ferguson-tractor.jpg",
      featured: false
    },
    {
      id: 3,
      name: { en: "Sonalika Tractor", sw: "Trekta ya Sonalika" },
      category: "tractors",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Features three cylinder natural aspirated engine, available in 2WD/4WD drive options, maximum speed of 29.94 km/hr at 2100 RPM, oil immersed brakes, foot operated differential lock, 540 RPM PTO, and power steering.",
        sw: "Ina injini ya silinda tatu ya natural aspirated, inapatikana kwa chaguo za 2WD/4WD, kasi ya juu ya 29.94 km/hr kwa RPM 2100, breki zilizozama kwa mafuta, differential lock inayoendeshwa kwa mguu, PTO ya RPM 540, na usukani wa power."
      },
      image: "/sonalika-tractor.jpg",
      featured: false
    },
    {
      id: 4,
      name: { en: "Mahindra Tractor", sw: "Trekta ya Mahindra" },
      category: "tractors",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Engine power range of 15.7 to 25.7 kW (21 to 35 HP), maximum torque of 73.5 Nm, 3 engine cylinders, 2WD/4WD drive options, rated at 2400 RPM, power steering, constant mesh transmission with synchro shuttle, single clutch type, 12F + 12R gears, OIB brake type, and 950 kg hydraulic lifting capacity.",
        sw: "Nguvu ya injini ya 15.7 hadi 25.7 kW (21 hadi 35 HP), torque ya juu ya 73.5 Nm, silinda 3 za injini, chaguo za 2WD/4WD, inakadiriwa kwa RPM 2400, usukani wa power, transmission ya constant mesh na synchro shuttle, aina ya clutch moja, gia 12F + 12R, aina ya breki ya OIB, na uwezo wa kuinua hydraulic wa kilo 950."
      },
      image: "/mahindra-tractor.jpg",
      featured: false
    },
    {
      id: 5,
      name: { en: "John Deere Tractor", sw: "Trekta ya John Deere" },
      category: "tractors",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Available in 60HP, 75HP, and 90HP. Features hydraulic capacity up to 18 GPM, mechanical four-wheel drive, open operator's station or cab option, gear drive transmission 8F/8R, comfortable operation station, and Category 1 3-Pt Hitch compatibility.",
        sw: "Inapatikana kwa HP 60, 75, na 90. Ina uwezo wa hydraulic hadi GPM 18, four-wheel drive ya mechanical, kituo cha opereta wazi au chaguo la cab, transmission ya gia 8F/8R, kituo cha uendeshaji chenye starehe, na upatanifu wa Category 1 3-Pt Hitch."
      },
      image: "/john-deere-tractor.jpg",
      featured: true
    },
    {
      id: 6,
      name: { en: "Zoomlion Rice Harvester", sw: "Mashine ya Kuvuna Mchele ya Zoomlion" },
      category: "harvesters",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Crawler full feeding structure type, Diesel engine 4C6-100M22, weight 3260 kg, feed quantity 14.4 t/h, minimum ground clearance 325 mm, fuel consumption ≤33 kg/hm2, and 140L fuel tank capacity.",
        sw: "Aina ya muundo wa kulisha kamili wa crawler, injini ya dizeli 4C6-100M22, uzito wa kilo 3260, kiwango cha kulisha 14.4 t/h, nafasi ya chini ya ardhi ya 325 mm, matumizi ya mafuta ≤33 kg/hm2, na uwezo wa tanki la mafuta wa lita 140."
      },
      image: "/zoomlion-rice-harvester.jpg",
      featured: true
    },
    {
      id: 7,
      name: { en: "Kubota Rice Combine Harvester", sw: "Mashine ya Kuvuna Mchele ya Kubota" },
      category: "harvesters",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "PRO688-Q model with total dimensions of 4860*2295*2765 mm, weight 2815kg, 68hp matched power, 200cm working width, suitable for rice, wheat, and oilseed rape, with 2.5kg feed quantity.",
        sw: "Modeli ya PRO688-Q na vipimo vya jumla vya 4860*2295*2765 mm, uzito wa kilo 2815, nguvu inayolingana ya 68hp, upana wa kufanya kazi wa sentimita 200, inafaa kwa mchele, ngano, na rape ya mbegu za mafuta, na kiasi cha kulisha kilo 2.5."
      },
      image: "/kubota-rice-harvester.jpg",
      featured: false
    },
    {
      id: 8,
      name: { en: "Zoomlion Combine Harvester", sw: "Mashine ya Kuvuna ya Zoomlion" },
      category: "harvesters",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Crawler full feeding structure, diesel engine 4C6-100M22, weight 3260kg, feed quantity 14.4 t/h, minimum ground clearance 325mm, fuel consumption ≤33 kg/hm2, 140L fuel tank, crawler dimensions 90mm×53×500mm, 1250mm gauge, sunshade shed, HST gearbox, and manual grain handling with 0.33m³ granary.",
        sw: "Muundo wa kulisha kamili wa crawler, injini ya dizeli 4C6-100M22, uzito wa kilo 3260, kiwango cha kulisha 14.4 t/h, nafasi ya chini ya ardhi ya 325mm, matumizi ya mafuta ≤33 kg/hm2, tanki la mafuta la lita 140, vipimo vya crawler 90mm×53×500mm, gauge ya 1250mm, banda la kivuli, gearbox ya HST, na usimamizi wa nafaka wa mkono na granary ya 0.33m³."
      },
      image: "/zoomlion-combine-harvester.jpg",
      featured: false
    },
    {
      id: 9,
      name: { en: "Kamco Power Tiller", sw: "Power Tiller ya Kamco" },
      category: "tillers",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Features Kamco Super DI engine, 12.4 HP power, direct injection, horizontal, four stroke, single cylinder, water cooled design. Uses diesel fuel with a 10.7 liter fuel tank capacity. Comes with trailer attachment for agricultural applications.",
        sw: "Ina injini ya Kamco Super DI, nguvu ya HP 12.4, injection ya moja kwa moja, ya mlalo, stroke nne, silinda moja, design ya kuchujwa kwa maji. Inatumia mafuta ya dizeli na uwezo wa tanki la mafuta wa lita 10.7. Inakuja na kiambatisho cha trailer kwa matumizi ya kilimo."
      },
      image: "/kamco-power-tiller.jpg",
      featured: true
    },
    {
      id: 10,
      name: { en: "Agricultural Seeder", sw: "Mashine ya Kupanda Mbegu" },
      category: "seeders",
      price: { en: "Contact for pricing", sw: "Wasiliana kwa bei" },
      description: {
        en: "Professional seeder, planter, and spreader for efficient agricultural operations. Allows for precise seed distribution for improved crop yield.",
        sw: "Mashine ya kitaalamu ya kupanda mbegu na kusambaza kwa uendeshaji bora wa kilimo. Inaruhusu usambazaji sahihi wa mbegu kwa mavuno bora ya mazao."
      },
      image: "/agricultural-seeder.jpg",
      featured: false
    }
  ];

// heroContent.js


export const heroContent = {
  title: {
    en: "Premium Agricultural Solutions",
    sw: "Vifaa vya Kilimo vya Hali ya Juu"
  },
  subtitle: {
    en: "Fourfreyn Company Limited provides top-quality farming equipment, fertilizers, and agricultural services",
    sw: "Fourfreyn Company Limited inatoa vifaa bora vya kilimo, mbolea, na huduma za kilimo"
  },
  ctaPrimary: {
    en: "Browse Products",
    sw: "Angalia Bidhaa"
  },
  ctaSecondary: {
    en: "Contact Sales",
    sw: "Wasiliana na Mauzo"
  },
  trustText: {
    en: "Trusted by farmers across the region",
    sw: "Imeaminika na wakulima kotekote mkoani"
  },
  whyChooseTitle: {
    en: "Why Choose Fourfreyn Company Limited?",
    sw: "Kwa Nini Uchague Fourfreyn Company Limited?"
  },
  whyChooseReasons: [
    {
      icon: Award,
      text: {
        en: "Over 06 years of industry experience",
        sw: "Zaidi ya miaka 06 ya uzoefu katika sekta"
      }
    },
    {
      icon: Globe,
      text: {
        en: "International partnerships with top manufacturers",
        sw: "Ushirikiano wa kimataifa na watengenezaji wakuu"
      }
    },
    {
      icon: Tool,
      text: {
        en: "Nationwide service and spare parts availability",
        sw: "Huduma na upatikanaji wa vipuri kote nchini"
      }
    },
    {
      icon: BookOpen,
      text: {
        en: "Agronomy support and farmer training programs",
        sw: "Msaada wa agronomi na programu za mafunzo kwa wakulima"
      }
    },
    {
      icon: TrendingUp,
      text: {
        en: "Proven track record in increasing crop yield",
        sw: "Rekodi iliyothibitishwa katika kuongeza mazao"
      }
    }
  ],
  products: [
    {
      name: {
        en: "Tractors",
        sw: "Trekta"
      },
      description: {
        en: "High-performance farming machinery",
        sw: "Vifaa vya kilimo vya ufanisi wa juu"
      },
      farmerImage: "/tractor-1.jpg"
    },
    {
      name: {
        en: "Fertilizers",
        sw: "Mbolea"
      },
      description: {
        en: "Premium quality nutrients for crops",
        sw: "Virutubisho bora kwa mazao"
      },
      farmerImage: "/farmer-3.jpg"
    },
    {
      name: {
        en: "Irrigation",
        sw: "Umwagiliaji"
      },
      description: {
        en: "Efficient water management systems",
        sw: "Mifumo ya ufanisi wa usimamizi wa maji"
      },
      farmerImage: "/irrigation-1.jpg"
    },
    {
      name: {
        en: "Delivery",
        sw: "Uwasilishaji"
      },
      description: {
        en: "Reliable logistics to your farm",
        sw: "Mifumo ya uwasilishaji imara shambani mwako"
      },
      farmerImage: "/delivery-1.jpg"
    }
  ]
};


  