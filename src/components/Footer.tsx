import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Despre Vizaje Nica</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Magazinele</a>
              <a href="#" className="block text-gray-300 hover:text-white">Certificate</a>
            </div>
          </div>

          {/* Customers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cumpărători</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Promoții</a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informație</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Contacte</a>
              <a href="#" className="block text-gray-300 hover:text-white">Informaţie pentru Consumatori</a>
              <a href="#" className="block text-gray-300 hover:text-white">Termeni și condiții</a>
              <a href="#" className="block text-gray-300 hover:text-white">Politica de confidențialitate și cookie-uri</a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">B</span>
            </div>
            <span className="text-sm text-gray-300">Buze</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">O</span>
            </div>
            <span className="text-sm text-gray-300">Ochi</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">M</span>
            </div>
            <span className="text-sm text-gray-300">Machiaj</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">P</span>
            </div>
            <span className="text-sm text-gray-300">Parfumerie</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">I</span>
            </div>
            <span className="text-sm text-gray-300">Îngrijire</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary-600 font-bold">B</span>
            </div>
            <span className="text-sm text-gray-300">Bărbați</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© Vizaje-nica.com, 1992—2025. Toate drepturile rezervate.</p>
          <p className="mt-2">Developer Elaborarea siteului - ilab.md</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
