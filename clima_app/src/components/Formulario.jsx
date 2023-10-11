import React, { useEffect, useState } from "react";

const initialState = {
  nombre: "",
  fecha_nacimiento: "",
  nota: "",
};
function Formulario({ handlerChange }) {
  const [form, setForm] = useState(initialState);

  const handlerData = (e) => {
    e.preventDefault();

    const diferencia = validarfechaNacimiento();

    console.log(diferencia);

    if (diferencia < 18) {
      alert(
        "eres menor de edad o estas eligiendo una fecha mayor que la actual",
        diferencia
      );
      return;
    } else {
    
      handlerChange(form);

      setForm(initialState); 
    }
  };

  const llenarCampos = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validarfechaNacimiento = () => {
    const fecha_elegida = form.fecha_nacimiento.substring(0, 4);
    const fecha_actual = new Date();

    const year = Number(fecha_elegida);
    const year_actual = fecha_actual.getFullYear();

    console.log(year < year_actual);

    const diferencia = year_actual - year;
    return diferencia;
  };

  return (
    <form onSubmit={handlerData}>
      <div className="bg-gray-500 p-4 flex flex-col gap-4 w-[400px]  h-[400px] m-auto">
        <label htmlFor="" >
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id=""
          required
          onChange={llenarCampos}
          value={form.nombre} pattern="^[A-Za-z]+$" title="Solo se permiten letras de la A a la Z"
        />
        <label htmlFor="">Fecha de Nacimiento</label>

        <input
          type="date"
          name="fecha_nacimiento"
          id=""
          required
          onChange={llenarCampos}
          min={"1900-01-01"}
          value={form.fecha_nacimiento}
        />
        <label htmlFor="">Comentarios</label>
        <textarea
          name="nota"
          id=""
          cols="30"
          rows="10"
          onChange={llenarCampos}
          value={form.nota} 
        ></textarea>

        <button className=" bg-red-500 disabled:true">Enviar</button>
      </div>
    </form>
  );
}

export default Formulario;
