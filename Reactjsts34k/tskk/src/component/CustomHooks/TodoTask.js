import React, { useState } from 'react'
import useList from './useList'

export default function TodoTask() {
    const {list,push,pull} = useList()
    const [todo,setTodo] = useState("")
    console.log(todo)
    const handleSubmit =(e)=>{
        e.preventDefault()
       push(todo)
       setTodo("")
    }
  return (
    <div>
        <header>
            <form onSubmit={handleSubmit}>
                <h1>Welcome to my todo list application</h1>
                <input type="text" placeholder='Enter Your Task' value={todo}
                onChange={(e)=>setTodo(e.target.value)}/>
                <input type='submit' value="Submit"/>
            </form>
            {list.map((item,listIndex)=>{
                return (
                    <>
                <li key={listIndex}>{item} 
                <button onClick={()=>pull(listIndex)}>Remove</button></li> <br />
                </>
                )
            })}
        </header>
    </div>
  )
}
