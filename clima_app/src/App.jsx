import { useEffect, useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import CardForm from "./components/CardForm";

function App() {
  const [adds, setAdds] = useState([]);

  const handlerChange = (data) => {
    console.log(data);
   setAdds([...adds, data]); 
  /*  localStorage.setItem("datos", JSON.stringify(adds)); */
    
  };

  /* const obtenerDatos = () => {
    if (localStorage.getItem("datos")) {
      const datageneral = JSON.parse(localStorage.getItem("datos"));
      setAdds(datageneral);
    } else {
      alert("No hay datos en el local storage");
    }
  }; */

/*   obtenerDatos(); */

  return (
    <div className="p-4 m-auto">
      <h1 className="text-center mt-4">Prueba Banco</h1>
      <Formulario handlerChange={handlerChange} />
      <CardForm adds={adds} setAdds={setAdds} />
    </div>
  );
}

export default App;
