import React from 'react'
var arr = [
    ["Skill","Rating"],
    ["HTMl",10],
    ["CSS",9],
    ["JS",8],
    ["React",7]
]
export default function Array() {
  return (
    <div>
        <table  style={{border:"2px solid red",borderCollapse:"collapse8-"}}>
            <tr style={{border:"2px solid red"}}>
                {arr[0].map((item,index)=>{
                    return (
                        <th style={{border:"2px solid red"}} key={index}>{item}</th>
                    )
                })}
            </tr>
            <tbody >
                {arr.slice(1,5).map((item,index)=>{
                    return (
                        <tr style={{border:"2px solid red"}} key={index}>{item.map((x,i)=>{
                            return (
                                <td style={{border:"2px solid red"}} key={i}>{x}</td>
                            )
                        })}</tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
