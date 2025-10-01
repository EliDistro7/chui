'use client';
import { Battery, Zap, Award, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CHUIAboutSection() {
    const { language } = useLanguage();
  const content = {
    badge: {
      en: 'About CHUI Power',
      sw: 'Kuhusu Nguvu ya CHUI'
    },
    title: {
      en: 'Engineering Power Solutions for Tanzania',
      sw: 'Uhandisi wa Suluhisho za Nguvu kwa Tanzania'
    },
    description: {
      en: 'CHUI delivers premium maintenance-free batteries with German engineering standards, specifically designed for East African conditions. With over 15 years of expertise in automotive power solutions, we power Tanzania\'s growth through reliable energy that keeps the nation moving.',
      sw: 'CHUI inatoa betri bora zisizohitaji ukarabati kwa viwango vya uhandisi wa Kijerumani, zilizotengenezwa maalum kwa mazingira ya Afrika Mashariki. Na uzoefu wa zaidi ya miaka 15 katika suluhisho za nguvu za magari, tunaendesha ukuaji wa Tanzania kupitia nishati ya kuaminika inayoendesha taifa.'
    },
    ceoName: 'Comrade Mpandilah',
    ceoTitle: {
      en: 'Founder & CEO',
      sw: 'Mwanzilishi na Mkurugenzi'
    },
    ceoQuote: {
      en: '"Every CHUI battery represents our commitment to quality, reliability, and Tanzania\'s progress."',
      sw: '"Kila betri ya CHUI inawakilisha kujitolea kwetu kwa ubora, kuaminika, na maendeleo ya Tanzania."'
    },
    stats: [
      {
        icon: <Battery className="w-5 h-5" />,
        number: '12',
        label: { en: 'Battery Models', sw: 'Mifano ya Betri' }
      },
      {
        icon: <Award className="w-5 h-5" />,
        number: '24',
        suffix: 'mo',
        label: { en: 'Warranty', sw: 'Uhakikisho' }
      },
      {
        icon: <Shield className="w-5 h-5" />,
        number: '99.5',
        suffix: '%',
        label: { en: 'Reliability', sw: 'Kuaminika' }
      }
    ],
    learnMore: {
      en: 'Learn More About Us',
      sw: 'Jifunze Zaidi Kuhusu Sisi'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['⚡', '🔋', '✨', '⭐'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-pulse"
            style={{
              left: `${20 + i * 25}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/20">
              <Battery className="w-4 h-4 mr-2" />
              {content.badge[language]}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {content.title[language]}
              </h2>

              <p className="text-lg text-white/80 leading-relaxed">
                {content.description[language]}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2 text-yellow-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                      {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
                    </div>
                    <div className="text-xs text-white/60 font-medium uppercase tracking-wide">
                      {stat.label[language]}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span>{content.learnMore[language]}</span>
                  <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
                </a>
              </div>
            </div>

            {/* Right: CEO Card */}
            <div className="relative">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 group-hover:shadow-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-96 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src="/chui.png" 
                      alt={content.ceoName}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Badge on Image */}
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        15+ {language === 'en' ? 'Years' : 'Miaka'}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {content.ceoName}
                    </h3>
                    <p className="text-yellow-400 font-bold mb-6 uppercase tracking-wide text-sm">
                      {content.ceoTitle[language]}
                    </p>
                    
                    {/* Quote */}
                    <div className="relative">
                      <div className="absolute -left-2 -top-2 text-6xl text-yellow-400/20 font-serif">"</div>
                      <p className="text-white/90 italic leading-relaxed pl-6">
                        {content.ceoQuote[language]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}