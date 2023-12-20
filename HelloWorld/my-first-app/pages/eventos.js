export default function Eventos(){
    function alertClick(){
        alert('evento de click')
    };

    function changeValue(arg){
        alert(arg)
    };

    function keyClicked(){
        alert('vc apertou uma nova tecla!')
    };

    return (
        <>
            <div>
                <button onClick={alertClick}>
                    Evento de click!
                </button>
            </div> <br />

            <div>
                <p>Digite para chamar uma função</p> 
                <input type="text" onChange={(e) => changeValue(e.target.value)}/>
            </div> <br />

            <div>
                <p>ao clicar uma tecla</p> 
                <input type="text" onKeyDown={keyClicked}/>
            </div> <br />
        </>
    )
}