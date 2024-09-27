import React, { useState } from 'react';

const Carro = () => {
  // Exemplo de dados do carro
  const car = {
    name: 'Toyota Corolla',
    year: '2020',
    color: 'Prata',
    price: 'R$ 85.000,00',
    description: 'Carro em excelente estado, sem acidentes, todas as revisões em dia. Rodas de liga leve e pneus novos.',
    features: [
      'Motor 2.0',
      'Câmbio automático',
      'Ar condicionado digital',
      'Sistema de navegação GPS',
      'Bancos de couro',
      'Sensor de estacionamento',
    ],
    seller: {
      name: 'AutoShow Revendas',
      phone: '(11) 98765-4321',
      email: 'contato@autoshowsrevendas.com',
      location: 'São Paulo, SP',
    },
    images: [
      'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/09-images/onix-hatch-showroom-1920x960.jpg?imwidth=960',
      'https://storage.googleapis.com/movida-public-images/modelos/3210_image.jpg',
      'https://quatrorodas.abril.com.br/wp-content/uploads/2024/02/FiatMobiLikeMY245.jpg?quality=70&strip=info',
      'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/09-images/onix-plus-showroom-1920x960.jpg?imwidth=960',
      'https://www.hondacaiuas.com.br/wp-content/uploads/2022/08/tipos-de-carro-hatch-new-city-hatchback.jpg',
    ],
  };

  // Estado para controlar a imagem principal
  const [mainImage, setMainImage] = useState(car.images[0]);

  return (
    <div className="container mx-auto py-6 w-[65%]">
      {/* Título e preço */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{car.name} - {car.year}</h1>
        <span className="text-2xl font-semibold text-blue-500">{car.price}</span>
      </div>

      {/* Imagem Principal */}
      <div className="mb-6">
        <img
          src={mainImage}
          alt={car.name}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Miniaturas das imagens */}
      <div className="flex space-x-4 mb-6">
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${car.name} - miniatura ${index + 1}`}
            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${mainImage === image ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setMainImage(image)} // Atualiza a imagem principal ao clicar
          />
        ))}
      </div>

      {/* Descrição e Características */}
      <div className="flex flex-col md:flex-row mb-6">
        {/* Descrição */}
        <div className="md:w-2/3 md:pr-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Descrição</h2>
          <p className="text-gray-700 mb-6">{car.description}</p>

          {/* Características */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Características</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Informações do Vendedor */}
        <div className="md:w-1/3 mt-6 md:mt-0 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contato com o Vendedor</h3>
          <p className="text-gray-700 mb-2">
            <strong>Nome:</strong> {car.seller.name}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Telefone:</strong> {car.seller.phone}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> <a href={`mailto:${car.seller.email}`} className="text-blue-500 underline">{car.seller.email}</a>
          </p>
          <p className="text-gray-700">
            <strong>Localização:</strong> {car.seller.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carro;
