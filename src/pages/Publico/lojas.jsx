import React from 'react';
import { useNavigate } from 'react-router-dom'
import { URL } from '../../config/url'

const Lojas = () => {
  // Exemplo de dados das lojas
  const stores = [
    {
      id: 1,
      name: 'AutoShow Revendas',
      city: 'São Paulo',
      state: 'SP',
      vehicleCount: 120,
      logo: 'https://example.com/logo1.jpg',
    },
    {
      id: 2,
      name: 'Revenda XYZ',
      city: 'Rio de Janeiro',
      state: 'RJ',
      vehicleCount: 85,
      logo: 'https://example.com/logo2.jpg',
    },
    {
      id: 3,
      name: 'Auto France',
      city: 'Curitiba',
      state: 'PR',
      vehicleCount: 50,
      logo: 'https://example.com/logo3.jpg',
    },
    {
      id: 4,
      name: 'TopCar Veículos',
      city: 'Belo Horizonte',
      state: 'MG',
      vehicleCount: 70,
      logo: 'https://example.com/logo4.jpg',
    },
    {
      id: 5,
      name: 'Loja dos Carros',
      city: 'Florianópolis',
      state: 'SC',
      vehicleCount: 95,
      logo: 'https://example.com/logo5.jpg',
    },
    {
      id: 6,
      name: 'Mega Veículos',
      city: 'Porto Alegre',
      state: 'RS',
      vehicleCount: 130,
      logo: 'https://example.com/logo6.jpg',
    },
    // Adicione mais lojas aqui...
  ];

  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-6 w-[65%]">
      {/* Título da Seção de Lojas */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
        LOJAS
      </h2>

      {/* Grid de Lojas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            onClick={() => navigate(URL.lojas + '/' + store.id)}
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-24 h-24 object-cover mb-4 rounded-full"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">{store.name}</h3>
            <p className="text-gray-600 text-center">
              {store.city}, {store.state}
            </p>
            <p className="text-sm text-gray-500 text-center">
              Veículos: <span className="font-medium">{store.vehicleCount}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lojas;
