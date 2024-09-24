function Loading({ show, addInfo }) {
  if (!show) return <></>;

  function Render() {
    return (
      <>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <strong>
              <h4 className="text-lg font-bold">Carregando, aguarde um momento...</h4>
            </strong>
            <div className="border-4 border-t-transparent border-gray-600 rounded-full w-12 h-12 animate-spin mt-4"></div>
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
            <div className="flex justify-center">
              <h5 className="text-xl">{addInfo.title}</h5>
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

export default Loading;
