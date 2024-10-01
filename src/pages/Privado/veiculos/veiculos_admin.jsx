import React from 'react';

const VeiculosAdmin = () => {
  // Exemplo de dados dos veículos
  const vehicles = [
    { id: 1, name: 'Toyota Corolla', year: '2020', price: 'R$ 85.000,00', status: 'Disponível' },
    { id: 2, name: 'Honda Civic', year: '2019', price: 'R$ 78.000,00', status: 'Vendido' },
    { id: 3, name: 'Ford Focus', year: '2018', price: 'R$ 65.000,00', status: 'Disponível' },
    { id: 4, name: 'Volkswagen Golf', year: '2021', price: 'R$ 90.000,00', status: 'Disponível' },
    { id: 5, name: 'Chevrolet Cruze', year: '2020', price: 'R$ 82.000,00', status: 'Em manutenção' },
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Cabeçalho da página */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gerenciamento de Veículos</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          + Adicionar Veículo
        </button>
      </div>

      {/* Tabela de Veículos */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Nome</th>
              <th className="py-3 px-6">Ano</th>
              <th className="py-3 px-6">Preço</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{vehicle.name}</td>
                <td className="py-3 px-6">{vehicle.year}</td>
                <td className="py-3 px-6">{vehicle.price}</td>
                <td className={`py-3 px-6 font-semibold ${vehicle.status === 'Disponível' ? 'text-green-500' : vehicle.status === 'Vendido' ? 'text-red-500' : 'text-yellow-500'}`}>
                  {vehicle.status}
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">Editar</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VeiculosAdmin;
