
import validarfecha from "./validarfecha.js"

describe("validarfecha testing", () => {
  test("que la funcion validarfecha retorne un numero mayor a 18", () => {
    const fecha = validarfecha("1996-12-2");
    console.log(fecha)

   
    
    expect(fecha).toBeGreaterThan(18);
  });

  test("que la funcion validarfecha no retorne un undefined",()=>{
    const fecha = validarfecha("")
    expect(fecha).not.toBeUndefined()

  })
});
