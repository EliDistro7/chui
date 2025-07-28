'use client'

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube, Heart, Star, Zap, MessageCircle, MapIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const contactContent = {
  title: {
    en: "Get in Touch",
    sw: "Wasiliana Nasi"
  },
  subtitle: {
    en: "We love to hear from you! Reach out for questions, feedback, or just to say hello!",
    sw: "Tungependa kusikia kutoka kwako! Wasiliana nasi kwa maswali, maoni, au tu kusema hujambo!"
  },
  contactInfo: {
    en: "Contact Information",
    sw: "Maelezo ya Mawasiliano"
  },
  visitUs: {
    en: "Visit Our Snack Factory",
    sw: "Tembelea Kiwanda Chetu cha Vitafunio"
  },
  address: {
    en: "Industrial Area, Dar es Salaam, Tanzania",
    sw: "Eneo la Viwanda, Dar es Salaam, Tanzania"
  },
  hoursTitle: {
    en: "Working Hours",
    sw: "Masaa ya Kazi"
  },
  hours: {
    en: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
    sw: "Jumatatu-Ijumaa: 8:00 asubuhi - 5:00 jioni\nJumamosi: 9:00 asubuhi - 2:00 jioni\nJumapili: Imefungwa"
  },
  formTitle: {
    en: "Send Us a Message",
    sw: "Tutumie Ujumbe"
  },
  formSubtitle: {
    en: "We respond within 24 hours with lots of love!",
    sw: "Tutajibu ndani ya masaa 24 kwa upendo mwingi!"
  },
  customerCare: {
    en: "Customer Care",
    sw: "Huduma kwa Wateja"
  },
  businessInquiries: {
    en: "Business Inquiries",
    sw: "Mahojiano ya Biashara"
  },
  followUs: {
    en: "Follow Our Snack Adventures",
    sw: "Tufuate Katika Safari za Vitafunio"
  },
  tagline: {
    en: "Making every moment deliciously happy!",
    sw: "Tukifanya kila wakati kuwa wa furaha na ladha!"
  }
};

// Contact Form Component
const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(language === 'en' ? 'Thank you for your message! We&apos;ll get back to you soon!' : 'Asante kwa ujumbe wako! Tutarudisha jibu hivi karibuni!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Your Name' : 'Jina Lako'}
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
            placeholder={language === 'en' ? 'Enter your full name' : 'Weka jina lako kamili'}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Email Address' : 'Barua Pepe'}
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
            placeholder={language === 'en' ? 'your@email.com' : 'barua@pepe.com'}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Phone Number' : 'Nambari ya Simu'}
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
            placeholder="+255 XXX XXX XXX"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Subject' : 'Mada'}
          </label>
          <select
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          >
            <option value="">
              {language === 'en' ? 'Select a topic' : 'Chagua mada'}
            </option>
            <option value="general">
              {language === 'en' ? 'General Inquiry' : 'Maswali ya Jumla'}
            </option>
            <option value="product">
              {language === 'en' ? 'Product Question' : 'Swali la Bidhaa'}
            </option>
            <option value="feedback">
              {language === 'en' ? 'Feedback' : 'Maoni'}
            </option>
            <option value="business">
              {language === 'en' ? 'Business Partnership' : 'Ushirikiano wa Biashara'}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          {language === 'en' ? 'Message' : 'Ujumbe'}
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
          placeholder={language === 'en' ? 'Tell us what&apos;s on your mind...' : 'Tuambie kile kilicho akilini mwako...'}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-layer flex items-center justify-center gap-3"
      >
        <Send className="w-5 h-5" />
        {language === 'en' ? 'Send Message' : 'Tuma Ujumbe'} 🚀
      </button>
    </form>
  );
};

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-1/5 w-14 h-14 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              TAM TAM Support
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {contactContent.title[language]}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {contactContent.subtitle[language]}
          </p>
          
          <div className="mt-8 flex items-center justify-center text-white/80">
            <Heart className="w-5 h-5 mr-2 animate-pulse text-accent-200" />
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
                <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  {contactContent.contactInfo[language]}
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="group hover:bg-white hover:shadow-soft rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {contactContent.visitUs[language]}
                        </h3>
                        <p className="text-gray-700 text-lg">
                          {contactContent.address[language]}
                        </p>
                        <p className="text-primary-600 mt-2 font-medium">
                          {language === 'en' ? 'Free factory tours available!' : 'Ziara za bure za kiwanda zinapatikana!'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group hover:bg-white hover:shadow-soft rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-secondary-500 to-accent-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {language === 'en' ? 'Call Us' : 'Tupeigie Simu'}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                              {contactContent.customerCare[language]}
                            </p>
                            <a href="tel:+255123456789" className="text-lg text-gray-700 hover:text-primary-600 transition-colors font-medium">
                              +255 123 456 789
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                              {contactContent.businessInquiries[language]}
                            </p>
                            <a href="tel:+255987654321" className="text-lg text-gray-700 hover:text-secondary-600 transition-colors font-medium">
                              +255 987 654 321
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group hover:bg-white hover:shadow-soft rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-accent-500 to-primary-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {language === 'en' ? 'Email Us' : 'Tutumie Barua Pepe'}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'General' : 'Jumla'}
                            </p>
                            <a href="mailto:hello@tamtamsnacks.co.tz" className="text-lg text-gray-700 hover:text-primary-600 transition-colors font-medium">
                              hello@tamtamsnacks.co.tz
                            </a>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                              {language === 'en' ? 'Support' : 'Msaada'}
                            </p>
                            <a href="mailto:support@tamtamsnacks.co.tz" className="text-lg text-gray-700 hover:text-secondary-600 transition-colors font-medium">
                              support@tamtamsnacks.co.tz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group hover:bg-white hover:shadow-soft rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-info-500 to-primary-500 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {contactContent.hoursTitle[language]}
                        </h3>
                        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                          {contactContent.hours[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-layer border-4 border-white">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'Find Us Here!' : 'Tupatane Hapa!'}
                    </h3>
                    <p className="text-gray-600">
                      {contactContent.address[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-layer p-10 border border-gray-100 relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-accent-100 to-info-100 rounded-full opacity-50 translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      {contactContent.formTitle[language]}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg">
                    {contactContent.formSubtitle[language]}
                  </p>
                </div>

                <ContactForm language={language} />

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-accent-500" />
                    {contactContent.followUs[language]}
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-layer">
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-layer">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-layer">
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="group bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-layer">
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
                    <p className="text-center text-primary-700 font-medium italic">
                      &quot;Bidhaa Ya Ah... Adi...&quot; - {contactContent.tagline[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-4">🐘</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' 
              ? 'Ready to taste the TAM TAM difference?' 
              : 'Tayari kuonja tofauti ya TAM TAM?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'en' 
              ? 'Visit our factory or find us at your nearest store!' 
              : 'Tembelea kiwanda chetu au utupatane dukani lako la karibu!'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-soft">
              {language === 'en' ? 'Find a Store' : 'Pata Duka'}
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
              {language === 'en' ? 'Schedule a Visit' : 'Panga Ziara'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}