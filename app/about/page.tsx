'use client'

import { useLanguage } from '@/context/LanguageContext';
import { Fade } from 'react-awesome-reveal';
import { Users, Trophy, Leaf, Globe, Truck, Shield, Sparkles, Award } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

const aboutContent = {
  title: {
    en: "Our Farming Legacy",
    sw: "Urithi Wetu wa Kilimo"
  },
  subtitle: {
    en: "Committed to agricultural excellence since 2019",
    sw: "Tumejitolea kwa ubora wa kilimo tangu 2019"
  },
  missionTitle: {
    en: "Our Mission",
    sw: "Dhamira Yetu"
  },
  missionText: {
    en: "To supply cutting-edge agricultural machinery and implements, provide high-performance and eco-friendly pesticides and crop care solutions, and deliver effective and efficient Rental Machines that meet the demand of our clients.",
    sw: "Kusambaza mashine za kilimo za kisasa na zana, kutoa viuatilifu vya hali ya juu na rafiki kwa mazingira na suluhisho za utunzaji wa mazao, na kutoa Mashine za Kukodisha zinazofaa na zenye ufanisi ambazo zinakidhi mahitaji ya wateja wetu."
  },
  visionTitle: {
    en: "Our Vision",
    sw: "Maono Yetu"
  },
  visionText: {
    en: "To be Tanzania's most trusted partner in modern agriculture, construction and Mining Projects through sustainable technologies and services.",
    sw: "Kuwa mshirika anayeaminika zaidi Tanzania katika kilimo cha kisasa, ujenzi na Miradi ya Uchimbaji Madini kupitia teknolojia na huduma endelevu."
  },
  storyTitle: {
    en: "Our Story",
    sw: "Historia Yetu"
  },
  storyText: {
    en: "Fourfreyn is a leading provider of innovative agricultural solutions, dedicated to transforming farming through high-quality machinery, modern implements, and effective crop protection products. We also deal with RENTING of Farming Equipment and Construction Equipment. Founded in 2019, our mission is to empower farmers with reliable tools and technologies that increase productivity, sustainability, and profitability. We pride ourselves on supporting both smallholder and commercial farmers with customized solutions that meet local and global agricultural demands. We also provide service to Miners and Construction Companies that need machines to fulfill their Project demand on Equipment bases.",
    
    sw: "Fourfreyn ni mtoa huduma mkuu wa suluhisho bunifu za kilimo, inayojitolea kubadilisha kilimo kupitia mashine bora, zana za kisasa, na bidhaa madhubuti za kulinda mazao. Tunashughulika pia na KUKODISHA Vifaa vya Kilimo na Vifaa vya Ujenzi. Ilianzishwa mwaka 2019, dhamira yetu ni kuwawezesha wakulima kwa zana na teknolojia za kuaminika zinazoongeza uzalishaji, uendelevu, na faida. Tunajivunia kusaidia wakulima wadogo na wa kibiashara kwa suluhisho zilizoratibiwa kukidhi mahitaji ya kilimo ya ndani na kimataifa. Tunatoa pia huduma kwa Wachimbaji Madini na Kampuni za Ujenzi zinazohitaji mashine kutimiza mahitaji yao ya Miradi kwa misingi ya Vifaa."
  },
  valuesTitle: {
    en: "Our Core Values",
    sw: "Maadili Yetu Ya Msingi"
  },
  teamTitle: {
    en: "Meet Our Leadership",
    sw: "Kutana na Viongozi Wetu"
  },
  ctaTitle: {
    en: "Ready to grow with us?",
    sw: "Tayari kukua pamoja nasi?"
  },
  ctaText: {
    en: "Discover how our solutions can transform your farming operations",
    sw: "Gundua jinsi ufumbuzi wetu unaweza kubadilisha shughuli zako za kilimo"
  }
};

const values = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary-600" />,
    title: { en: "Innovation", sw: "Ubunifu" },
    description: {
      en: "Constantly evolving to meet the needs of our clients demand and projects",
      sw: "Kubadilika mara kwa mara kukidhi mahitaji ya wateja wetu na miradi"
    }
  },
  {
    icon: <Award className="w-8 h-8 text-primary-600" />,
    title: { en: "Quality", sw: "Ubora" },
    description: {
      en: "Only the best products and services for our clients",
      sw: "Bidhaa na huduma bora zaidi tu kwa wateja wetu"
    }
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-600" />,
    title: { en: "Integrity", sw: "Uadilifu" },
    description: {
      en: "Transparent and ethical business practices",
      sw: "Biashara inayofanywa kwa uwazi na maadili"
    }
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary-600" />,
    title: { en: "Sustainability", sw: "Uendelevu" },
    description: {
      en: "Solutions that protect the environment and promote long-term growth",
      sw: "Suluhisho zinazolinda mazingira na kukuza ukuaji wa muda mrefu"
    }
  },
  {
    icon: <Users className="w-8 h-8 text-primary-600" />,
    title: { en: "Customer-Centric", sw: "Mteja Kwanza" },
    description: {
      en: "Our Client first—always",
      sw: "Mteja wetu kwanza—daima"
    }
  }
];

const teamMembers = [
  {
    name: "Juma Mwamba",
    role: { en: "Founder & CEO", sw: "Mwanzilishi na Mkurugenzi Mtendaji" },
    bio: {
      en: "With 25+ years in agricultural machinery, Juma leads our strategic vision",
      sw: "Akiwa na uzoefu wa zaidi ya miaka 25 katika mashine za kilimo, Juma anaongoza maono yetu ya kimkakati"
    },
    image: "/team-juma.jpg"
  },
  // Add 2-3 more team members
];

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} bg-white`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display`}>
              {aboutContent.title[language]}
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-sans`}>
              {aboutContent.subtitle[language]}
            </p>
          </Fade>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Fade direction="left" triggerOnce>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-primary-100 mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className={`text-2xl font-bold text-gray-900 mb-4 font-display`}>
                  {aboutContent.missionTitle[language]}
                </h2>
                <p className={`text-gray-700 text-lg font-sans`}>
                  {aboutContent.missionText[language]}
                </p>
              </div>
            </Fade>

            <Fade direction="right" triggerOnce>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-primary-100 mb-4 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className={`text-2xl font-bold text-gray-900 mb-4 font-display`}>
                  {aboutContent.visionTitle[language]}
                </h2>
                <p className={`text-gray-700 text-lg font-sans`}>
                  {aboutContent.visionText[language]}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className={`text-3xl font-bold text-gray-900 mb-4 font-display`}>
                {aboutContent.storyTitle[language]}
              </h2>
              <p className={`text-gray-700 text-lg font-sans`}>
                {aboutContent.storyText[language]}
              </p>
            </div>
          </Fade>

          {/* Timeline could be added here */}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold text-gray-900 mb-4 font-display`}>
                {aboutContent.valuesTitle[language]}
              </h2>
            </div>
          </Fade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                    {value.title[language]}
                  </h3>
                  <p className="text-gray-700">
                    {value.description[language]}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold text-gray-900 mb-4 font-display`}>
                {aboutContent.teamTitle[language]}
              </h2>
            </div>
          </Fade>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-1 font-display`}>
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role[language]}
                    </p>
                    <p className="text-gray-700">
                      {member.bio[language]}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <Fade direction="up" triggerOnce>
            <div className="max-w-3xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 font-display`}>
                {aboutContent.ctaTitle[language]}
              </h2>
              <p className="text-xl mb-8">
                {aboutContent.ctaText[language]}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-white text-primary-700 hover:bg-gray-100 rounded-lg font-bold"
                >
                  {language === 'en' ? 'View Our Products' : 'Tazama Bidhaa Zetu'}
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold"
                >
                  {language === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}