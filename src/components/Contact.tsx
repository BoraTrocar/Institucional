import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em contato</h2>
            <p className="text-gray-600 mb-6">
              Tem alguma dúvida ou sugestão? Ficaremos felizes em ajudar!
            </p>
            <div className="flex items-center space-x-4 text-primary-300">
              <Mail className="h-6 w-6" />
              <span>contato@boratrocar.com</span>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-300 text-white px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors shadow-md"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;