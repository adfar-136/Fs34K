import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTODO,REMOVETODO } from './action'
export default function Todo() {
    const [todoText,setTodoText] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)
    const handleTodo=()=>{
        if(todoText !== ""){
            const newTodo = {
                id: Math.floor(Math.random()*1000),
                text : todoText
            }
            dispatch(ADDTODO(newTodo))
            setTodoText("")

        }
    }
    const handleRemove = (todoID)=>{
        dispatch(REMOVETODO(todoID))
    }
  return (
    <div>
        <h1>Todo List Application</h1>
        <input type="text" 
        value={todoText}
        onChange={(e)=>setTodoText(e.target.value)}/>
        <button onClick={handleTodo}>Add Todo</button>
        <ul>

            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>handleRemove(todo.id)}>Remove ITEm</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
