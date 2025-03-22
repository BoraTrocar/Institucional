import React from 'react';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pearl-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Book className="h-8 w-8 text-primary-200" />
            <span className="ml-2 text-xl font-semibold text-primary-300">Bora Trocar</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#inicio" className="text-gray-600 hover:text-primary-300 transition-colors">Início</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-primary-300 transition-colors">Como Funciona</a>
            <a href="#recursos" className="text-gray-600 hover:text-primary-300 transition-colors">Recursos</a>
            <a href="#contato" className="text-gray-600 hover:text-primary-300 transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Bora Trocar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;