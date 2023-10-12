import React, { useEffect } from "react";

function CardForm({ adds, setAdds}) {
  if (adds.length == 0) {
    return <h1 className="text-center text-4xl text-gray-900">No hay Notas</h1>;
  }

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 mt-10 grid-rows-1">
      {adds.map((e) => {
        return (
          <div
            className="bg-gray-900 rounded-md p-4 text-center w-[250px] h-[300px]  flex flex-col justify-center  items-center ml-4"
            key={Math.random()}
          >
            <p className="text-xl text-gray-50">
              <span>Nombre:</span> {e.nombre}
            </p>
            <p className="text-xl text-gray-50">
              <span>Fecha de Nacimiento:</span> {e.fecha_nacimiento}
            </p>
            <p className="text-xl text-gray-50">
              <span>Mensaje:</span> {e.nota}
            </p>
            <p className="text-xl text-gray-50">
              <span>Edad:</span> {e.edad}
            </p>
            
          </div>
        );
      })}
    </div>
  );
}

export default CardForm;
