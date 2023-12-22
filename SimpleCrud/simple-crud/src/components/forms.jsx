import { useEffect, useState } from "react"

export default function Forms({action, setFormsVisible, lista, setLista, dadosSelected}){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    useEffect(() =>{
        if(dadosSelected.length > 0){
            setNome(dadosSelected[0].Nome);
            setIdade(dadosSelected[0].Idade);
        }
    }, [dadosSelected])

    function SaveByAction(){
        if(action === 'Criar'){
            const listagem = [];
            listagem.push({
                Nome: nome, Idade: idade, Selected: false,
                Id: lista.length > 0 ? lista[lista.length -1].Id +1 : 0
            })
            const novaLista = listagem.concat(lista);
            setLista(novaLista);
            zerarForms();
        }
        else {
            const updatedItems = lista.map(item => {
                if (item.Id === dadosSelected[0].Id) {
                    return { ...item, Nome: nome, Idade: idade, Selected: false };
                }
                return item;
            });
            setLista(updatedItems);
            zerarForms();
        }
    }

    function getLastId(){
        return 
    }

    function zerarForms(){
        setNome('');
        setIdade(0);
        setFormsVisible(false);
    }

    return (
        <div>
            <hr></hr>
            <h3>{action} Formulário</h3>
            <p>Nome:</p>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome}/>
            <p>Idade:</p>
            <input type="number" onChange={(e) => setIdade(e.target.value) } value={idade}/> 
            <div><br />
                <button onClick={() => setFormsVisible(false)}>Fechar</button>
                <button onClick={() => {SaveByAction()}}>Salvar</button>
            </div>
            <hr></hr>
        </div>
    )
}