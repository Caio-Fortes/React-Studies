export default function ButtonEdit({lista, setLista}){
    function verificarDadosSelecteds(){
        const dadosSelecionados = lista.filter(dado => dado.Selected);
        const desabilitar = dadosSelecionados.length > 0 ? false : true;
        return desabilitar;
    }
    
    return (
        <button disabled={verificarDadosSelecteds()}>
            Editar
        </button>
    )
}