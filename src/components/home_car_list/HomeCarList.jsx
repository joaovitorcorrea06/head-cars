import React from 'react';

const HomeCarList = () => {
  // Exemplo de dados de carros
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      year: '2020',
      color: 'Prata',
      price: 'R$ 85.000,00',
      seller: 'AutoShow Revendas',
      image: 'https://example.com/car1.jpg',
    },
    {
      id: 2,
      name: 'Honda Civic',
      year: '2019',
      color: 'Preto',
      price: 'R$ 78.000,00',
      seller: 'Revenda XYZ',
      image: 'https://example.com/car2.jpg',
    },
    {
      id: 3,
      name: 'Chevrolet Onix',
      year: '2021',
      color: 'Branco',
      price: 'R$ 65.000,00',
      seller: 'Top Veículos',
      image: 'https://example.com/car3.jpg',
    },
    {
      id: 4,
      name: 'Ford Ka',
      year: '2022',
      color: 'Azul',
      price: 'R$ 58.000,00',
      seller: 'Loja de Carros A',
      image: 'https://example.com/car4.jpg',
    },
    {
      id: 5,
      name: 'Volkswagen Golf',
      year: '2020',
      color: 'Vermelho',
      price: 'R$ 92.000,00',
      seller: 'Carros Premium',
      image: 'https://example.com/car5.jpg',
    },
    {
      id: 6,
      name: 'Jeep Compass',
      year: '2021',
      color: 'Cinza',
      price: 'R$ 110.000,00',
      seller: 'SUVs Brasil',
      image: 'https://example.com/car6.jpg',
    },
    {
      id: 7,
      name: 'Hyundai HB20',
      year: '2018',
      color: 'Branco',
      price: 'R$ 50.000,00',
      seller: 'Auto Vendas',
      image: 'https://example.com/car7.jpg',
    },
    {
      id: 8,
      name: 'Fiat Argo',
      year: '2019',
      color: 'Prata',
      price: 'R$ 56.000,00',
      seller: 'Loja de Carros B',
      image: 'https://example.com/car8.jpg',
    },
    {
      id: 9,
      name: 'Chevrolet Cruze',
      year: '2020',
      color: 'Azul',
      price: 'R$ 85.000,00',
      seller: 'Revendas Chevrolet',
      image: 'https://example.com/car9.jpg',
    },
    {
      id: 10,
      name: 'Renault Duster',
      year: '2021',
      color: 'Marrom',
      price: 'R$ 75.000,00',
      seller: 'SUV Center',
      image: 'https://example.com/car10.jpg',
    },
    {
      id: 11,
      name: 'Nissan Kicks',
      year: '2022',
      color: 'Preto',
      price: 'R$ 95.000,00',
      seller: 'Loja SUVs e Cia',
      image: 'https://example.com/car11.jpg',
    },
    {
      id: 12,
      name: 'Peugeot 208',
      year: '2021',
      color: 'Cinza',
      price: 'R$ 60.000,00',
      seller: 'Auto France',
      image: 'https://example.com/car12.jpg',
    },
  ];


  return (
    <div className="container mx-auto w-[65%]">
      <div className="grid grid-cols-4 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-28 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-bold text-gray-800">{car.name}</h2>
              <div className="text-gray-600 flex flex-col items-center">
                <p><span className="font-medium">{car.year}</span> | <span className="font-medium">{car.color}</span></p>
                <p className="text-blue-500 text-lg font-semibold">
                  {car.price}
                </p>
              </div>

              <p className="text-sm font-medium text-gray-700">{car.seller}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarList;
