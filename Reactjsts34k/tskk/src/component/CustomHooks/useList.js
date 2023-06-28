import { useState } from "react"

const useList =()=>{
    const [list,setList] = useState(["Adfar","Raskkk"])
    const push =(value)=>{
        const newList = list.concat(value)
        setList(newList)
    }
    const pull = (index)=>{
        const newList = list.filter((listItem,listIndex)=>{
            return listIndex !== index;
        })
       setList(newList)
    }
    return {
        list:list,
        push:push,
        pull:pull
    }
}
export default  useList;