import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { trackAddToCart } from './MetaPixel';
import { trackAddToCart as trackGAAddToCart, trackViewItem } from './GoogleAnalytics';
import { trackAddToCart as trackGTMAddToCart, trackViewItem as trackGTMViewItem } from './GoogleTagManager';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
  bonusPoints: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    // Track AddToCart event for Meta Ads
    trackAddToCart(product.price, 'MDL', product.id);
    // Track AddToCart event for Google Analytics
    trackGAAddToCart(product.id, product.name, product.brand, product.price, 'MDL');
    // Track AddToCart event for Google Tag Manager
    trackGTMAddToCart(product.id, product.name, product.brand, product.price, 'MDL');
  };

  const handleProductView = () => {
    // Track product view for Google Analytics
    trackViewItem(product.id, product.name, product.brand, product.price, 'MDL');
    // Track product view for Google Tag Manager
    trackGTMViewItem(product.id, product.name, product.brand, product.price, 'MDL');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleProductView}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">New</span>
          )}
          {product.isOnSale && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">Sale</span>
          )}
        </div>

        {/* Discount percentage */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              -{discountPercentage}%
            </span>
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2 font-medium">{product.brand}</div>
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-sm leading-relaxed">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">{product.price} MDL</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice} MDL</span>
            )}
          </div>
        </div>
        
        <div className="text-sm text-black font-medium">
          +{product.bonusPoints} bonusuri
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
