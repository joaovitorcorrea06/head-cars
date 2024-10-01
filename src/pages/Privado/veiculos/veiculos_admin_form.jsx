import React from 'react';
import { useForm } from 'react-hook-form';
import {
  IVeiculoCategoria,
  IVeiculoTipoCombustivel,
  IVeiculoTipoTransmissao,
  IVeiculoCondicaoVeiculo,
  IVeiculoStatusLicenciamento,
  IVeiculoSituacaoVeiculo
} from './enums'; // Assumindo que esses enums estão em um arquivo separado chamado "enums"

const VeiculosAdminForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      marca: '',
      modelo: '',
      modelo_versao: '',
      ano_fabricacao: '',
      ano_modelo: '',
      placa: '',
      renavam: '',
      chassi: '',
      categoria: IVeiculoCategoria.SEDAN,
      tipo_combustivel: IVeiculoTipoCombustivel.GASOLINA,
      tipo_transmissao: IVeiculoTipoTransmissao.MANUAL,
      cor: '',
      quilometragem: '',
      potencia_motor: '',
      numero_portas: '',
      condicao: IVeiculoCondicaoVeiculo.NOVO,
      historico_sinistro: false,
      historico_leilao: false,
      blindado: false,
      garantia: false,
      status_licenciamento: IVeiculoStatusLicenciamento.EM_DIA,
      ipva_pago: false,
      multas_pendentes: false,
      seguro: false,
      valor_fipe_comprado: '',
      valor_comprado: '',
      preco_venda: '',
      preco_venda_a_vista: '',
      situacao_veiculo: IVeiculoSituacaoVeiculo.DISPONIVEL,
      condicao_veiculo: IVeiculoCondicaoVeiculo.DISPONIVEL,
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cadastro de Veículo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-md rounded-lg p-8">
        {/* Informações básicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Marca</label>
            <input
              {...register('marca', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.marca && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Modelo</label>
            <input
              {...register('modelo', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.modelo && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Versão do Modelo</label>
            <input
              {...register('modelo_versao', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.modelo_versao && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ano de Fabricação</label>
            <input
              {...register('ano_fabricacao', { required: true })}
              type="number"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.ano_fabricacao && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ano do Modelo</label>
            <input
              {...register('ano_modelo', { required: true })}
              type="number"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.ano_modelo && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Placa</label>
            <input
              {...register('placa', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.placa && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Renavam</label>
            <input
              {...register('renavam', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.renavam && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chassi</label>
            <input
              {...register('chassi', { required: true })}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
            {errors.chassi && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
          </div>
        </div>

        {/* Categorias, Combustível e Transmissão */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Categoria</label>
            <select
              {...register('categoria')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoCategoria).map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Combustível</label>
            <select
              {...register('tipo_combustivel')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoTipoCombustivel).map((combustivel) => (
                <option key={combustivel} value={combustivel}>
                  {combustivel}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Transmissão</label>
            <select
              {...register('tipo_transmissao')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoTipoTransmissao).map((transmissao) => (
                <option key={transmissao} value={transmissao}>
                  {transmissao}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Condições e características */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Cor</label>
            <input
              {...register('cor')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quilometragem</label>
            <input
              {...register('quilometragem')}
              type="number"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Potência do Motor</label>
            <input
              {...register('potencia_motor')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Número de Portas</label>
            <input
              {...register('numero_portas')}
              type="number"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>
        </div>

        {/* Outras informações */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center">
            <input
              {...register('historico_sinistro')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Histórico de Sinistro</label>
          </div>

          <div className="flex items-center">
            <input
              {...register('historico_leilao')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Histórico de Leilão</label>
          </div>

          <div className="flex items-center">
            <input
              {...register('blindado')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Blindado</label>
          </div>

          <div className="flex items-center">
            <input
              {...register('garantia')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Garantia</label>
          </div>
        </div>

        {/* Licenciamento e pendências */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status do Licenciamento</label>
            <select
              {...register('status_licenciamento')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoStatusLicenciamento).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              {...register('ipva_pago')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">IPVA Pago</label>
          </div>

          <div className="flex items-center">
            <input
              {...register('multas_pendentes')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Multas Pendentes</label>
          </div>

          <div className="flex items-center">
            <input
              {...register('seguro')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Seguro</label>
          </div>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Valor de FIPE (Comprado)</label>
            <input
              {...register('valor_fipe_comprado')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor Comprado</label>
            <input
              {...register('valor_comprado')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preço de Venda</label>
            <input
              {...register('preco_venda')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Preço de Venda à Vista</label>
            <input
              {...register('preco_venda_a_vista')}
              type="text"
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Condição do Veículo</label>
            <select
              {...register('condicao_veiculo')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoCondicaoVeiculo).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Situação do Veículo</label>
            <select
              {...register('situacao_veiculo')}
              className="mt-1 block w-full rounded-md  shadow-sm border border-transparent focus:border-blue-500 focus:border focus:outline-none px-2 py-1 transition-colors duration-100 ease-in-out text-sm"
            >
              {Object.values(IVeiculoSituacaoVeiculo).map((situacao) => (
                <option key={situacao} value={situacao}>
                  {situacao}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Botão de envio */}
        <div className="flex justify-end">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cadastrar Veículo
          </button>
        </div>
      </form>
    </div>
  );
};

export default VeiculosAdminForm;
