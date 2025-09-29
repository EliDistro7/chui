'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageSquare, User, ArrowLeft, Battery, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const checkoutContent = {
  title: { en: 'Checkout', sw: 'Malipo' },
  subtitle: { en: 'Complete your battery order', sw: 'Kamilisha agizo lako la betri' },
  orderSummary: { en: 'Order Summary', sw: 'Muhtasari wa Agizo' },
  customerInfo: { en: 'Customer Information', sw: 'Taarifa za Mteja' },
  name: { en: 'Full Name', sw: 'Jina Kamili' },
  namePlaceholder: { en: 'Enter your full name', sw: 'Ingiza jina lako kamili' },
  phone: { en: 'Phone Number', sw: 'Nambari ya Simu' },
  phonePlaceholder: { en: 'Enter your phone number', sw: 'Ingiza nambari yako ya simu' },
  whatsapp: { en: 'WhatsApp Number (Optional)', sw: 'Nambari ya WhatsApp (Si lazima)' },
  whatsappPlaceholder: { en: 'Enter WhatsApp number if different', sw: 'Ingiza nambari ya WhatsApp ikiwa ni tofauti' },
  address: { en: 'Delivery Address', sw: 'Anwani ya Utoaji' },
  addressPlaceholder: { en: 'Enter your delivery address', sw: 'Ingiza anwani yako ya utoaji' },
  notes: { en: 'Additional Notes (Optional)', sw: 'Maelezo ya Ziada (Si lazima)' },
  notesPlaceholder: { en: 'Any special instructions...', sw: 'Maelezo maalum yoyote...' },
  total: { en: 'Total Amount', sw: 'Kiasi Jumla' },
  submitOrder: { en: 'Submit Order via WhatsApp', sw: 'Weka Oda kupitia WhatsApp' },
  backToCart: { en: 'Back to Cart', sw: 'Rudi Cart' },
  orderSuccess: { en: 'Order Submitted!', sw: 'Oda imewekwa!' },
  orderSuccessMessage: { en: 'Your order has been sent via WhatsApp. We will contact you shortly.', sw: 'Oda yako imetumwa kwa WhatsApp. Tutawasiliana nawe hivi karibuni.' },
  errors: {
    nameRequired: { en: 'Name is required', sw: 'Jina linahitajika' },
    phoneRequired: { en: 'Phone number is required', sw: 'Nambari ya simu inahitajika' },
    phoneInvalid: { en: 'Please enter a valid phone number', sw: 'Tafadhali ingiza nambari sahihi ya simu' },
    addressRequired: { en: 'Delivery address is required', sw: 'Anwani ya utoaji inahitajika' }
  }
};

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
}

 const CheckoutPage: React.FC = () => {
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    whatsapp: '',
    address: '',
    notes: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const formatPrice = (price: number) => {
    return `TSh ${price.toLocaleString()}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = checkoutContent.errors.nameRequired[language];
    }

    if (!formData.phone.trim()) {
      newErrors.phone = checkoutContent.errors.phoneRequired[language];
    } else if (!/^(\+255|0)[67]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = checkoutContent.errors.phoneInvalid[language];
    }

    if (!formData.address.trim()) {
      newErrors.address = checkoutContent.errors.addressRequired[language];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    const producerNumber = "+255765762688"; // Replace with actual producer WhatsApp number
    
    let message = `🔋 *CHUI BATTERY ORDER* 🔋\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.whatsapp && formData.whatsapp !== formData.phone) {
      message += `WhatsApp: ${formData.whatsapp}\n`;
    }
    message += `Address: ${formData.address}\n\n`;
    
    message += `📦 *Order Items:*\n`;
    cartItems.forEach((item, index) => {
      const itemPrice = parseInt(item.price.en.replace(/[^\d]/g, ''));
      const itemTotal = itemPrice * item.quantity;
      message += `${index + 1}. ${item.name.en}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${formatPrice(itemPrice)} each\n`;
      message += `   Subtotal: ${formatPrice(itemTotal)}\n\n`;
    });
    
    message += `💰 *Total Amount: ${formatPrice(getTotalPrice())}*\n`;
    message += `📊 Total Items: ${getTotalItems()}\n\n`;
    
    if (formData.notes.trim()) {
      message += `📝 *Additional Notes:*\n${formData.notes}\n\n`;
    }
    
    message += `🕐 Order Time: ${new Date().toLocaleString()}\n`;
    message += `\nThank you for choosing CHUI Batteries! 🔋⚡`;
    
    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const whatsappMessage = generateWhatsAppMessage();
      const producerNumber = "+255123456789"; // Replace with actual producer WhatsApp number
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${producerNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Clear cart and show success
      setTimeout(() => {
        clearCart();
        setOrderSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting order:', error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            {checkoutContent.orderSuccess[language]}
          </h1>
          
          <p className="text-blue-100 mb-8 text-lg">
            {checkoutContent.orderSuccessMessage[language]}
          </p>
          
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Battery className="w-6 h-6 mr-3" />
            {language === 'en' ? 'Continue Shopping' : 'Endelea Kununua'}
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
            {checkoutContent.title[language]}
          </h1>
          <p className="text-blue-100 text-lg">
            {checkoutContent.subtitle[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-yellow-400" />
                  {checkoutContent.customerInfo[language]}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {checkoutContent.name[language]} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={checkoutContent.namePlaceholder[language]}
                      className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 transition-all ${
                        errors.name ? 'border-red-400' : 'border-white/20 focus:border-yellow-400/50'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {checkoutContent.phone[language]} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={checkoutContent.phonePlaceholder[language]}
                      className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 transition-all ${
                        errors.phone ? 'border-red-400' : 'border-white/20 focus:border-yellow-400/50'
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-white font-semibold mb-2">
                    {checkoutContent.whatsapp[language]}
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder={checkoutContent.whatsappPlaceholder[language]}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:border-yellow-400/50 transition-all"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-white font-semibold mb-2">
                    {checkoutContent.address[language]} *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder={checkoutContent.addressPlaceholder[language]}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 transition-all resize-none ${
                      errors.address ? 'border-red-400' : 'border-white/20 focus:border-yellow-400/50'
                    }`}
                  />
                  {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="mt-4">
                  <label className="block text-white font-semibold mb-2">
                    {checkoutContent.notes[language]}
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder={checkoutContent.notesPlaceholder[language]}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:border-yellow-400/50 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cart"
                  className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {checkoutContent.backToCart[language]}
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <MessageSquare className="w-6 h-6 mr-2" />
                  )}
                  {isSubmitting 
                    ? (language === 'en' ? 'Submitting...' : 'Inatumwa...') 
                    : checkoutContent.submitOrder[language]
                  }
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {checkoutContent.orderSummary[language]}
                </h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const itemPrice = parseInt(item.price.en.replace(/[^\d]/g, ''));
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <img
                          src={item.image}
                          alt={item.name[language]}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm">
                            {item.name[language]}
                          </h4>
                          <p className="text-blue-200 text-sm">
                            {item.quantity} x {formatPrice(itemPrice)}
                          </p>
                        </div>
                        <div className="text-yellow-400 font-bold">
                          {formatPrice(itemTotal)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Totals */}
                <div className="space-y-2 pt-4 border-t border-white/20">
                  <div className="flex justify-between text-blue-100">
                    <span>{language === 'en' ? 'Items' : 'Bidhaa'}:</span>
                    <span>{totalItems}</span>
                  </div>
                  
                  <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                    <span>{checkoutContent.total[language]}:</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Info */}
              <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-400/30">
                <div className="flex items-center mb-3">
                  <MessageSquare className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">
                    {language === 'en' ? 'WhatsApp Order' : 'Agizo la WhatsApp'}
                  </h3>
                </div>
                <p className="text-green-100 text-sm">
                  {language === 'en' 
                    ? 'Your order will be sent directly to our WhatsApp for quick processing and confirmation.'
                    : 'Agizo lako litatumwa moja kwa moja kwenye WhatsApp yetu kwa uchakataji na uthibitisho wa haraka.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;