import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastre seus livros",
      description: "Adicione os livros que você deseja trocar na plataforma"
    },
    {
      number: "02",
      title: "Encontre matches",
      description: "Descubra pessoas interessadas em seus livros"
    },
    {
      number: "03",
      title: "Combine a troca",
      description: "Acerte os detalhes e realize a troca de forma segura"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Como funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trocar livros nunca foi tão fácil. Siga estes passos simples:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;