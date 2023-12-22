export default function ButtonAdicionar(
    {setFormsVisible, setAction}){
    function mostrarFormulario(){
        setAction('Criar');
        setFormsVisible(true);
    }

    return (
        <button onClick={mostrarFormulario}>
            Adicionar
        </button>
    )
}