import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { URL, SUBHOST } from '../config/url';
// import { useAuth } from '../context/auth';

import NotFound from './notfound';

import Home from '../pages/Publico/home';
import Veiculos from '../pages/Publico/veiculos';
import Lojas from '../pages/Publico/lojas';
import Contato from '../pages/Publico/contato';
import Loja from '../pages/Publico/loja_selected';
import Carro from '../pages/Publico/carro';
import HomeAdmin from '../pages/Privado/home_admin';
import VeiculosAdmin from '../pages/Privado/veiculos/veiculos_admin';
import EmpresasAdmin from '../pages/Privado/empresas_admin';
// import PessoasAdmin from '../pages/Privado/pessoas_admin';
import VeiculosAdminForm from '../pages/Privado/veiculos/veiculos_admin_form';
import PessoaForm from '../pages/Privado/pessoas/pessoa_admin_form';


function Router() {

  return (
    <Routes>
      {/* PUBLICO */}
      <Route path={URL.home} element={<Home />} />
      <Route path={URL.veiculos} element={<Veiculos />} />
      <Route path={URL.lojas} element={<Lojas />} />
      <Route path={URL.lojas + '/:id'} element={<Loja />} />
      <Route path={URL.carro + '/:id'} element={<Carro />} />
      <Route path={URL.contato} element={<Contato />} />


      {/* PRIVADO */}
      <Route path={URL.admin_home} element={<HomeAdmin />} />
      <Route path={URL.admin_veiculos} element={<VeiculosAdmin />} />
      <Route path={URL.admin_veiculos_form} element={<VeiculosAdminForm />} />
      <Route path={URL.admin_veiculos_form + '/:id'} element={<VeiculosAdminForm />} />
      <Route path={URL.admin_empresas} element={<EmpresasAdmin />} />
      {/* <Route path={URL.admin_pessoas} element={<PessoasAdmin />} /> */}
      <Route path={URL.admin_pessoas_form} element={<PessoaForm />} />
      <Route path={URL.admin_pessoas_form + '/:id'} element={<PessoaForm />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
