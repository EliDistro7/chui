import React, { useState } from 'react';
import { Plus, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

interface AddToCartButtonProps {
  productId: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  productId, 
  className = "", 
  size = 'md',
  showText = false 
}) => {
  const { addToCart, getCartItem } = useCart();
  const { language } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = getCartItem(productId);
  const isInCart = cartItem && cartItem.quantity > 0;

  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-base',
    lg: 'p-4 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Add to cart
    addToCart(productId, 1);
    
    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset success state
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 300);
  };

  const buttonText = {
    en: isInCart ? `In Cart (${cartItem?.quantity})` : 'Add to Cart',
    sw: isInCart ? `Kwenye Cart (${cartItem?.quantity})` : 'Ongeza Cart'
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`
        flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105
        ${justAdded 
          ? 'bg-green-500 hover:bg-green-600' 
          : isInCart
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
        } 
        text-white shadow-lg hover:shadow-xl
        ${isAdding ? 'opacity-75 cursor-not-allowed' : ''}
        ${sizeClasses[size]} ${className}
      `}
    >
      {isAdding ? (
        <div className={`animate-spin rounded-full border-2 border-white border-t-transparent ${iconSizes[size]}`} />
      ) : justAdded ? (
        <Check className={iconSizes[size]} />
      ) : isInCart ? (
        <ShoppingCart className={iconSizes[size]} />
      ) : (
        <p className=''>
        
         {language==='sw'? "nunua":"buy"}
        </p>
        
      )}
      
      {showText && (
        <span className="hidden sm:inline">
          {justAdded 
            ? (language === 'en' ? 'Added!' : 'Imeongezwa!') 
            : buttonText[language]
          }
        </span>
      )}
    </button>
  );
};