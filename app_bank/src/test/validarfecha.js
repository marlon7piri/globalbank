

  function validarfechaNacimiento(fecha){
  const fecha_elegida = fecha.substring(0, 4);
  const fecha_actual = new Date();

  const year = Number(fecha_elegida);
  const year_actual = fecha_actual.getFullYear();

  const edad = year_actual - year;
  console.log(edad);
  return edad;
}

export default validarfechaNacimiento