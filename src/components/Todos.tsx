interface Todo {
    id:number,
    title:string,
    completed:boolean
}


const Todos = ({todos}) =>{
    console.log(todos)
    return(
        <ul>
            {todos.map(todo => {
                <li key={todo.id}>
                    {todo.title}
                </li>
            })}
        </ul>
    )
}

export default Todos