export default function ButtonRemove({lista, setLista}){

    function verificarDadosSelecteds(){
        const dadosSelecionados = lista.filter(dado => dado.Selected);
        const desabilitar = dadosSelecionados.length > 0 ? false : true;
        return desabilitar;
    }
    function deletarDados(){
    }

    return (
        <button 
         disabled={verificarDadosSelecteds()}
         onClick={() => deletarDados()}
        >
            Remover
        </button>
    )
}