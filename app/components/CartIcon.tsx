import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

interface CartIconProps {
  onClick: () => void;
  className?: string;
}

export const CartIcon: React.FC<CartIconProps> = ({ onClick, className = "" }) => {
  const { getTotalItems } = useCart();
  const { language } = useLanguage();
  const itemCount = getTotalItems();

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center p-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${className}`}
      title={language === 'en' ? 'View Cart' : 'Tazama Cart'}
    >
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};