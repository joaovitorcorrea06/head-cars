import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'
import { URL } from '../config/url';

const Header = ({ open, setOpen }) => {

  const navigate = useNavigate()
  return (
    <div>
      <nav className="bg-slate-600 h-60 flex justify-center items-center flex-col">
        <div className="bg-red-400 h-[80%] w-[65%]">
          {/* Conteúdo adicional (se houver) */}
        </div>
        <div className="bg-blue-400 h-[20%] w-[65%] flex justify-between items-center px-6">
          <ul className="flex gap-6 items-center h-full text-white uppercase font-semibold tracking-wider">
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate(URL.home)}
            >
              Início
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate(URL.veiculos)}>
              Veículos
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate(URL.lojas)}
            >
              Lojas
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate(URL.contato)}>
              Contato
            </li>
          </ul>
          <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
            Anuncie sua revenda
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
