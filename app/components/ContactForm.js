'use client'

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Loader2, Send } from 'lucide-react';

const formContent = {
  name: {
    en: "Full Name",
    sw: "Jina Kamili"
  },
  email: {
    en: "Email Address",
    sw: "Barua Pepe"
  },
  phone: {
    en: "Phone Number",
    sw: "Nambari ya Simu"
  },
  subject: {
    en: "Subject",
    sw: "Mada"
  },
  message: {
    en: "Your Message",
    sw: "Ujumbe Wako"
  },
  submit: {
    en: "Send Message",
    sw: "Tuma Ujumbe"
  },
  success: {
    en: "Message sent successfully!",
    sw: "Ujumbe umepelekwa kikamilifu!"
  },
  error: {
    en: "Error sending message. Please try again.",
    sw: "Kosa katika kutuma ujumbe. Tafadhali jaribu tena."
  }
};

const subjects = [
  { en: "Product Inquiry", sw: "Uchunguzi wa Bidhaa" },
  { en: "Equipment Purchase", sw: "Ununuzi wa Vifaa" },
  { en: "Service Request", sw: "Ombi la Huduma" },
  { en: "Partnership", sw: "Ushirikiano" },
  { en: "Other", sw: "Nyingine" }
];

export default function ContactForm({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {formContent.success[language]}
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {formContent.error[language]}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {formContent.name[language]}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {formContent.email[language]}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {formContent.phone[language]}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            {formContent.subject[language]}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">{language === 'en' ? 'Select a subject' : 'Chagua mada'}</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject[language]}>
                {subject[language]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {formContent.message[language]}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center items-center px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {language === 'en' ? 'Sending...' : 'Inatuma...'}
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {formContent.submit[language]}
            </>
          )}
        </button>
      </div>
    </form>
  );
}