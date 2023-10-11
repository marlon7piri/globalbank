import { useEffect, useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import CardForm from "./components/CardForm";

function App() {
  const [adds, setAdds] = useState(() => {
    try {
      const personainStorage = localStorage.getItem("datos");
      return personainStorage ? JSON.parse(personainStorage) : [];
    } catch (error) {
      return [];
    }
  });

  const handlerChange = (data) => {
    console.log(data);

    setAdds([...adds, data]);
  };

  /* const cargarDatos = () => {
    console.log(persona);
    setAdds([...adds, persona]);
  }; */

  useEffect(() => {
    localStorage.setItem("datos", JSON.stringify(adds));
  }, [adds]);

  return (
    <div className="p-4 m-auto">
      <h1 className="lg:text-center  md:text-center sm:text-center mt-4">Prueba Banco</h1>
      <Formulario handlerChange={handlerChange} />
      <CardForm adds={adds} setAdds={setAdds} />
    </div>
  );
}

export default App;
