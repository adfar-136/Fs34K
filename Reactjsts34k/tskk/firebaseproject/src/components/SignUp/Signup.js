import React, { useState } from 'react'
import styles from "./Signup.module.css"
import Inputform from '../InputForm/Inputform'
import { Link } from 'react-router-dom'
export default function Signup() {
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:""
  })
  const [errMsg,setErrMsg] = useState("")
  const handleSubmission =()=>{
    if(!values.name || !values.email ||!values.password){
      setErrMsg("Fill All Fields")
      return
    }
    setErrMsg("")
  }
  return (
  
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>SignUp Page</h1>
          <Inputform type="text" label="Name" placeholder="Enter Your Name"
          onChange={(event)=>
          setValues((prev)=>({...prev,name:event.target.value}))
          }/>
          <Inputform type="email" label="Email" placeholder="Enter Your Email"
          onChange={(event)=>
          setValues((prev)=>({...prev,email:event.target.value}))}/>
          <Inputform type="password" label="Password" placeholder="Enter Your Password"
          onChange={(event)=>
          setValues((prev)=>({...prev,password:event.target.value}))}
          />
          <div className={styles.footer}>
            <b className={styles.error}>{errMsg}</b>
            <button onClick={handleSubmission}>SignUp</button>
           <div className={styles.account}>
              <p>Already have an Account?</p>
              <span>
                  <Link className={styles.link} to="/login">Login</Link>
               </span>
           </div>
          </div>
        </div>

      </div>
   
  )
}
