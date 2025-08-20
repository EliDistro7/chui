'use client'

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube, Battery, Star, Zap, MessageCircle, MapIcon, Shield, Wrench, Users, Globe } from 'lucide-react';

// Mock language context since we don't have the actual context
const useLanguage = () => ({ language: 'en' });

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
  visitUs: {
    en: "Visit Our Battery Center",
    sw: "Tembelea Kituo Chetu cha Betri"
  },
  address: {
    en: "Nyerere Road, Industrial Area, Dar es Salaam, Tanzania",
    sw: "Barabara ya Nyerere, Eneo la Viwanda, Dar es Salaam, Tanzania"
  },
  hoursTitle: {
    en: "Service Hours",
    sw: "Masaa ya Huduma"
  },
  hours: {
    en: "Mon-Fri: 7:30 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: 9:00 AM - 2:00 PM",
    sw: "Jumatatu-Ijumaa: 7:30 asubuhi - 6:00 jioni\nJumamosi: 8:00 asubuhi - 4:00 jioni\nJumapili: 9:00 asubuhi - 2:00 jioni"
  },
  formTitle: {
    en: "Get Battery Support",
    sw: "Pata Msaada wa Betri"
  },
  formSubtitle: {
    en: "Our power specialists respond within 2 hours during business hours!",
    sw: "Wataalamu wetu wa nguvu wanajibu ndani ya masaa 2 wakati wa kazi!"
  },
  technicalSupport: {
    en: "Technical Support",
    sw: "Msaada wa Kiufundi"
  },
  dealerInquiries: {
    en: "Dealer Inquiries",
    sw: "Mahojiano ya Madalali"
  },
  followUs: {
    en: "Follow Our Power Journey",
    sw: "Tufuate Katika Safari ya Nguvu"
  },
  tagline: {
    en: "Powering Tanzania's future, one battery at a time!",
    sw: "Kuendesha mustakabali wa Tanzania, betri moja kwa wakati!"
  },
  emergencySupport: {
    en: "24/7 Emergency Support",
    sw: "Msaada wa Dharura 24/7"
  },
  warrantySupport: {
    en: "Warranty & Claims",
    sw: "Uhakikisho na Madai"
  }
};

// Contact Form Component
const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    batteryModel: '',
    vehicleType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(language === 'en' ? 'Thank you for contacting CHUI! Our power specialists will get back to you within 2 hours!' : 'Asante kwa kuwasiliana na CHUI! Wataalamu wetu wa nguvu watakurudishia jibu ndani ya masaa 2!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Your Name' : 'Jina Lako'}
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder={language === 'en' ? 'Enter your full name' : 'Weka jina lako kamili'}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Email Address' : 'Barua Pepe'}
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder={language === 'en' ? 'your@email.com' : 'barua@pepe.com'}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Phone Number' : 'Nambari ya Simu'}
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder="+255 XXX XXX XXX"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Vehicle Type' : 'Aina ya Gari'}
          </label>
          <select
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={formData.vehicleType}
            onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
          >
            <option value="">
              {language === 'en' ? 'Select vehicle type' : 'Chagua aina ya gari'}
            </option>
            <option value="car">
              {language === 'en' ? 'Personal Car' : 'Gari la Kibinafsi'}
            </option>
            <option value="suv">
              {language === 'en' ? 'SUV/Pickup' : 'SUV/Pikap'}
            </option>
            <option value="truck">
              {language === 'en' ? 'Truck/Commercial' : 'Lori/Kibiashara'}
            </option>
            <option value="industrial">
              {language === 'en' ? 'Industrial Equipment' : 'Vifaa vya Viwanda'}
            </option>
            <option value="other">
              {language === 'en' ? 'Other' : 'Nyingine'}
            </option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Current Battery Model' : 'Mfano wa Betri ya Sasa'}
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder={language === 'en' ? 'e.g., N70MF, N100MF' : 'mfano, N70MF, N100MF'}
            value={formData.batteryModel}
            onChange={(e) => setFormData({...formData, batteryModel: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            {language === 'en' ? 'Subject' : 'Mada'}
          </label>
          <select
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          >
            <option value="">
              {language === 'en' ? 'Select inquiry type' : 'Chagua aina ya swali'}
            </option>
            <option value="recommendation">
              {language === 'en' ? 'Battery Recommendation' : 'Mapendekezo ya Betri'}
            </option>
            <option value="technical">
              {language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}
            </option>
            <option value="warranty">
              {language === 'en' ? 'Warranty Claim' : 'Dai la Uhakikisho'}
            </option>
            <option value="dealer">
              {language === 'en' ? 'Become a Dealer' : 'Kuwa Mddalali'}
            </option>
            <option value="bulk">
              {language === 'en' ? 'Bulk Purchase' : 'Ununuzi wa Jumla'}
            </option>
            <option value="feedback">
              {language === 'en' ? 'Product Feedback' : 'Maoni ya Bidhaa'}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {language === 'en' ? 'Message' : 'Ujumbe'}
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
          placeholder={language === 'en' ? 'Describe your power needs or question...' : 'Eleza mahitaji yako ya nguvu au swali...'}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
      >
        <Send className="w-5 h-5" />
        {language === 'en' ? 'Send Inquiry' : 'Tuma Swali'} ⚡
      </button>
    </form>
  );
};

export default function CHUIContactPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-400/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-1/5 w-14 h-14 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating Battery Icons */}
          <div className="absolute top-1/4 left-1/3 text-4xl opacity-10 animate-pulse">🔋</div>
          <div className="absolute bottom-1/3 right-1/4 text-3xl opacity-20 animate-pulse">⚡</div>
          <div className="absolute top-1/2 right-1/6 text-2xl opacity-15 animate-bounce">🔌</div>
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  {contactContent.contactInfo[language]}
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {contactContent.visitUs[language]}
                        </h3>
                        <p className="text-slate-700 text-lg">
                          {contactContent.address[language]}
                        </p>
                        <p className="text-blue-600 mt-2 font-medium">
                          {language === 'en' ? 'Battery testing & installation services available!' : 'Huduma za upimaji na usakinishaji wa betri zinapatikana!'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {language === 'en' ? 'Call Our Experts' : 'Piga Wataalamu Wetu'}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {contactContent.technicalSupport[language]}
                            </p>
                            <a href="tel:+255789012345" className="text-lg text-slate-700 hover:text-blue-600 transition-colors font-medium">
                              +255 789 012 345
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {contactContent.dealerInquiries[language]}
                            </p>
                            <a href="tel:+255756789012" className="text-lg text-slate-700 hover:text-green-600 transition-colors font-medium">
                              +255 756 789 012
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {contactContent.emergencySupport[language]}
                            </p>
                            <a href="tel:+255123456789" className="text-lg text-red-600 hover:text-red-700 transition-colors font-bold">
                              +255 123 456 789
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {language === 'en' ? 'Email Support' : 'Msaada wa Barua Pepe'}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'General Inquiries' : 'Maswali ya Jumla'}
                            </p>
                            <a href="mailto:info@chuibatteries.co.tz" className="text-lg text-slate-700 hover:text-blue-600 transition-colors font-medium">
                              info@chuibatteries.co.tz
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}
                            </p>
                            <a href="mailto:tech@chuibatteries.co.tz" className="text-lg text-slate-700 hover:text-green-600 transition-colors font-medium">
                              tech@chuibatteries.co.tz
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                              {contactContent.warrantySupport[language]}
                            </p>
                            <a href="mailto:warranty@chuibatteries.co.tz" className="text-lg text-slate-700 hover:text-orange-600 transition-colors font-medium">
                              warranty@chuibatteries.co.tz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {contactContent.hoursTitle[language]}
                        </h3>
                        <p className="text-lg text-slate-700 whitespace-pre-line leading-relaxed">
                          {contactContent.hours[language]}
                        </p>
                        <p className="text-green-600 mt-2 font-medium flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          {language === 'en' ? 'Emergency support available 24/7' : 'Msaada wa dharura unapatikana masaa 24'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-96 flex items-center justify-center relative">
                  {/* Battery pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 gap-4 h-full p-8">
                      {Array.from({ length: 32 }, (_, i) => (
                        <div key={i} className="bg-blue-500 rounded opacity-20"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <MapIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {language === 'en' ? 'Find Our Power Center!' : 'Pata Kituo Chetu cha Nguvu!'}
                    </h3>
                    <p className="text-slate-600">
                      {contactContent.address[language]}
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Battery className="w-4 h-4 mr-1" />
                        <span>{language === 'en' ? 'Free Testing' : 'Upimaji Bure'}</span>
                      </div>
                      <div className="flex items-center">
                        <Wrench className="w-4 h-4 mr-1" />
                        <span>{language === 'en' ? 'Installation' : 'Usakinishaji'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-50 translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900">
                      {contactContent.formTitle[language]}
                    </h2>
                  </div>
                  <p className="text-slate-600 text-lg">
                    {contactContent.formSubtitle[language]}
                  </p>
                </div>

                <ContactForm language={language} />

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Battery className="w-6 h-6 text-blue-500" />
                    {contactContent.followUs[language]}
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
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                    <p className="text-center text-blue-700 font-medium italic">
                      &quot;CHUI - The Power Leader&quot; - {contactContent.tagline[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery-specific Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800">
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

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl group-hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">10,000+</h3>
                <p className="text-slate-600">
                  {language === 'en' ? 'Happy Customers' : 'Wateja Wenye Furaha'}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl group-hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">2 Hours</h3>
                <p className="text-slate-600">
                  {language === 'en' ? 'Average Response Time' : 'Wastani wa Muda wa Majibu'}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl group-hover:shadow-lg transition-all duration-300 border border-purple-100">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Battery className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">50+</h3>
                <p className="text-slate-600">
                  {language === 'en' ? 'Battery Models' : 'Miundo ya Betri'}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl group-hover:shadow-lg transition-all duration-300 border border-orange-100">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">24/7</h3>
                <p className="text-slate-600">
                  {language === 'en' ? 'Support Coverage' : 'Mfumo wa Msaada'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'Maswali Yanayoulizwa Mara Kwa Mara'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Get instant answers to common battery questions from our power experts!'
                : 'Pata majibu ya haraka ya maswali ya kawaida ya betri kutoka kwa wataalamu wetu wa nguvu!'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === 'en' ? 'How long do CHUI batteries last?' : 'Betri za CHUI zinadumu kwa muda gani?'}
                  </h3>
                  <p className="text-slate-600">
                    {language === 'en' 
                      ? 'Our premium batteries typically last 3-5 years with proper maintenance, backed by comprehensive warranty coverage.'
                      : 'Betri zetu za hali ya juu zinaweza kudumu miaka 3-5 ukizitunza vizuri, zinategemezwa na uhakikisho mkuu.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === 'en' ? 'Do you offer installation services?' : 'Mnatoa huduma za usakinishaji?'}
                  </h3>
                  <p className="text-slate-600">
                    {language === 'en' 
                      ? 'Yes! We provide professional battery installation, testing, and maintenance services at our service center.'
                      : 'Ndio! Tunatoa huduma za usakinishaji wa betri, upimaji, na matengenezo katika kituo chetu cha huduma.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === 'en' ? 'What warranty do you provide?' : 'Mnatoa uhakikisho wa aina gani?'}
                  </h3>
                  <p className="text-slate-600">
                    {language === 'en' 
                      ? 'All CHUI batteries come with comprehensive warranty coverage ranging from 12 to 36 months depending on the model.'
                      : 'Betri zote za CHUI zinakuja na uhakikisho mkuu wa miezi 12 hadi 36 kulingana na mfano wa betri.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === 'en' ? 'How quickly do you respond to inquiries?' : 'Mnajibu maswali kwa haraka kiasi gani?'}
                  </h3>
                  <p className="text-slate-600">
                    {language === 'en' 
                      ? 'Our power specialists respond to all inquiries within 2 hours during business hours, with 24/7 emergency support available.'
                      : 'Wataalamu wetu wa nguvu wanajibu maswali yote ndani ya masaa 2 wakati wa kazi, na msaada wa dharura unapatikana masaa 24.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🔋</div>
            <h3 className="text-2xl font-bold mb-2">CHUI Batteries</h3>
            <p className="text-slate-400">
              {language === 'en' ? 'Powering Tanzania\'s Future' : 'Kuendesha Mustakabali wa Tanzania'}
            </p>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 CHUI Batteries. {language === 'en' ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}