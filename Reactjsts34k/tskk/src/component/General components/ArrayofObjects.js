import React from 'react'
var arr =
  [
    ["Name","Age","Skills"],
    {name:"Sindhura",age:"20",skills:["HTML","CSS","JS"]},
    {name:"Arpit",age:"20",skills:["HTML","CSS","JS","React"]},
    {name:"Alex",age:"20",skills:["HTML","CSS","JS","Node"]}
]

export default function ArrayofObjects() {
  return (
    <div>
        <tr>
        {arr[0].map((item,index)=>{
          return (
            <th>{item}</th>
          )
        })}
        </tr>
        {arr.slice(1).map((item,index)=>{
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.skills.map((item1,index1)=>{
                        return (
                            <li>{item1}</li>
                        )
                    })}</td>
                </tr>
            )
        })}
    </div>
  )
}
