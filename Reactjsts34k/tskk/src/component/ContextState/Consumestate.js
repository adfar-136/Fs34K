// import React from 'react'
// import { MyContext } from './ContextState'
// export default function Consumestate() {
//   return (
//     <div>
//         <MyContext.Consumer>
//             {({state,setState})=>{
//               return (
//                 <div>
//                 <h1>state: {state}</h1>
//                 <button onClick={()=>setState("Khan")}>Change</button>
//                 </div>
//               )
//             }}
//         </MyContext.Consumer>
//     </div>
//   )
// }

import React, { useContext } from 'react'
import { MyContext } from './ContextState'

export default function Consumestate() {
  const {state,setState,name,setName} = useContext(MyContext)
  // const {name,setName} = useContext(MyContext1)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState("hello")}>Change</button>
      <h1>{name}</h1>
      <button onClick={()=>setName("dgfdfgd")}>Change</button>
    </div>
  )
}
