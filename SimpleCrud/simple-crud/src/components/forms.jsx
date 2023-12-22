export default function Forms({action, setFormsVisible}){

    function SaveByAction(){
        if(action == 'Criar'){
            
        }
        else{

        }
    }

    return (
        <div>
            <hr></hr>
            <h3>{action} Formulário</h3>
            <p>Nome</p>
            <input type="text" />
            <p>Idade</p>
            <input type="text" /> 
            <div><br />
                <button onClick={() => setFormsVisible(false)}>Voltar</button>
                <button onClick={SaveByAction()}>Salvar</button>
            </div>
        </div>
    )
}