import React, { useRef, useState } from 'react'

export default function Inbox(props) {
    const [newTask,setNewTask] = useState(false)
    const titleRef = useRef()
    const calendarRef = useRef()
    const addHandler =()=>{
        setNewTask(true)
    }
    const cancelHandler =()=>{
        setNewTask(false)
    }
    const taskHandler = (e)=>{
        e.preventDefault()
        if(titleRef.current.value === ""){
            alert('Please add a task')
            return;
        }
        const newObj = {
            number : props.list.length +1,
            title:titleRef.current.value,
            date : new Date(calendarRef.current.value)
        }
        props.append(newObj)
        setNewTask(false)

    }
  return (
    <div>
        <br />
        {!newTask && (
            <button className='btn' onClick={addHandler}>+Add Task</button>
        )}
        {newTask && (
            <form>
                <input type="text" ref={titleRef} placeholder='Enter your task' />
                <div>
                    <button className='btn' onClick={taskHandler}>Add New Task</button>
                    <button className='btn' onClick={cancelHandler}>Cancel</button>
                    <input ref={calendarRef} type="date" defaultValue="2023-06-29"/>
                </div>
            </form>
        )}
        <div>
            <br />
            <h1>All Inbox Tasks</h1>
            <br />
            {props.list.map((item)=>{
                return (
                    <div key={item.number}>
                        {item.title} {item.date.toLocaleDateString()}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
