import React, { useEffect, useState } from "react";

const initialState = {
  nombre: "",
  fecha_nacimiento: "",
  nota: "",
  edad: undefined,
};
function Formulario({ handlerChange }) {
  const [form, setForm] = useState(initialState);
  const [edadcalculada, setEdadcalculada] = useState(0);

  const handlerData = (e) => {
    e.preventDefault();

    /*   const age = validarfechaNacimiento(); */
    console.log(edadcalculada);
    if (edadcalculada < 18) {
      alert(
        "eres menor de edad o la fecha elegida es mayor que la fecha actual"
      );
      setForm(initialState);
      return;
    }else{
      handlerChange(form);
     
      setForm(initialState);
    }
   
  };

  const llenarCampos = (e) => {
    setEdadcalculada(validarfechaNacimiento());
    console.log(edadcalculada);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      edad: edadcalculada,
    });
  };

  const validarfechaNacimiento = () => {
    const fecha_elegida = form.fecha_nacimiento.substring(0, 4);
    const fecha_actual = new Date();

    const year = Number(fecha_elegida);
    const year_actual = fecha_actual.getFullYear();

    const edad = year_actual - year;
    console.log(edad);
    return edad;
  };

  return (
    <form onSubmit={handlerData}>
      <div className="bg-gray-500 p-4 flex flex-col gap-4 w-[400px]  h-[400px] m-auto">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="nombre"
          id=""
          required
          onChange={llenarCampos}
          value={form.nombre}
          pattern="^[A-Za-zñÑ\s]+$"
          title="Solo se permiten letras de la A a la Z"
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
