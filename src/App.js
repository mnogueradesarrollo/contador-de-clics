import "./App.css";
import Boton from "./components/boton";
import Contador from "./components/contador";
import freeCodeCamp from "./images/logo.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const agregarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img className="freecodecomp-logo" src={freeCodeCamp} alt="" />
      </div>
      <div className="container-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" botonDeClic={true} manejarClic={agregarClic} />
        <Boton
          texto="Reiniciar"
          botonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
