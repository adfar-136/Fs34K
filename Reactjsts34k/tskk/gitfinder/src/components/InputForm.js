import React, { useState } from 'react'

export default function InputForm({fetchData}) {
    const [username,setUsername] = useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()
      fetchData(username)
    }
  return (
    <form className='input-form' 
    onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter a GitHub UserName' 
      value={username}
      onChange={(event)=>
        setUsername(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
