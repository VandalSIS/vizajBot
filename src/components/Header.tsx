import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartModal from './CartModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const { state: cartState } = useCart();

  const categories = [
    {
      name: 'Machiaj',
      subcategories: [
        'Seturi pentru machiaj',
        'Sprâncene',
        'Produse pentru manichiură',
        'Buze',
        'Accesorii',
        'Față',
        'Ochi'
      ]
    },
    {
      name: 'Parfumerie',
      subcategories: [
        'Parfumuri de nișă',
        'Arome pentru femei',
        'Arome pentru bărbați'
      ]
    },
    {
      name: 'Îngrijire',
      subcategories: [
        'Seturi pentru îngrijirea pielii',
        'Seria pentru bronz',
        'Îngrijire pentru corp',
        'Îngrijire pentru față'
      ]
    },
    {
      name: 'Îngrijirea Părului',
      subcategories: [
        'Șamponuri pentru toți',
        'Șampon uscat',
        'Vopsire',
        'Balsamuri',
        'Styling',
        'Îngrijire de păr'
      ]
    },
    {
      name: 'Bărbați',
      subcategories: [
        'Șamponuri și balsamuri pentru bărbați',
        'Îngrijire pentru barbă',
        'Seturi pentru bărbați',
        'Deodorante pentru bărbați',
        'Geluri de duș pentru bărbați',
        'Produse pentru bărbierit'
      ]
    },
    {
      name: 'Certificate',
      subcategories: []
    }
  ];

  const brands = [
    'Clarins',
    'Franck Olivier',
    'Moschino',
    'Dsquared2',
    'Versace',
    'Adidas',
    'Makeup Revolution',
    'Biotherm',
    'Cottage',
    'Lalique'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Carduri de reducere</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Program bonus</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Informație pentru Consumatori</a>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-600">RO</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">RU</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">VIZAJE-NICA</div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/products" className="text-gray-700 hover:text-black font-medium">Catalog</a>
            <a href="/products?brand=all" className="text-gray-700 hover:text-black font-medium">Brands</a>
            <a href="/products?category=new" className="text-gray-700 hover:text-black font-medium">Noutăți</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">Magazinele</a>
            <a href="/products?category=sale" className="text-gray-700 hover:text-black font-medium">Promoții</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">Contacte</a>
            <a href="/products?category=sale" className="text-gray-700 hover:text-black font-medium">Reduceri</a>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setShowCartModal(true)}
              className="p-2 text-gray-600 hover:text-black relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>


      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {authMode === 'login' && 'Logare'}
                {authMode === 'register' && 'Înregistrare'}
                {authMode === 'forgot' && 'Resetați parola'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {authMode === 'login' && (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Număr de telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parola
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introduceți parola"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Ați uitat parola?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Logare
                </button>
                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Continuați fără înregistrare
                </button>
              </form>
            )}

            {authMode === 'register' && (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Număr de telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introduceți email-ul"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parola
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introduceți parola"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repetați parola
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Repetați parola"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">
                      Sunt de acord cu Termeni și condiții.
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">
                      Sunt de acord să primesc e-mailuri promoționale despre promoții și reduceri.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Înregistrare
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="w-full text-primary-600 hover:text-primary-700"
                >
                  Am un cont
                </button>
              </form>
            )}

            {authMode === 'forgot' && (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Introdu e-mailul pe care l-ai folosit la înregistrare"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Trimite
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal 
        isOpen={showCartModal} 
        onClose={() => setShowCartModal(false)} 
      />
    </header>
  );
};

export default Header;