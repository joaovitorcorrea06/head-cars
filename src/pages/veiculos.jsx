import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Veiculos = () => {
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
    // Adicione mais carros aqui...
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

  // Estado para armazenar os filtros selecionados
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  // Dados das marcas e anos para os filtros
  const brands = ['Toyota', 'Honda', 'Ford', 'Volkswagen', 'Jeep'];
  const years = ['2022', '2021', '2020', '2019', '2018'];

  // Funções para manipular a seleção de filtros
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleYearChange = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  // Estados para a paginação
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Quantidade de carros por página

  // Função para lidar com a mudança de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calcular os carros exibidos na página atual
  const offset = currentPage * itemsPerPage;
  const currentCars = cars.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(cars.length / itemsPerPage);

  return (
    <div className="container mx-auto py-6 flex w-[65%]">
      {/* Coluna de Filtros */}
      <div className="w-1/4 pr-4">
        {/* Filtro por Marca */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg max-h-40 overflow-auto">
          <h3 className="text-lg font-semibold mb-3">Filtro por Marca</h3>
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2"
                />
                <label htmlFor={brand} className="text-gray-700">
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Filtro por Ano */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg max-h-40 overflow-auto">
          <h3 className="text-lg font-semibold mb-3">Filtro por Ano</h3>
          <ul className="space-y-2">
            {years.map((year) => (
              <li key={year} className="flex items-center">
                <input
                  type="checkbox"
                  id={year}
                  checked={selectedYears.includes(year)}
                  onChange={() => handleYearChange(year)}
                  className="mr-2"
                />
                <label htmlFor={year} className="text-gray-700">
                  {year}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Coluna de Carros */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 gap-6">
          {currentCars.map((car) => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex">
              <img
                src={car.image}
                alt={car.name}
                className="w-1/3 h-auto object-cover"
              />
              <div className="p-4 w-2/3">
                <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
                <p className="text-gray-600 mt-2">Ano: <span className="font-medium">{car.year}</span></p>
                <p className="text-gray-600">Cor: <span className="font-medium">{car.color}</span></p>
                <p className="text-blue-500 text-lg font-semibold mt-2">{car.price}</p>
                <p className="text-sm text-gray-500 mt-4">Vendedor: <span className="font-medium text-gray-700">{car.seller}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Componente de Paginação */}
        <div className="mt-6">
          <ReactPaginate
            previousLabel={'← Anterior'}
            nextLabel={'Próximo →'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center items-center space-x-2'}
            pageClassName={'text-gray-700 bg-white border rounded-lg px-3 py-1'}
            activeClassName={'bg-blue-500 text-white'}
            previousClassName={'text-blue-500 font-semibold'}
            nextClassName={'text-blue-500 font-semibold'}
          />
        </div>
      </div>
    </div>
  );
};

export default Veiculos;
