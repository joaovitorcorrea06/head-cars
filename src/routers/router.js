import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { URL, SUBHOST } from '../config/url';
// import { useAuth } from '../context/auth';

import NotFound from './notfound';

import Home from '../pages/home';
import Veiculos from '../pages/veiculos';
import Lojas from '../pages/lojas';
import Contato from '../pages/contato';
import Loja from '../pages/loja_selected';
import Carro from '../pages/carro';


function Router() {

  return (
    <Routes>
      {/* <Route path={URL.home} element={<RequireAuth><Home /></RequireAuth>} /> */}
      <Route path={URL.home} element={<Home />} />
      <Route path={URL.veiculos} element={<Veiculos />} />
      <Route path={URL.lojas} element={<Lojas />} />
      <Route path={URL.lojas + '/:id'} element={<Loja />} />
      <Route path={URL.carro + '/:id'} element={<Carro />} />
      <Route path={URL.contato} element={<Contato />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
