import React, { useState } from 'react'
import styles from "./Signup.module.css"
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function Signup() {
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:""
  })
  const [btnDisabled,setBtnDisabled] = useState(false)
  const navigate = useNavigate()
  const [errMsg,setErrMsg] = useState("")
  const handleSubmission =()=>{
    if(!values.name || !values.email ||!values.password){
      setErrMsg("Fill All Fields")
      return
    }
    setErrMsg("")
    setBtnDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
      const user = res.user;
      console.log(user)
      updateProfile(user,{
        displayName:values.name
      })
      navigate('/login')
    }).catch((err)=>{
      setBtnDisabled(false)
      setErrMsg(err.message)
    })
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
            <button onClick={handleSubmission} disabled={btnDisabled}>SignUp</button>
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
