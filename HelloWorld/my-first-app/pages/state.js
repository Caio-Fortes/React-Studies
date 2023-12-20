import { useState } from "react"

export default function StateComponent(){
    const [count, setCount] = useState(0); 

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click para acrescentar
            </button>
        </>
    )
}