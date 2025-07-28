'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Leaf, Globe, Truck, Shield, Sparkles, Award, Heart, Star, Target, Zap, ArrowRight, ChevronDown } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';


const aboutContent = {
  title: {
    en: "The TAM TAM Story",
    sw: "Historia ya TAM TAM"
  },
  subtitle: {
    en: "Crafting extraordinary snack experiences that bring joy to every moment",
    sw: "Kuunda uzoefu wa ajabu wa vitafunio unaoleta furaha katika kila wakati"
  },
  missionTitle: {
    en: "Our Mission",
    sw: "Dhamira Yetu"
  },
  missionText: {
    en: "To create premium snacks that transcend ordinary taste experiences, bringing communities together through innovative flavors that celebrate life's finest moments while maintaining uncompromising quality standards.",
    sw: "Kuunda vitafunio vya hali ya juu vinavyopita uzoefu wa kawaida wa ladha, vikileta pamoja jamii kupitia ladha za ubunifu zinazosherehekea nyakati bora zaidi za maisha huku tukishikilia viwango visivyokubali ya ubora."
  },
  visionTitle: {
    en: "Our Vision",
    sw: "Maono Yetu"
  },
  visionText: {
    en: "To become East Africa's most innovative snack brand, setting new standards for taste, quality, and sustainability while inspiring moments of pure joy across generations.",
    sw: "Kuwa chapa ya vitafunio yenye ubunifu zaidi Afrika Mashariki, kuweka viwango vipya vya ladha, ubora, na uendelevu huku tukihamasisha nyakati za furaha safi kote vizazi."
  },
  storyTitle: {
    en: "Our Journey",
    sw: "Safari Yetu"
  },
  storyText: {
    en: "Born from a passion for perfection and a deep understanding of what makes moments special, TAM TAM emerged as more than just a snack brand. We are curators of taste, architects of joy, and guardians of quality. Every product in our collection represents countless hours of innovation, testing, and refinement. From our signature golden Cheese Balls that deliver the perfect crunch to our luxurious Chocolate range that melts beautifully on the tongue, each TAM TAM creation is a testament to our commitment to excellence. We believe that great snacks don't just satisfy hunger—they create memories, spark conversations, and bring people together.",
    sw: "Kuzaliwa kutoka shauku ya ukamilifu na uelewa wa kina wa kile kinachofanya nyakati kuwa maalum, TAM TAM ilitokea kama zaidi ya chapa ya vitafunio tu. Sisi ni wakusanya wa ladha, wajenzi wa furaha, na walinzi wa ubora. Kila bidhaa katika mkusanyiko wetu inawakilisha masaa yasiyo na hesabu ya ubunifu, majaribio, na uborefu. Kutoka kwa Cheese Balls zetu za dhahabu zinazotoa kigumu kamili hadi safu yetu ya anasa ya Chokoleti inayoyeyuka vizuri ulimini, kila uumbaji wa TAM TAM ni ushahidi wa kujitolea kwetu kwa ubora. Tunaamini kwamba vitafunio vizuri haviridhishi njaa tu—huunda kumbukumbu, huchochea mazungumzo, na huleta watu pamoja."
  },
  valuesTitle: {
    en: "Our Core Values",
    sw: "Maadili Yetu ya Msingi"
  },
  teamTitle: {
    en: "Meet Our Visionaries",
    sw: "Kutana na Wenye Maono Wetu"
  },
  ctaTitle: {
    en: "Ready to experience the extraordinary?",
    sw: "Tayari kupata uzoefu wa ajabu?"
  },
  ctaText: {
    en: "Discover the TAM TAM difference and elevate your snacking experience",
    sw: "Gundua tofauti ya TAM TAM na uinue uzoefu wako wa kula vitafunio"
  }
};

const values = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: { en: "Relentless Innovation", sw: "Ubunifu Usiopungua" },
    description: {
      en: "Pioneering breakthrough flavors and textures that redefine snacking experiences",
      sw: "Kuongoza mstari katika ladha na miundo inayofafanua upya uzoefu wa vitafunio"
    },
    gradient: "from-primary-400 via-primary-500 to-secondary-500"
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: { en: "Uncompromising Excellence", sw: "Ubora Usiopendelea" },
    description: {
      en: "Setting industry benchmarks through meticulous attention to every detail",
      sw: "Kuweka viwango vya sekta kupitia umakini mkubwa kwa kila undani"
    },
    gradient: "from-secondary-400 via-accent-400 to-accent-500"
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: { en: "Passionate Craftsmanship", sw: "Ufundi wa Shauku" },
    description: {
      en: "Every product is meticulously crafted with love, precision, and artistry",
      sw: "Kila bidhaa inatengenezwa kwa umakini na upendo, usahihi, na usanifu"
    },
    gradient: "from-accent-400 via-primary-400 to-secondary-400"
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: { en: "Sustainable Future", sw: "Mustakabali Endelevu" },
    description: {
      en: "Building a responsible legacy through eco-conscious practices and innovation",
      sw: "Kujenga urithi wenye uwajibikaji kupitia mazoea na ubunifu unaohifadhi mazingira"
    },
    gradient: "from-success-400 via-info-400 to-primary-400"
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: { en: "Community Connection", sw: "Muunganiko wa Jamii" },
    description: {
      en: "Fostering meaningful relationships and shared moments of joy across communities",
      sw: "Kukuza mahusiano yenye maana na nyakati za furaha zilizoshirikishwa katika jamii"
    },
    gradient: "from-info-400 via-secondary-400 to-primary-500"
  }
];

const teamMembers = [
  {
    name: "Sarah Mwangi",
    role: { en: "Founder & Visionary", sw: "Mwanzilishi na Mwenye Maono" },
    bio: {
      en: "Transforming the snack industry through innovative leadership and unwavering commitment to excellence",
      sw: "Kubadilisha sekta ya vitafunio kupitia uongozi wa ubunifu na kujitolea bila kusita kwa ubora"
    },
    gradient: "from-primary-500 to-secondary-500"
  },
  {
    name: "Dr. James Kibua",
    role: { en: "Chief Innovation Officer", sw: "Mkuu wa Ubunifu" },
    bio: {
      en: "Leading breakthrough research in flavor science and revolutionary snack technology",
      sw: "Kuongoza utafiti wa mstari katika sayansi ya ladha na teknolojia ya mapinduzi ya vitafunio"
    },
    gradient: "from-info-500 to-primary-500"
  },
  {
    name: "Grace Massawe", 
    role: { en: "Director of Excellence", sw: "Mkurugenzi wa Ubora" },
    bio: {
      en: "Ensuring every TAM TAM product exceeds the highest international quality standards",
      sw: "Kuhakikisha kila bidhaa ya TAM TAM inazidi viwango vikuu vya kimataifa vya ubora"
    },
    gradient: "from-accent-500 to-secondary-500"
  }
];

const stats = [
  { 
    number: "7", 
    label: { en: "Premium Varieties", sw: "Aina za Hali ya Juu" },
    suffix: ""
  },
  { 
    number: "250", 
    label: { en: "Satisfied Customers", sw: "Wateja Waliorithika" },
    suffix: "K+"
  },
  { 
    number: "99.8", 
    label: { en: "Quality Score", sw: "Alama za Ubora" },
    suffix: "%"
  },
  { 
    number: "24", 
    label: { en: "Innovation Hours", sw: "Masaa ya Ubunifu" },
    suffix: "/7"
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

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"
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
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-info-200/30 rounded-full blur-3xl"
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
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                {language === 'en' ? 'About TAM TAM' : 'Kuhusu TAM TAM'}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black text-transparent bg-gradient-to-r from-neutral-900 via-primary-600 to-secondary-600 bg-clip-text mb-8 leading-tight"
            >
              {aboutContent.title[language]}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-600 max-w-5xl mx-auto leading-relaxed font-medium"
            >
              {aboutContent.subtitle[language]}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <motion.div 
                className="inline-flex items-center text-neutral-400 cursor-pointer"
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
      <section className="py-20 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
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
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-black text-neutral-900">
                    {aboutContent.missionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {aboutContent.missionText[language]}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-info-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-black text-neutral-900">
                    {aboutContent.visionTitle[language]}
                  </h2>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">
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
              <h2 className="text-5xl md:text-6xl font-display font-black text-neutral-900 mb-8">
                {aboutContent.storyTitle[language]}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-12"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-xl max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed text-center">
                {aboutContent.storyText[language]}
              </p>
            </motion.div>

            {/* Product Icons */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-5 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {[
                { emoji: '🧀', name: 'Cheese', color: 'from-yellow-400 to-orange-400' },
                { emoji: '🍫', name: 'Chocolate', color: 'from-amber-600 to-red-600' },
                { emoji: '🌾', name: 'Multigrain', color: 'from-green-400 to-yellow-400' },
                { emoji: '⭕', name: 'Rings', color: 'from-orange-400 to-red-400' },
                { emoji: '✨', name: 'Premium', color: 'from-purple-400 to-pink-400' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <span className="text-sm font-bold text-neutral-600 uppercase tracking-wide">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
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
              className="text-5xl md:text-6xl font-display font-black text-neutral-900 mb-8"
            >
              {aboutContent.valuesTitle[language]}
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"
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
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 h-full group-hover:shadow-layer transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-display font-black text-neutral-900 mb-4">
                    {value.title[language]}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
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
              className="text-5xl md:text-6xl font-display font-black text-neutral-900 mb-8"
            >
              {aboutContent.teamTitle[language]}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              {language === 'en' 
                ? 'The extraordinary minds behind TAM TAM\'s revolutionary approach to snacking'
                : 'Akili za kipekee nyuma ya mbinu ya mapinduzi ya TAM TAM ya vitafunio'}
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
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-neutral-100 group-hover:shadow-layer transition-all duration-500">
                  <div className={`h-80 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto border border-white/20"></div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-black text-neutral-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-bold mb-4 uppercase tracking-wide text-sm">
                      {member.role[language]}
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
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
      <section className="py-32 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
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
                className="group inline-flex items-center px-10 py-4 bg-white text-primary-600 rounded-2xl font-display font-black text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{language === 'en' ? 'Explore Our Collection' : 'Chunguza Mkusanyiko Wetu'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/contact"
                className="group inline-flex items-center px-10 py-4 border-2 border-white text-white rounded-2xl font-display font-black text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Connect With Us' : 'Unganisha Nasi'}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}