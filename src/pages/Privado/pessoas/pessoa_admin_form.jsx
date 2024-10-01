import React from "react";
import { useForm } from "react-hook-form";

const PessoaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Nome</label>
        <input
          type="text"
          {...register("nome", { required: true })}
          className="input-form"
        />
        {errors.nome && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>CPF/CNPJ</label>
        <input
          type="text"
          {...register("cpf_cnpj", { required: true })}
          className="input-form"
        />
        {errors.cpf_cnpj && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>RG/IE</label>
        <input
          type="text"
          {...register("rg_ie", { required: true })}
          className="input-form"
        />
        {errors.rg_ie && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>Data de Nascimento</label>
        <input
          type="date"
          {...register("data_nascimento", { required: true })}
          className="input-form"
        />
        {errors.data_nascimento && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>Telefone</label>
        <input
          type="text"
          {...register("telefone", { required: true })}
          className="input-form"
        />
        {errors.telefone && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>Telefone 2</label>
        <input
          type="text"
          {...register("telefone_2")}
          className="input-form"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input-form"
        />
        {errors.email && <span>Campo obrigatório</span>}
      </div>

      <div>
        <label>Endereço Formatado</label>
        <input
          type="text"
          {...register("endereco_formatado", { required: true })}
          className="input-form"
        />
        {errors.endereco_formatado && <span>Campo obrigatório</span>}
      </div>

      <button type="submit" className="btn-submit">Enviar</button>
    </form>
  );
};

export default PessoaForm;
