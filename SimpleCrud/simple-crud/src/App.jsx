import { useState } from "react";
import Listagem from "./components/listagem";
import ButtonAdicionar from "./components/buttonAdd";
import ButtonRemove from "./components/buttonRemove";
import ButtonEdit from "./components/buttonEdit";
import Forms from "./components/forms";

function App() {
  const [formsVisible, setFormsVisible] = useState(false);
  const [lista, setLista] = useState([
    {Nome: 'Caio', Idade: 20, Id: 1, Selected: false},
    {Nome: 'Davi', Idade: 30, Id: 2, Selected: false},
    {Nome: 'João', Idade: 40, Id: 3, Selected: false},
  ])

  return (
    <div className="App">
      <Listagem lista={lista} setLista={setLista}/> <br />
      <ButtonAdicionar 
       formsVisible={formsVisible} 
       setFormsVisible={setFormsVisible} 
      />
      <ButtonRemove 

      />
      <ButtonEdit />
      {formsVisible ? ( <Forms />) : (<></>) }
    </div>
  );
}

export default App;
