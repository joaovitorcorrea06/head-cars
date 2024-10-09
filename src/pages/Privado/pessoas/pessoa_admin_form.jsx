import React from 'react';
import { useForm } from 'react-hook-form';

const PessoaAdminForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cadastro de Pessoa</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" bg-white shadow-md rounded-lg p-8">
        {/* Informações básicas */}
        <p className='text-xl'>Geral</p>
        <div className='w-full h-1 bg-slate-300 mb-8 mt-2'></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              {...register('nome', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.nome && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">CPF/CNPJ</label>
            <input
              {...register('cpfCnpj', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.cpfCnpj && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">RG/IE</label>
            <input
              {...register('rgIe', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.rgIe && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
            <input
              {...register('dataNascimento', { required: true })}
              type="date"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.dataNascimento && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone 1</label>
            <input
              {...register('telefone1', { required: true })}
              type="tel"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.telefone1 && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone 2</label>
            <input
              {...register('telefone2')}
              type="tel"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.email && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>
        </div>

        <p className='text-xl mt-8'>Endereço</p>
        <div className='w-full h-1 bg-slate-300 mb-8 mt-2'></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Rua</label>
            <input
              {...register('rua', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.rua && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Número</label>
            <input
              {...register('numero', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.numero && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bairro</label>
            <input
              {...register('bairro', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.bairro && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">CEP</label>
            <input
              {...register('cep', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.cep && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cidade</label>
            <input
              {...register('cidade', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.cidade && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              {...register('estado', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md shadow-sm border border-transparent focus:border-blue-500 focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.estado && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>
        </div>

        {/* Botão de envio */}
        <div className="flex justify-end">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cadastrar Pessoa
          </button>
        </div>
      </form>
    </div>
  );
};

export default PessoaAdminForm;
