import {Link} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";



export type TodoItemType = {
    userId: number
    id : number
    title: string
    completed : boolean
}


export const todos: TodoItemType[] = [
    {id: 1, title: "Поесть пиццу", completed: false, userId: 1},
    {id: 3, title: "меня зовут Настя", completed: false, userId: 1},
]

const url  = "https://jsonplaceholder.typicode.com/todos"




export const Todos = () => {


    const [todo, setTodo] = useState<TodoItemType[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

async function fetchData() {
    try {
        setIsLoading(true)
        const result  =  await axios.get(url)
        setTodo(result.data.slice(0,5))
    } catch {

    }
    finally {
        setIsLoading(false)
    }
}


    useEffect(() => {
        fetchData()
    }, [])


    return <div className={"Todos"}>
        <h1 data-testid="location-title" className={"Title"}>Todo</h1>
        <Link data-testid="link_to_counter" to={"/counter"}>To Counter</Link>


        {(todo && !isLoading) &&  <div className={"TodoList"}>

            {todo.map((item) => <div role={"todoItem"} key={item.id}>
                {item.title}
            </div>)}
        </div>}

        {isLoading && <p>Loading....</p>}

    </div>
}