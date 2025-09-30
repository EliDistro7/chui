'use client'

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube, Battery, Star, Zap, Shield } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const contactContent = {
  title: {
    en: "Power Your Inquiry",
    sw: "Endesha Swali Lako"
  },
  subtitle: {
    en: "Need reliable power solutions? Our battery experts are ready to help you find the perfect CHUI battery!",
    sw: "Unahitaji suluhisho za kuaminika za nguvu? Wataalamu wetu wa betri wako tayari kukusaidia kupata betri kamili ya CHUI!"
  },
  contactInfo: {
    en: "Contact Information", 
    sw: "Maelezo ya Mawasiliano"
  },
  formTitle: {
    en: "Get Battery Support",
    sw: "Pata Msaada wa Betri"
  },
  formSubtitle: {
    en: "Our power specialists respond within 2 hours during business hours!",
    sw: "Wataalamu wetu wa nguvu wanajibu ndani ya masaa 2 wakati wa kazi!"
  },
  tagline: {
    en: "Powering Tanzania's future, one battery at a time!",
    sw: "Kuendesha mustakabali wa Tanzania, betri moja kwa wakati!"
  }
};

// Contact Form Component
const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', batteryModel: '', vehicleType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(language === 'en' ? 'Thank you for contacting CHUI! Our power specialists will get back to you within 2 hours!' : 'Asante kwa kuwasiliana na CHUI! Wataalamu wetu wa nguvu watakurudishia jibu ndani ya masaa 2!');
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text" required
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-white/60"
          placeholder={language === 'en' ? 'Your Name' : 'Jina Lako'}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email" required
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-white/60"
          placeholder={language === 'en' ? 'Email Address' : 'Barua Pepe'}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="tel"
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-white/60"
          placeholder={language === 'en' ? 'Phone Number' : 'Nambari ya Simu'}
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <select
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white"
          value={formData.vehicleType}
          onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
        >
          <option value="" className="bg-slate-800">{language === 'en' ? 'Vehicle Type' : 'Aina ya Gari'}</option>
          <option value="car" className="bg-slate-800">{language === 'en' ? 'Personal Car' : 'Gari la Kibinafsi'}</option>
          <option value="suv" className="bg-slate-800">{language === 'en' ? 'SUV/Pickup' : 'SUV/Pikap'}</option>
          <option value="truck" className="bg-slate-800">{language === 'en' ? 'Truck/Commercial' : 'Lori/Kibiashara'}</option>
          <option value="industrial" className="bg-slate-800">{language === 'en' ? 'Industrial Equipment' : 'Vifaa vya Viwanda'}</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-white/60"
          placeholder={language === 'en' ? 'Battery Model (e.g., N70MF)' : 'Mfano wa Betri (mfano, N70MF)'}
          value={formData.batteryModel}
          onChange={(e) => setFormData({...formData, batteryModel: e.target.value})}
        />
        <select
          required
          className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
        >
          <option value="" className="bg-slate-800">{language === 'en' ? 'Select inquiry type' : 'Chagua aina ya swali'}</option>
          <option value="recommendation" className="bg-slate-800">{language === 'en' ? 'Battery Recommendation' : 'Mapendekezo ya Betri'}</option>
          <option value="technical" className="bg-slate-800">{language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}</option>
          <option value="warranty" className="bg-slate-800">{language === 'en' ? 'Warranty Claim' : 'Dai la Uhakikisho'}</option>
          <option value="dealer" className="bg-slate-800">{language === 'en' ? 'Become a Dealer' : 'Kuwa Mddalali'}</option>
        </select>
      </div>

      <textarea
        required rows={5}
        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 resize-none text-white placeholder-white/60"
        placeholder={language === 'en' ? 'Describe your power needs or question...' : 'Eleza mahitaji yako ya nguvu au swali...'}
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
      >
        <Send className="w-5 h-5" />
        {language === 'en' ? 'Send Inquiry' : 'Tuma Swali'} ⚡
      </button>
    </div>
  );
};

export default function CHUIContactPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {['🔋', '⚡', '🔌', '✨', '💬', '⭐', '🎯', '📞'][i % 8]}
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
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
              <Battery className="w-4 h-4 mr-2" />
              CHUI Power Support
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {contactContent.title[language]}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {contactContent.subtitle[language]}
          </p>
          
          <div className="mt-8 flex items-center justify-center text-white/80">
            <Zap className="w-5 h-5 mr-2 animate-pulse text-yellow-400" />
            <span className="text-lg font-medium italic">
              {contactContent.tagline[language]}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  {contactContent.contactInfo[language]}
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {language === 'en' ? 'Visit Our Battery Center' : 'Tembelea Kituo Chetu cha Betri'}
                        </h3>
                        <p className="text-white/80 text-lg">
                          Nyerere Road, Industrial Area, Dar es Salaam, Tanzania
                        </p>
                        <p className="text-yellow-400 mt-2 font-medium">
                          {language === 'en' ? 'Battery testing & installation services available!' : 'Huduma za upimaji na usakinishaji wa betri zinapatikana!'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {language === 'en' ? 'Call Our Experts' : 'Piga Wataalamu Wetu'}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-white/60 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}
                            </p>
                            <a href="tel:+255789012345" className="text-lg text-white/80 hover:text-yellow-400 transition-colors font-medium">
                              +255 789 012 345
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-white/60 font-medium uppercase tracking-wide">
                              {language === 'en' ? '24/7 Emergency Support' : 'Msaada wa Dharura 24/7'}
                            </p>
                            <a href="tel:+255123456789" className="text-lg text-orange-400 hover:text-orange-300 transition-colors font-bold">
                              +255 123 456 789
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {language === 'en' ? 'Email Support' : 'Msaada wa Barua Pepe'}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-white/60 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'General Inquiries' : 'Maswali ya Jumla'}
                            </p>
                            <a href="mailto:info@chuibatteries.co.tz" className="text-lg text-white/80 hover:text-yellow-400 transition-colors font-medium">
                              info@chuibatteries.co.tz
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-white/60 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'Warranty & Claims' : 'Uhakikisho na Madai'}
                            </p>
                            <a href="mailto:info@chuibatteries.com" className="text-lg text-white/80 hover:text-orange-400 transition-colors font-medium">
                              warranty@chuibatteries.co.tz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group hover:bg-white/10 hover:backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {language === 'en' ? 'Service Hours' : 'Masaa ya Huduma'}
                        </h3>
                        <p className="text-lg text-white/80 whitespace-pre-line leading-relaxed">
                          {language === 'en' 
                            ? "Mon-Fri: 7:30 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: 9:00 AM - 2:00 PM"
                            : "Jumatatu-Ijumaa: 7:30 asubuhi - 6:00 jioni\nJumamosi: 8:00 asubuhi - 4:00 jioni\nJumapili: 9:00 asubuhi - 2:00 jioni"}
                        </p>
                        <p className="text-green-400 mt-2 font-medium flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          {language === 'en' ? 'Emergency support available 24/7' : 'Msaada wa dharura unapatikana masaa 24'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">
                      {contactContent.formTitle[language]}
                    </h2>
                  </div>
                  <p className="text-white/80 text-lg">
                    {contactContent.formSubtitle[language]}
                  </p>
                </div>

                <ContactForm language={language} />

                <div className="mt-10 pt-8 border-t border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Battery className="w-6 h-6 text-yellow-400" />
                    {language === 'en' ? 'Follow Our Power Journey' : 'Tufuate Katika Safari ya Nguvu'}
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30">
                    <p className="text-center text-yellow-400 font-medium italic">
                      &quot;CHUI - The Power Leader&quot; - {contactContent.tagline[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-y border-orange-500/30">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-4">🔋</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' 
              ? 'Need immediate battery support?' 
              : 'Unahitaji msaada wa haraka wa betri?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Visit our service center or call for emergency roadside assistance!' 
              : 'Tembelea kituo chetu cha huduma au piga simu kwa msaada wa dharura wa barabarani!'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              {language === 'en' ? 'Call Emergency Support' : 'Piga Msaada wa Dharura'}
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              {language === 'en' ? 'Visit Service Center' : 'Tembelea Kituo cha Huduma'}
            </button>
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
              {language === 'en' ? 'Powering Tanzania\'s Future' : 'Powering Tanzania\'s Future'}
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