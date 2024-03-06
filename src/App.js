import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import FunctionSimples from './Exenplos/FunctionSimples';
import FunctionDupla from './Exenplos/FunctionDupla';
import Button from './Componentes/Button';

function App() {
  // const[variavel, functionParaMudarValorDaVariavel]=useState("Valor inicial");
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    console.log("useEffect chamado");
    setUseEffectCounter(useEffectCounter + 1);
  }, [logado]);

  const Logar = () => {
    setLogado(true);
  }
  const Deslogar = () => {
    setLogado(false);
  }

  return (
    <div className="App">

      <h1> useEffect foi chamado {useEffectCounter} vezes </h1>

      {/* If e else ternario para html */}
      {logado ? <p>Logado</p> : <p>Deslogado</p>}
      <Button tarefa={Logar} className="button gray"> Logar </Button>
      <div>
        <FunctionSimples></FunctionSimples>
        <FunctionDupla></FunctionDupla>
      </div>

    </div>
  );
}

export default App;
