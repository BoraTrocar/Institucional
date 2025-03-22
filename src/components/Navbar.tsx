import React, { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-primary-200" />
            <span className="ml-2 text-xl font-semibold text-primary-300">Bora Trocar</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-primary-300 transition-colors">Início</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-primary-300 transition-colors">Como Funciona</a>
            <a href="#recursos" className="text-gray-600 hover:text-primary-300 transition-colors">Recursos</a>
            <a href="#contato" className="text-gray-600 hover:text-primary-300 transition-colors">Contato</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-primary-300">Início</a>
            <a href="#como-funciona" className="block px-3 py-2 text-gray-600 hover:text-primary-300">Como Funciona</a>
            <a href="#recursos" className="block px-3 py-2 text-gray-600 hover:text-primary-300">Recursos</a>
            <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-primary-300">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;