import React from 'react'
import style from "./Component1.module.css"
import style1 from "./Component2.module.css"
export default function Component1() {
  return (
    <div className={style.container1}>
       <h1 className={style.heading1}>Welcome in the class</h1>
       <p className={style.para1}>Hey Hello Hi</p>
       <h1 className={style1.mini}>Hello Margaret</h1>
       <div className={style["mini-container"]}>de,jhghjgd</div>
    </div>
  )
}
