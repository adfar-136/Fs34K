import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <li ><Link to="/login" className={styles.list}>Login</Link> </li><br /><br />
      <li><Link to="/signup" className={styles.list}>Signup</Link></li>
    </div>
  )
}
