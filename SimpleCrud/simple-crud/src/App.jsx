import { useEffect, useState } from "react";
import Listagem from "./components/listagem";
import ButtonAdicionar from "./components/buttonAdd";
import ButtonRemove from "./components/buttonRemove";
import ButtonEdit from "./components/buttonEdit";
import Forms from "./components/forms";

function App() {
  const [formsVisible, setFormsVisible] = useState(false);
  const [action, setAction] = useState();
  const [dadosSelected, setDadosSelected] = useState([]);
  const [lista, setLista] = useState([
    {Nome: 'Caio', Idade: 20, Id: 1, Selected: false},
    {Nome: 'Davi', Idade: 30, Id: 2, Selected: false},
    {Nome: 'João', Idade: 40, Id: 3, Selected: false},
  ])

  useEffect(() => {
    const onlyDadosSelected = lista.filter(a => a.Selected == true);
    setDadosSelected(onlyDadosSelected);
  }, [lista]);

  return (
    <div className="App">
      <Listagem lista={lista} setLista={setLista}/> <br />
      <ButtonAdicionar 
       setFormsVisible={setFormsVisible}
       setAction={setAction}
      />
      <ButtonRemove 
       lista={lista} 
       setLista={setLista}
       dadosSelected={dadosSelected}
      />
      <ButtonEdit
       setFormsVisible={setFormsVisible}
       setAction={setAction}
       dadosSelected={dadosSelected}
      />
      {formsVisible ? 
        ( <Forms action={action} setFormsVisible={setFormsVisible} /> ) : (<></>) 
      }
    </div>
  );
}

export default App;
