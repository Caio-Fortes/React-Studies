export default function ButtonRemove(
    {lista, setLista, dadosSelected}){

    function verificarDadosSelecteds(){
        const desabilitar = dadosSelected.length > 0 ? false : true;
        return desabilitar;
    }
    function deletarDados() {
        //filter para criar um novo valor para o react identificar como um novo valor
        //some para verificar se pelo menos um item do array é true para a validação de ids
        setLista(lista.filter(item => !dadosSelected.some(selected => selected.Id === item.Id)));
    }

    return (
        <button 
         disabled={verificarDadosSelecteds()}
         onClick={() => deletarDados()}
        > Remover
        </button>
    )
}