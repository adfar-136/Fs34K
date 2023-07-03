import React from 'react'
import Listrender from './Listrender';

export default function Next7Days(props) {
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        const diffTime = task.date - date;
        const diffDay = Math.ceil((diffTime)/(24*60*60*1000))
        if(diffDay > 0 && diffDay <8){
            return true
        }
    })
  return (
    <div>
        <h1>Tasks for Next 7 Days</h1>
        <Listrender list={filteredList}/>
    </div>
  )
}
