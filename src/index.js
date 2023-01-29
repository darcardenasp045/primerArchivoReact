import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Counter = ({ number }) => {
  return <h1>{number} </h1>;
};

const App = (props) => {
  const [contadorValue, contadorUpdate] = useState(0);

  /*Esto es lo mismo que en la linea anterior
  const contador = useState(13);
  const contadorValue = contador[0];
  const contadorUpdate = contador[1];
*/
  const handleClick = () => {
    contadorUpdate(contadorValue + 1);
  };
  const handleClickReset = () => {
    contadorUpdate(0);
  };

  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? "Es par " : "No es par";

  return (
    <div>
      <p>El valor de aprender a trabajar con react</p>
      <Counter number={contadorValue} />
      <p>Es una maravilla que se actualize solo el numero del contador</p>
      <p>{mensajePar} </p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
