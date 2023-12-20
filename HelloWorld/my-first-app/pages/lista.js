const listTitles = [
    { titulo: 'titulo 1', id: 1},
    { titulo: 'titulo 2', id: 2},
    { titulo: 'titulo 3', id: 3},
    { titulo: 'titulo 4', id: 4}
]

export default function Lista(){
    const listItems = listTitles.map(title => 
        <li key={title.id}>  
            {title.titulo}
        </li>
    );
    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>
    )
}