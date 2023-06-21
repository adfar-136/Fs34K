import React, { useReducer } from 'react'
const reducerFunction =(state,action)=>{
    // console.log("State",state)
    // console.log("Action",action)
    // if(action.type === "Add"){
    //     return {
    //         count : state.count + 1
    //     }
    // }
    // else if(action.type === "Minus"){
    //     return {
    //         count:state.count -1
    //     }
    // }
    // else if(action === "Add"){
    //     return {
    //         count:state.count+5
    //     }
    // }
    // else if(action === "Minus"){
    //     return {
    //         count:state.count-5
    //     }
    // }
    return state = action

}
export default function UseReducer() {
    const [state,dispatch] = useReducer(reducerFunction,"black")
  return (
    <div style={{backgroundColor:state,border:"2px solid red"}}>
        
        <h1>{state.color}</h1>
        {/* <button onClick={()=>dispatch({type:"Add"})}>Add me</button>
        <button onClick={()=>dispatch({type:"Minus"})}>Minus me</button>
        <button onClick={()=>dispatch({type:"Add"})}>Like :{state.count}</button> */}
        <button onClick={()=>dispatch("red")}>Add me</button>
        <button onClick={()=>dispatch("blue")}>Minus me</button>
        <button onClick={()=>dispatch("pink")}>Minus me</button>
        <button onClick={()=>dispatch("orange")}>Minus me</button>
        <button onClick={()=>dispatch("green")}>Minus me</button>
        
    </div>
  )
}
