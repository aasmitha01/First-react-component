import { useEffect,useState } from "react";
import TodoCard from "../Components/TodoCard";
import "../Todos.css";
function Todos(){
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>setTodos(data.slice(0,10)));
    },[]);
    return(
        <div className="todo-grid">
            {todos.map(todo=>(
                <TodoCard Key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}
export default Todos;