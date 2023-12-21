export default function Listagem({lista, setLista}){
    function exibirListagem(){
        const listagem = lista.map(a =>
            <li>
                <input  
                 type="checkbox" 
                 key={a.Id} 
                 checked={a.Selected}
                 value={a.Selected}
                 onChange={() => selecionarValor(a.Id)}
                />
                Nome: {a.Nome} |  Idade: {a.Idade}
            </li>
        );
        return listagem;
    }

    function selecionarValor(id){
        const updatedItems = lista.map(item => {
            if (item.Id === id) {
                return { ...item, Selected: !item.Selected };
            }
            return item;
        });
        setLista(updatedItems)
    }

    return (
        <>
            <div>
                { exibirListagem() }
            </div>
        </>
    )
}