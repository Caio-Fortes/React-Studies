export default function ButtonEdit(
    {setFormsVisible, setAction, dadosSelected}){

    function verificarDadosSelecteds(){
        return dadosSelected.length > 0 && dadosSelected.length < 2 ? false : true;
    }
    function mostrarFormulario(){
        setAction('Editar');
        setFormsVisible(true);
    }

    return (
        <button disabled={verificarDadosSelecteds()} onClick={mostrarFormulario}>
            Editar 
        </button>
    )
}