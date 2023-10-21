import { ListTodo } from "../types"

interface Props {
    todos:ListTodo
}

const Todos = ({todos}) =>{
    return(
        <>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos