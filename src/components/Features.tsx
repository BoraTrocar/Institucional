import React from 'react';
import { Book, Users, ArrowRightLeft } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Book className="h-8 w-8 text-primary-300" />,
      title: "Biblioteca Diversificada",
      description: "Acesso a uma vasta coleção de livros de diferentes gêneros e autores."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-300" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros leitores e compartilhe suas experiências literárias."
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8 text-primary-300" />,
      title: "Trocas Seguras",
      description: "Sistema seguro e confiável para realizar suas trocas de livros."
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que escolher o Bora Trocar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma oferece uma experiência única para os amantes da leitura
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-pearl-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;