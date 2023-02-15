import "./App.css";
import freeCodeCamp from "./images/logo.png";
import Boton from "./components/boton";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img className="freecodecomp-logo" src={freeCodeCamp} alt="" />
      </div>
      <div className="container-principal">
        <Boton texto="Clic" />
        <Boton />
      </div>
    </div>
  );
}

export default App;
