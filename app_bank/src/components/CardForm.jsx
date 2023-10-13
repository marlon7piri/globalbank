import React, { useEffect }  from  "react"

function CardForm({ adds, setAdds}) {
  if (adds.length == 0) {
    return <h1 className="text-center text-4xl text-gray-900">No hay Notas</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-10 ">
      {adds.map((e) => {
        return (
          <div
            className="bg-gray-50 rounded-md p-4 text-center w-[250px] h-[300px]  flex flex-col gap-4 justify-center  items-center ml-4 basis-[250px] shadow-2xl "
            key={Math.random()}
          >
            <p className="text-xl text-gray-900">
              <span>Nombre:</span> {e.nombre}
            </p>
            <p className="text-xl text-gray-900">
              <span>Fecha de Nacimiento:</span> {e.fecha_nacimiento}
            </p>
            <p className="text-xl text-gray-900">
              <span>Mensaje:</span> {e.nota}
            </p>
            <p className="text-xl text-gray-900">
              <span>Edad:</span> {e.edad}
            </p>
            
          </div>
        );
      })}
    </div>
  );
}

export default CardForm;
