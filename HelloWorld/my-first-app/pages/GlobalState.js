import { useState } from "react"

export default function GlobalState(){
    const [contador, setContador] = useState(0);

    return (
        <>
            <ButtonStateOne contador={contador} setContador={setContador} />
            <br />
            <Link contador={contador} setContador={setContador} />
        </>
    )
}

function ButtonStateOne({contador, setContador}){
    return (
        <>
            <button onClick={() => setContador(contador + 1)}>
                clicked me {contador}
            </button>
        </>
    )
}

function Link({contador, setContador}){
    return (
        <>
            <a onClick={() => setContador(contador + 1)}>
                clique me {contador}
            </a>
        </>
    )
}