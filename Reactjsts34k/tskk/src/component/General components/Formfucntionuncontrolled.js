import React, { useRef, useState } from 'react'

export default function Formfucntionuncontrolled() {
    const fname = useRef()
    const lname = useRef()
   
    const [boolean,setBoolean] = useState(false)
    console.log(fname.current)
    const submitForm =(event)=>{
        event.preventDefault()
        setBoolean(true)
    
        console.log(fname.current.value,fname.current.placeholder,
            lname.current.value)
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Firstname' ref={fname} /> <br /><br />
            <input type="text" placeholder='LastName' ref={lname}/><br /><br />
            <button type='submit'>Submit</button>
        </form>
        {boolean?(<h1>{fname.current.value}</h1>):"what"}
    </div>
  )
}
