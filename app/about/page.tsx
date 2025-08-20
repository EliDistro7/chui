'use client'

import { useState } from 'react';
import { Battery, Zap, Shield, Globe, Award, Star, Target, ChevronDown, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const aboutContent = {
  title: {
    en: "The CHUI Power Story",
    sw: "Historia ya Nguvu ya CHUI"
  },
  subtitle: {
    en: "Engineering reliable power solutions that keep Tanzania moving forward",
    sw: "Kujenga suluhisho za kuaminika za nguvu zinazoendesha Tanzania mbele"
  },
  missionTitle: {
    en: "Our Mission",
    sw: "Dhamira Yetu"
  },
  missionText: {
    en: "To deliver premium maintenance-free batteries that power Tanzania's growth, providing reliable energy solutions with German engineering standards while supporting local communities and sustainable development.",
    sw: "Kutoa betri bora zisizohitaji ukarabati zinazoendesha ukuaji wa Tanzania, kutoa suluhisho za kuaminika za nishati kwa viwango vya uhandisi wa Kijerumani huku tukiunga mkono jamii za mitaa na maendeleo endelevu."
  },
  visionTitle: {
    en: "Our Vision",
    sw: "Maono Yetu"
  },
  visionText: {
    en: "To become East Africa's most trusted battery brand, setting the standard for quality, durability, and innovation while empowering every journey from personal transportation to industrial applications.",
    sw: "Kuwa chapa ya betri inayoaminika zaidi Afrika Mashariki, kuweka kiwango cha ubora, kudumu, na ubunifu huku tukiwezesha kila safari kutoka usafiri wa kibinafsi hadi matumizi ya viwandani."
  },
  storyTitle: {
    en: "Our Journey",
    sw: "Safari Yetu"
  },
  storyText: {
    en: "Born from a deep understanding of Tanzania's unique power challenges, CHUI emerged as more than just a battery manufacturer. We are power enablers, reliability engineers, and guardians of quality. Every CHUI battery represents years of research into local climate conditions, road challenges, and energy demands.",
    sw: "Kuzaliwa kutoka uelewa wa kina wa changamoto za kipekee za nguvu za Tanzania, CHUI ilitokea kama zaidi ya mtengenezaji wa betri tu. Sisi ni wezesha wa nguvu, wahandisi wa kuaminika, na walinzi wa ubora. Kila betri ya CHUI inawakilisha miaka ya utafiti katika mazingira ya hali ya hewa ya mitaa, changamoto za barabara, na mahitaji ya nishati."
  },
  valuesTitle: {
    en: "Our Core Values",
    sw: "Maadili Yetu ya Msingi"
  },
  teamTitle: {
    en: "Meet Our Power Leaders",
    sw: "Kutana na Viongozi wetu wa Nguvu"
  },
  ctaTitle: {
    en: "Ready to power your journey?",
    sw: "Tayari kuendesha safari yako?"
  },
  ctaText: {
    en: "Experience the CHUI difference and never worry about power again",
    sw: "Pata uzoefu wa tofauti ya CHUI na usijali kuhusu nguvu tena"
  }
};

const values = [
  {
    icon: <Battery className="w-7 h-7" />,
    title: { en: "German Engineering", sw: "Uhandisi wa Kijerumani" },
    description: {
      en: "Advanced technology and precision manufacturing ensuring superior performance and longevity",
      sw: "Teknolojia ya hali ya juu na utengenezaji wa usahihi kuhakikisha utendaji bora na kudumu"
    },
    gradient: "from-blue-400 via-blue-500 to-cyan-500"
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: { en: "Maintenance Free", sw: "Haitaji Ukarabati" },
    description: {
      en: "Zero maintenance design with sealed technology for hassle-free, long-lasting power",
      sw: "Muundo usihitaji ukarabati na teknolojia iliyofungwa kwa nguvu ya muda mrefu bila wasiwasi"
    },
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: { en: "Proven Durability", sw: "Kudumu Kuliloonyeshwa" },
    description: {
      en: "Built to withstand Tanzania's challenging climate with extended warranty coverage",
      sw: "Imetengenezwa kustahimili hali ngumu ya hewa ya Tanzania na uhakikisho wa muda mrefu"
    },
    gradient: "from-orange-400 via-red-400 to-pink-500"
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: { en: "Local Understanding", sw: "Uelewa wa Kienyeji" },
    description: {
      en: "Designed specifically for East African conditions with local support networks",
      sw: "Imeundwa maalum kwa mazingira ya Afrika Mashariki na mitandao ya usaidizi wa kieneo"
    },
    gradient: "from-purple-400 via-violet-500 to-indigo-500"
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: { en: "Community Focus", sw: "Mkazo wa Jamii" },
    description: {
      en: "Supporting local dealerships and creating opportunities across Tanzania",
      sw: "Kuunga mkono madalali wa kieneo na kuunda fursa kote Tanzania"
    },
    gradient: "from-teal-400 via-cyan-500 to-blue-500"
  }
];

const teamMembers = [
  {
    name: "Eng. Michael Swai",
    role: { en: "Founder & Chief Engineer", sw: "Mwanzilishi na Mkuu wa Uhandisi" },
    bio: {
      en: "Leading CHUI's technical innovation with 15+ years in automotive power solutions and German engineering expertise",
      sw: "Kuongoza ubunifu wa kiufundi wa CHUI na uzoefu wa zaidi ya miaka 15 katika suluhisho za nguvu za magari na utaalam wa uhandisi wa Kijerumani"
    },
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Dr. Grace Kimaro",
    role: { en: "Director of Quality", sw: "Mkurugenzi wa Ubora" },
    bio: {
      en: "Ensuring every CHUI battery meets international standards through rigorous testing and quality control processes",
      sw: "Kuhakikisha kila betri ya CHUI inakidhi viwango vya kimataifa kupitia majaribio makali na mchakato wa udhibiti wa ubora"
    },
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "Joseph Mwanga", 
    role: { en: "National Sales Director", sw: "Mkurugenzi wa Mauzo wa Kitaifa" },
    bio: {
      en: "Building nationwide dealer networks and ensuring CHUI batteries are accessible across Tanzania's diverse markets",
      sw: "Kujenga mitandao ya madalali kote nchini na kuhakikisha betri za CHUI zinapatikana katika masoko mbalimbali ya Tanzania"
    },
    gradient: "from-orange-500 to-red-500"
  }
];

const stats = [
  { 
    number: "12", 
    label: { en: "Battery Models", sw: "Mifano ya Betri" },
    suffix: ""
  },
  { 
    number: "50", 
    label: { en: "Dealer Network", sw: "Mtandao wa Madalali" },
    suffix: "K+"
  },
  { 
    number: "24", 
    label: { en: "Months Warranty", sw: "Miezi ya Uhakikisho" },
    suffix: ""
  },
  { 
    number: "99.5", 
    label: { en: "Reliability Rate", sw: "Kiwango cha Kuaminika" },
    suffix: "%"
  }
];

const batteryTypes = [
  { 
    name: 'N50MF', 
    capacity: '50AH', 
    color: 'from-blue-400 to-blue-600',
    icon: '🚗',
    usage: { en: 'Compact Cars', sw: 'Magari Madogo' }
  },
  { 
    name: 'N70MF', 
    capacity: '70AH', 
    color: 'from-green-400 to-green-600',
    icon: '🚙',
    usage: { en: 'SUVs & Pickups', sw: 'SUV na Pikap' }
  },
  { 
    name: 'N100MF', 
    capacity: '100AH', 
    color: 'from-orange-400 to-orange-600',
    icon: '🚚',
    usage: { en: 'Commercial', sw: 'Kibiashara' }
  },
  { 
    name: 'N150MF', 
    capacity: '150AH', 
    color: 'from-red-400 to-red-600',
    icon: '🏭',
    usage: { en: 'Industrial', sw: 'Viwanda' }
  },
  { 
    name: 'N200MF', 
    capacity: '200AH', 
    color: 'from-purple-400 to-purple-600',
    icon: '⚡',
    usage: { en: 'Heavy Duty', sw: 'Kazi Nzito' }
  }
];

export default function CHUIAboutPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {['🔋', '⚡', '🔌', '⚙️', '✨', '💬', '⭐', '🎯', '🏭', '🚗', '🌟', '⚡'][i % 12]}
            </div>
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
                <Battery className="w-4 h-4 mr-2" />
                {language === 'en' ? 'About CHUI Power' : 'Kuhusu Nguvu ya CHUI'}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {aboutContent.title[language]}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
              {aboutContent.subtitle[language]}
            </p>

            <div className="mt-12">
              <div className="inline-flex items-center text-white/60 cursor-pointer animate-bounce">
                <span className="text-sm font-medium mr-2">
                  {language === 'en' ? 'Discover More' : 'Gundua Zaidi'}
                </span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-y border-yellow-400/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-yellow-400">
                  {stat.number}
                  <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {aboutContent.missionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-white/80 leading-relaxed">
                  {aboutContent.missionText[language]}
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {aboutContent.visionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-white/80 leading-relaxed">
                  {aboutContent.visionText[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {aboutContent.storyTitle[language]}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-12"></div>
            </div>

            <div className="prose prose-xl max-w-none">
              <p className="text-xl text-white/80 leading-relaxed text-center">
                {aboutContent.storyText[language]}
              </p>
            </div>

            {/* Battery Types */}
            <div className="grid grid-cols-5 gap-8 mt-20 max-w-4xl mx-auto">
              {batteryTypes.map((battery, index) => (
                <div key={index} className="text-center group cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${battery.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className="text-3xl">{battery.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wide block">
                    {battery.name}
                  </span>
                  <span className="text-xs text-white/60">
                    {battery.usage[language]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutContent.valuesTitle[language]}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 h-full group-hover:shadow-xl group-hover:border-yellow-400/50 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title[language]}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {value.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutContent.teamTitle[language]}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'The engineering minds and industry experts driving CHUI\'s power innovation'
                : 'Akili za uhandisi na wataalamu wa tasnia wanaoongoza ubunifu wa nguvu ya CHUI'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/20 group-hover:shadow-xl group-hover:border-yellow-400/50 transition-all duration-500">
                  <div className={`h-80 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto border border-white/20 flex items-center justify-center">
                        <Battery className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 font-bold mb-4 uppercase tracking-wide text-sm">
                      {member.role[language]}
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {member.bio[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-y border-yellow-400/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutContent.ctaTitle[language]}
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              {aboutContent.ctaText[language]}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Battery className="mr-2 w-5 h-5" />
                <span>{language === 'en' ? 'Shop Batteries' : 'Nunua Betri'}</span>
                <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </button>
              <button className="group inline-flex items-center px-10 py-4 border-2 border-white/30 hover:border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                <Globe className="mr-2 w-5 h-5" />
                {language === 'en' ? 'Find Dealers' : 'Tafuta Madalali'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🔋</div>
            <h3 className="text-2xl font-bold mb-2">CHUI Batteries</h3>
            <p className="text-white/60">
              {language === 'en' ? 'Powering Tanzania\'s Future' : 'Kuendesha Mustakabali wa Tanzania'}
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60">
              © 2024 CHUI Batteries. {language === 'en' ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}