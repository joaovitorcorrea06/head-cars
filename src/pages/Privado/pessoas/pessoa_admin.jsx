import React from 'react';

const PessoaAdmin = () => {
  // Exemplo de dados das pessoas
  const people = [
    { id: 1, name: 'João Silva', age: 30, email: 'joao.silva@example.com', status: 'Ativo' },
    { id: 2, name: 'Maria Souza', age: 25, email: 'maria.souza@example.com', status: 'Inativo' },
    { id: 3, name: 'Pedro Santos', age: 40, email: 'pedro.santos@example.com', status: 'Ativo' },
    { id: 4, name: 'Ana Oliveira', age: 28, email: 'ana.oliveira@example.com', status: 'Ativo' },
    { id: 5, name: 'Lucas Lima', age: 35, email: 'lucas.lima@example.com', status: 'Pendente' },
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Cabeçalho da página */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gerenciamento de Pessoas</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          + Adicionar Pessoa
        </button>
      </div>

      {/* Tabela de Pessoas */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Nome</th>
              <th className="py-3 px-6">Idade</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {people.map((person) => (
              <tr key={person.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{person.name}</td>
                <td className="py-3 px-6">{person.age}</td>
                <td className="py-3 px-6">{person.email}</td>
                <td className={`py-3 px-6 font-semibold ${person.status === 'Ativo' ? 'text-green-500' : person.status === 'Inativo' ? 'text-red-500' : 'text-yellow-500'}`}>
                  {person.status}
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

export default PessoaAdmin;
