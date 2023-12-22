export default function ButtonAdicionar(
    {setFormsVisible, setAction, dadosSelected}){
    function mostrarFormulario(){
        setAction('Criar');
        setFormsVisible(true);
    }
    function verificarDadosSelecteds(){
        return dadosSelected.length > 0 ? true : false;
    }

    return (
        <button onClick={mostrarFormulario} disabled={verificarDadosSelecteds()}>
            Adicionar
        </button>
    )
}