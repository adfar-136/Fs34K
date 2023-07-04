import React, { useState } from 'react'
import styles from "./Login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import Inputform from '../InputForm/Inputform'
import { signInWithEmailAndPassword } from 'firebase/auth'
export default function Login() {
  const [errMsg,setErrMsg] = useState("")
  const [values,setValues] = useState({
    email:"",
    password:"",
  })
 const navigate = useNavigate()
  const handleSubmission =()=>{
    if(!values.email || !values.password){
      setErrMsg("fill All Fields")
      return
    }
    setErrMsg("")
    signInWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
       navigate("/todo")
    }).catch((err)=>{
      setErrMsg(err.message)
    })
     
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <Inputform type="email" label="Email" placeholder="Enter Your Email" 
        onChange={(event)=>
        setValues((prev)=>({...prev,email:event.target.value}))}/>
        <Inputform type="password" label="Password" placeholder="Enter Your Password"
        onChange={(event)=>
        setValues((prev)=>({...prev,password:event.target.value}))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errMsg}</b>
            <button onClick={handleSubmission}>Login</button>
           <div className={styles.account}>
              <p>Already have an Account?</p>
              <span>
                  <Link className={styles.link} to="/signup">SignUp</Link>
               </span>
           </div>
          </div>
      </div>


    </div>
  )
}
