import React, { useState } from 'react'
import "./Project.css"
export default function Project1() {
    const [myStyle,setMystyle]= useState({
        backgroundColor:"white",
        color:"black"
    })
    const [myStyle1,setMystyle1]= useState({
        backgroundColor:"white",
        color:"black"
    })
    const [btnText,setBtnText]  = useState("Dark")
    const [btnText1,setBtnText1]  = useState("Dark")
    const [text,setText] = useState("")
    const toggle = ()=>{
        if(myStyle.color === "black"){
            setMystyle({
                backgroundColor:"black",
                color:"white"})
            setBtnText("Light")
        }
        else{
            setMystyle({
                backgroundColor:"white",
                color:"black"
            })
            setBtnText("Dark")
        }
    }
    const toggle1 = ()=>{
        if(myStyle1.color === "black"){
            setMystyle1({
                backgroundColor:"black",
                color:"white"})
            setBtnText1("Light")
        }
        else{
            setMystyle1({
                backgroundColor:"white",
                color:"black"
            })
            setBtnText1("Dark")
        }
    }
    const onChange =(event)=>{
        setText(event.target.value)
    }
    const onLower =()=>{
        console.log("lower click clicked")
        const lowerCase= text.toLowerCase();
        setText(lowerCase)
    }
    const onUpper =()=>{
        console.log("lower click clicked")
        const upperCase= text.toUpperCase();
        setText(upperCase)
    }
    const onCopy =()=>{
        const text = document.getElementById("box")
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const onClear =()=>{
        setText("")
    }
  return (
    <div style={myStyle}>
        <div  className="container">
            <h1>Welcome</h1>
            <button onClick={toggle}>{btnText}</button>
            
        </div>
        <div style={myStyle1} className="minicontainer">
                <div className="topsection">
                   <h1>Welcome</h1>
                   <button onClick={toggle1}>{btnText1}</button>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum.</div>
        </div>
        <div className="textcontainer">
            <div className="textarea">
                <textarea id='box' value={text} 
                onChange={(event)=>{onChange(event)}}
                  cols="81" rows="10" >
                </textarea>
            </div>
            <div className="btncontainer">
                <button onClick={onLower}>LowerCase</button>
                <button onClick={onUpper}>UpperCase</button>
                <button onClick={onCopy}>Copy</button>
                <button onClick={onClear}>Clear</button>
            </div>
        </div>
    </div>
  )
}
