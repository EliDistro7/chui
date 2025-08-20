'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Shield, Globe, Truck, Award, Sparkles, Star, Target, ChevronDown, Factory, Wrench, Users, TrendingUp } from 'lucide-react';

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
    en: "Born from a deep understanding of Tanzania's unique power challenges, CHUI emerged as more than just a battery manufacturer. We are power enablers, reliability engineers, and guardians of quality. Every CHUI battery represents years of research into local climate conditions, road challenges, and energy demands. From our flagship N50MF compact batteries perfect for city driving to our industrial-grade N200MF ultra batteries that power heavy machinery, each CHUI product is engineered for Tanzania's demanding environment. We believe that reliable power doesn't just start engines—it drives economic growth, connects communities, and builds the foundation for a prosperous future.",
    sw: "Kuzaliwa kutoka uelewa wa kina wa changamoto za kipekee za nguvu za Tanzania, CHUI ilitokea kama zaidi ya mtengenezaji wa betri tu. Sisi ni wezesha wa nguvu, wahandisi wa kuaminika, na walinzi wa ubora. Kila betri ya CHUI inawakilisha miaka ya utafiti katika mazingira ya hali ya hewa ya mitaa, changamoto za barabara, na mahitaji ya nishati. Kutoka betri zetu kuu za N50MF ndogo zinazofaa kwa uendeshaji wa jijini hadi betri zetu za kiwango cha viwanda za N200MF zinazoendesha mashine nzito, kila bidhaa ya CHUI imetengenezwa kwa mazingira magumu ya Tanzania. Tunaamini kwamba nguvu za kuaminika haziwashi injini tu—huendesha ukuaji wa kiuchumi, huunganisha jamii, na kujenga msingi wa mustakabali wenye mafanikio."
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function CHUIAboutPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                <Battery className="w-4 h-4 mr-2" />
                {language === 'en' ? 'About CHUI Power' : 'Kuhusu Nguvu ya CHUI'}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-tight drop-shadow-lg"
            >
              {aboutContent.title[language]}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed font-medium"
            >
              {aboutContent.subtitle[language]}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <motion.div 
                className="inline-flex items-center text-white/60 cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-medium mr-2">
                  {language === 'en' ? 'Discover More' : 'Gundua Zaidi'}
                </span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center text-white"
              >
                <motion.div 
                  className="text-5xl md:text-7xl font-display font-black mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                  <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </motion.div>
                <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                  {stat.label[language]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-black text-slate-900">
                    {aboutContent.missionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {aboutContent.missionText[language]}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-black text-slate-900">
                    {aboutContent.visionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {aboutContent.visionText[language]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-white relative">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8">
                {aboutContent.storyTitle[language]}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-xl max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed text-center">
                {aboutContent.storyText[language]}
              </p>
            </motion.div>

            {/* Battery Types */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-5 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {batteryTypes.map((battery, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${battery.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className="text-3xl">{battery.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-600 uppercase tracking-wide block">
                    {battery.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {battery.usage[language]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8"
            >
              {aboutContent.valuesTitle[language]}
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 h-full group-hover:shadow-layer transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-4">
                    {value.title[language]}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8"
            >
              {aboutContent.teamTitle[language]}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              {language === 'en' 
                ? 'The engineering minds and industry experts driving CHUI\'s power innovation'
                : 'Akili za uhandisi na wataalamu wa tasnia wanaoongoza ubunifu wa nguvu ya CHUI'}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 group-hover:shadow-layer transition-all duration-500">
                  <div className={`h-80 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto border border-white/20 flex items-center justify-center">
                        <Battery className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-black text-slate-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-bold mb-4 uppercase tracking-wide text-sm">
                      {member.role[language]}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {member.bio[language]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-display font-black text-white mb-8"
            >
              {aboutContent.ctaTitle[language]}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/90 mb-12 leading-relaxed"
            >
              {aboutContent.ctaText[language]}
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.a
                href="/products"
                className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-display font-black text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Battery className="mr-2 w-5 h-5" />
                <span>{language === 'en' ? 'Shop Batteries' : 'Nunua Betri'}</span>
                <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </motion.a>
              <motion.a
                href="/dealers"
                className="group inline-flex items-center px-10 py-4 border-2 border-white text-white rounded-2xl font-display font-black text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="mr-2 w-5 h-5" />
                {language === 'en' ? 'Find Dealers' : 'Tafuta Madalali'}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}