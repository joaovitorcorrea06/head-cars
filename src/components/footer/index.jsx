import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-8">
      <div className="container mx-auto w-[80%]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Email: contato@seudominio.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition-colors duration-300">Início</a></li>
              <li><a href="/veiculos" className="hover:text-gray-300 transition-colors duration-300">Veículos</a></li>
              <li><a href="/lojas" className="hover:text-gray-300 transition-colors duration-300">Lojas</a></li>
              <li><a href="/videos" className="hover:text-gray-300 transition-colors duration-300">Vídeos</a></li>
              <li><a href="/contato" className="hover:text-gray-300 transition-colors duration-300">Contato</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p>
              Somos uma plataforma dedicada à venda de veículos, oferecendo as melhores opções de compra para você.
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-500 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Seu Nome ou Nome da Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
