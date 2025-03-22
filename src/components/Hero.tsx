import React from 'react';
import { BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-pearl-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Compartilhe histórias, <br />
              <span className="text-primary-300">troque experiências</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Conectamos amantes da leitura para trocar livros de forma simples e sustentável.
              Faça parte desta comunidade e dê uma nova vida aos seus livros!
            </p>
            <button className="bg-primary-300 text-white px-8 py-3 rounded-lg hover:bg-primary-400 transition-colors shadow-lg">
              Começar Agora
            </button>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="animate-float">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600"
                  alt="Livros empilhados"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-primary-200" />
                  <span className="text-gray-800 font-semibold">+1000 trocas realizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;