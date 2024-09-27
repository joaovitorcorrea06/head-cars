import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Veiculos = () => {
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
      name: 'Ford Focus',
      year: '2018',
      color: 'Branco',
      price: 'R$ 65.000,00',
      seller: 'Carros S.A.',
      image: 'https://example.com/car3.jpg',
    },
    {
      id: 4,
      name: 'Volkswagen Golf',
      year: '2021',
      color: 'Vermelho',
      price: 'R$ 90.000,00',
      seller: 'Prime Motors',
      image: 'https://example.com/car4.jpg',
    },
    {
      id: 5,
      name: 'Chevrolet Cruze',
      year: '2020',
      color: 'Azul',
      price: 'R$ 82.000,00',
      seller: 'Revenda GM',
      image: 'https://example.com/car5.jpg',
    },
    {
      id: 6,
      name: 'Hyundai HB20',
      year: '2021',
      color: 'Prata',
      price: 'R$ 68.000,00',
      seller: 'Super Carros',
      image: 'https://example.com/car6.jpg',
    },
    {
      id: 7,
      name: 'Jeep Renegade',
      year: '2022',
      color: 'Preto',
      price: 'R$ 110.000,00',
      seller: 'Jeep Center',
      image: 'https://example.com/car7.jpg',
    },
    {
      id: 8,
      name: 'Nissan Kicks',
      year: '2021',
      color: 'Branco',
      price: 'R$ 95.000,00',
      seller: 'Nissan Autoshop',
      image: 'https://example.com/car8.jpg',
    },
    {
      id: 9,
      name: 'Renault Sandero',
      year: '2019',
      color: 'Cinza',
      price: 'R$ 50.000,00',
      seller: 'Revenda Renault',
      image: 'https://example.com/car9.jpg',
    },
    {
      id: 10,
      name: 'Fiat Argo',
      year: '2020',
      color: 'Vermelho',
      price: 'R$ 55.000,00',
      seller: 'Fiat Showroom',
      image: 'https://example.com/car10.jpg',
    },
    {
      id: 11,
      name: 'Chevrolet Onix',
      year: '2022',
      color: 'Azul',
      price: 'R$ 70.000,00',
      seller: 'Chevrolet Master',
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


  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const brands = ['Toyota', 'Honda', 'Ford', 'Volkswagen', 'Jeep'];
  const years = ['2022', '2021', '2020', '2019', '2018'];

  const location = useLocation();
  const navigate = useNavigate();

  // Atualiza os filtros na URL quando os filtros são alterados
  const updateURL = () => {
    const searchParams = new URLSearchParams();

    if (selectedBrands.length) {
      searchParams.set('brands', selectedBrands.join(','));
    }

    if (selectedYears.length) {
      searchParams.set('years', selectedYears.join(','));
    }

    navigate({ pathname: location.pathname, search: searchParams.toString() });
  };

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

  const applyFilters = () => {
    updateURL();
    // Lógica de filtragem real pode ser implementada aqui
  };

  // Sincroniza os filtros da URL com os estados quando a página é carregada
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const brandsFromUrl = searchParams.get('brands')?.split(',') || [];
    const yearsFromUrl = searchParams.get('years')?.split(',') || [];

    setSelectedBrands(brandsFromUrl);
    setSelectedYears(yearsFromUrl);
  }, [location.search]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  const offset = currentPage * itemsPerPage;
  const currentCars = cars.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(cars.length / itemsPerPage);

  return (
    <div className="container mx-auto py-6 flex w-[65%]">
      {/* Filtros */}
      <div className="w-1/4 pr-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">FILTROS</h2>

        {/* Filtro por Marca */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Marca</h3>
          <div className="max-h-36 overflow-auto">
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
          <button
            onClick={applyFilters}
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
          >
            Filtrar
          </button>
        </div>

        {/* Filtro por Ano */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Ano</h3>
          <div className="max-h-36 overflow-auto">
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
          <button
            onClick={applyFilters}
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
          >
            Filtrar
          </button>
        </div>
      </div>

      {/* Lista de Carros */}
      <div className="w-3/4">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">VEÍCULOS</h2>

        {/* Exibição dos Carros */}
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

        {/* Paginação */}
        <div className="mt-6">
          <ReactPaginate
            previousLabel={'← '}
            nextLabel={' →'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center items-center space-x-2'}
            pageClassName={'text-gray-700 bg-white border rounded-lg px-3 py-1'}
            activeClassName={'bg-blue-500 text-blue-500'}
            previousClassName={'text-blue-500 font-semibold'}
            nextClassName={'text-blue-500 font-semibold'}
          />
        </div>
      </div>
    </div>
  );
};

export default Veiculos;
