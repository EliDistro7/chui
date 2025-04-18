'use client'

import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import { productsData } from '@/data/index';

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

const quoteModalContent = {
  title: {
    en: "Request a Quote",
    sw: "Omba Bei"
  },
  subtitle: {
    en: "Please provide your contact information and we'll send you a personalized quote.",
    sw: "Tafadhali toa maelezo yako ya mawasiliano na tutakutumia bei."
  },
  productLabel: {
    en: "Product",
    sw: "Bidhaa"
  },
  nameLabel: {
    en: "Your Name",
    sw: "Jina Lako"
  },
  namePlaceholder: {
    en: "Enter your full name",
    sw: "Ingiza jina lako kamili"
  },
  phoneLabel: {
    en: "Phone Number",
    sw: "Namba ya Simu"
  },
  phonePlaceholder: {
    en: "Enter your phone number",
    sw: "Ingiza namba yako ya simu"
  },
  emailLabel: {
    en: "Email (Optional)",
    sw: "Barua pepe (Hiari)"
  },
  emailPlaceholder: {
    en: "Enter your email address",
    sw: "Ingiza anwani yako ya barua pepe"
  },
  messageLabel: {
    en: "Additional Information (Optional)",
    sw: "Maelezo ya Ziada (Hiari)"
  },
  messagePlaceholder: {
    en: "Any specific requirements or questions",
    sw: "Mahitaji yoyote mahususi au maswali"
  },
  submitButton: {
    en: "Submit Quote Request",
    sw: "Wasilisha Ombi la Bei"
  },
  successTitle: {
    en: "Quote Request Submitted",
    sw: "Ombi la Bei Limewasilishwa"
  },
  successMessage: {
    en: "Thank you! Our team will contact you with a personalized quote within 24 hours.",
    sw: "Asante! Timu yetu itawasiliana nawe na bei ndani ya masaa 24."
  },
  errorTitle: {
    en: "Something Went Wrong",
    sw: "Hitilafu Imetokea"
  },
  errorMessage: {
    en: "We couldn't submit your request. Please try again or contact us directly.",
    sw: "Hatukuweza kuwasilisha ombi lako. Tafadhali jaribu tena au wasiliana nasi moja kwa moja."
  },
  requiredField: {
    en: "This field is required",
    sw: "Sehemu hii inahitajika"
  },
  invalidPhone: {
    en: "Please enter a valid phone number",
    sw: "Tafadhali ingiza namba ya simu iliyo sahihi"
  },
  invalidEmail: {
    en: "Please enter a valid email address",
    sw: "Tafadhali ingiza anwani ya barua pepe iliyo sahihi"
  },
  closeButton: {
    en: "Close",
    sw: "Funga"
  },
  returnButton: {
    en: "Return to Shopping",
    sw: "Rudi Kununua"
  }
};

const QuoteRequestModal = ({ isOpen, onClose, productId }) => {
  const { language } = useLanguage();
  const [product, setProduct] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (productId) {
      const foundProduct = productsData.find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [productId]);

  useEffect(() => {
    if (isOpen) {
      // Reset form state when modal opens
      setFormState({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setErrors({});
      setSubmissionStatus(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = quoteModalContent.requiredField[language];
    }
    
    // Phone validation
    if (!formState.phone.trim()) {
      newErrors.phone = quoteModalContent.requiredField[language];
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(formState.phone.trim())) {
      newErrors.phone = quoteModalContent.invalidPhone[language];
    }
    
    // Email validation (optional)
    if (formState.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      newErrors.email = quoteModalContent.invalidEmail[language];
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the data to your API
      // For demonstration, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Prepare the data that would be sent to your API
      const quoteRequestData = {
        product: {
          id: product?.id,
          name: product?.name[language],
          price: product?.price[language]
        },
        customerInfo: {
          name: formState.name,
          phone: formState.phone,
          email: formState.email || 'Not provided',
          message: formState.message || 'No additional information'
        },
        requestDate: new Date().toISOString()
      };
      
      // Log the data that would be sent (for development purposes)
      console.log('Quote Request Data:', quoteRequestData);
      
      // Set submission status to success
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    onClose();
    // Reset form state when modal closes
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`${sourceSans.variable} ${baskerville.variable} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4`}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className={`text-2xl font-bold text-gray-900 font-display`}>
            {quoteModalContent.title[language]}
          </h2>
          <button 
            onClick={handleModalClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          {submissionStatus === null ? (
            <>
              <p className="mb-6 text-gray-600">
                {quoteModalContent.subtitle[language]}
              </p>
              
              {/* Product Information */}
              {product && (
                <div className="mb-6 bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">
                      {quoteModalContent.productLabel[language]}
                    </div>
                    <div className="font-medium text-gray-900">
                      {product.name[language]}
                    </div>
                    <div className="text-primary-600 font-medium">
                      {product.price[language]}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {quoteModalContent.nameLabel[language]} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={quoteModalContent.namePlaceholder[language]}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                
                {/* Phone Field */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {quoteModalContent.phoneLabel[language]} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={quoteModalContent.phonePlaceholder[language]}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                
                {/* Email Field (Optional) */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {quoteModalContent.emailLabel[language]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={quoteModalContent.emailPlaceholder[language]}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                {/* Message Field (Optional) */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {quoteModalContent.messageLabel[language]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder={quoteModalContent.messagePlaceholder[language]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors disabled:bg-primary-400"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      <span>{language === 'en' ? 'Submitting...' : 'Inawasilisha...'}</span>
                    </div>
                  ) : (
                    quoteModalContent.submitButton[language]
                  )}
                </button>
              </form>
            </>
          ) : submissionStatus === 'success' ? (
            <div className="py-6 text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                {quoteModalContent.successTitle[language]}
              </h3>
              <p className="text-gray-600 mb-6">
                {quoteModalContent.successMessage[language]}
              </p>
              <button
                onClick={handleModalClose}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors"
              >
                {quoteModalContent.returnButton[language]}
              </button>
            </div>
          ) : (
            <div className="py-6 text-center">
              <div className="mb-4 flex justify-center">
                <AlertCircle className="w-16 h-16 text-red-500" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 font-display`}>
                {quoteModalContent.errorTitle[language]}
              </h3>
              <p className="text-gray-600 mb-6">
                {quoteModalContent.errorMessage[language]}
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setSubmissionStatus(null)}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors"
                >
                  {language === 'en' ? 'Try Again' : 'Jaribu Tena'}
                </button>
                <button
                  onClick={handleModalClose}
                  className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  {quoteModalContent.closeButton[language]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestModal;