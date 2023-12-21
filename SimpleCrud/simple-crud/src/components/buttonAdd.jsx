export default function ButtonAdicionar({formsVisible, setFormsVisible}){
    function mostrarFormulario(){
        setFormsVisible(formsVisible = !formsVisible)
    }

    return (
        <button onClick={mostrarFormulario}>
            Adicionar
        </button>
    )
}