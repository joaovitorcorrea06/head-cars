import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ addInfo }) {
  function Render() {
    return (
      <>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <strong>
              <h3 className="text-lg font-bold">
                <span className="animate-spin border-4 border-t-transparent border-red-600 rounded-full w-8 h-8 inline-block"></span>
                &nbsp; Página não encontrada! &nbsp;
                <span className="animate-spin border-4 border-t-transparent border-red-600 rounded-full w-8 h-8 inline-block"></span>
              </h3>
            </strong>
            {!addInfo ? (
              <>
                <br />
                <Link className="text-blue-600 underline" to={URL.index}>
                  Caso não seja redirecionado, clique aqui!
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto">
      {addInfo ? (
        <>
          <div className="mt-3 mb-4">
            <div className="flex justify-between items-center">
              <h5 className="text-xl">{addInfo.title}</h5>
              <Link
                className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100"
                to={addInfo.urlGoBack}
              >
                Voltar
              </Link>
            </div>
          </div>

          {Render()}
        </>
      ) : (
        Render()
      )}
    </div>
  );
}

export default NotFound;
