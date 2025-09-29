'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, ArrowRight, Battery, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const cartContent = {
  title: { en: 'Shopping Cart', sw: 'Kikapu cha Order' },
  subtitle: { en: 'Review your selected batteries', sw: 'Kagua betri ulizochagua' },
  empty: { 
    title: { en: 'Your cart is empty', sw: 'Kikapu chako ni tupu' },
    subtitle: { en: 'Start shopping for powerful batteries', sw: 'Anza kununua betri zenye nguvu' },
    button: { en: 'Shop Now', sw: 'Nunua Sasa' }
  },
  quantity: { en: 'Quantity', sw: 'Idadi' },
  price: { en: 'Price', sw: 'Bei' },
  total: { en: 'Total', sw: 'Jumla' },
  subtotal: { en: 'Subtotal', sw: 'Jumla Ndogo' },
  continueShopping: { en: 'Continue Shopping', sw: 'Endelea Kununua' },
  checkout: { en: 'Proceed to Checkout', sw: 'Endelea kwa Malipo' },
  remove: { en: 'Remove item', sw: 'Ondoa bidhaa' },
  updateQuantity: { en: 'Update quantity', sw: 'Sasisha idadi' }
};

 const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const { language } = useLanguage();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const formatPrice = (price: number) => {
    return `TSh ${price.toLocaleString()}`;
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    updateQuantity(itemId, newQuantity);
    setQuantities({ ...quantities, [itemId]: newQuantity });
  };

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
            <ShoppingCart className="w-16 h-16 text-yellow-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            {cartContent.empty.title[language]}
          </h1>
          
          <p className="text-blue-100 mb-8 text-lg">
            {cartContent.empty.subtitle[language]}
          </p>
          
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Battery className="w-6 h-6 mr-3" />
            {cartContent.empty.button[language]}
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-100 bg-clip-text text-transparent">
            {cartContent.title[language]}
          </h1>
          <p className="text-blue-100 text-lg">
            {cartContent.subtitle[language]} ({totalItems} {language === 'en' ? 'items' : 'bidhaa'})
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const itemPrice = parseInt(item.price.en.replace(/[^\d]/g, ''));
              const itemTotal = itemPrice * item.quantity;

              return (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name[language]}
                        className="w-full h-full object-cover rounded-xl bg-gradient-to-br from-blue-900 to-purple-900"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.name[language]}
                          </h3>
                          <p className="text-yellow-400 font-semibold text-lg">
                            {formatPrice(itemPrice)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="p-2 text-white hover:bg-white/10 rounded-l-lg transition-colors"
                              title={cartContent.updateQuantity[language]}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="p-2 text-white hover:bg-white/10 rounded-r-lg transition-colors"
                              title={cartContent.updateQuantity[language]}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                            title={cartContent.remove[language]}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">
                            {cartContent.total[language]}:
                          </span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            {formatPrice(itemTotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {language === 'en' ? 'Order Summary' : 'Muhtasari wa Oda'}
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-blue-100">
                    <span>{cartContent.subtotal[language]}:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between text-blue-100">
                    <span>{language === 'en' ? 'Items' : 'Bidhaa'}:</span>
                    <span>{totalItems}</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>{cartContent.total[language]}:</span>
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {cartContent.checkout[language]}
                  </Link>
                  
                  <Link
                    href="/products"
                    className="w-full flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {cartContent.continueShopping[language]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;