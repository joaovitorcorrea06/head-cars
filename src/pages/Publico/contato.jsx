import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log('Dados do Formulário:', formData);
  };

  return (
    <div className="container mx-auto py-6 w-[65%]">
      {/* Título da Seção de Contato */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
        CONTATO
      </h2>

      {/* Divisão em 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coluna 1 - Formulário de Contato */}
        <form onSubmit={handleSubmit} >
          {/* Campo Nome */}
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Digite seu nome"
            />
          </div>

          {/* Campo E-mail */}
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Digite seu e-mail"
            />
          </div>

          {/* Campo Telefone */}
          <div className="mb-3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full p-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Digite seu telefone"
            />
          </div>

          {/* Campo Mensagem */}
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full p-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Coluna 2 - Informações de Contato */}
        <div >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Informações de Contato</h3>

          <p className="text-sm text-gray-700">
            <strong>Telefone:</strong> <br /> (11) 1234-5678
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>E-mail:</strong> <br /> contato@example.com
          </p>

          {/* Endereço físico ou outras informações adicionais */}
          <p className="text-sm text-gray-700 mt-2">
            <strong>Endereço:</strong> <br />
            Rua Exemplo, 123, São Paulo - SP
          </p>

          {/* Links para redes sociais */}
          <div className="mt-4">
            <h4 className="text-lg font-medium text-gray-800">Siga-nos</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 hover:underline text-sm">Facebook</a>
              <a href="#" className="text-blue-500 hover:underline text-sm">Instagram</a>
              <a href="#" className="text-blue-500 hover:underline text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
