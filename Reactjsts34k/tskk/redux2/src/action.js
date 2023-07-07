export const increment = ()=>{
    return {
        type:"INCREMENT"
    }
}
export const decrement = ()=>{
    return {
        type:"DECREMENT"
    }
}
export const ADDTODO = (todo)=>{
    return {
        type:"ADDTODO",
        payload:todo,
    }
}
export const REMOVETODO =(todoId)=>{
    return {
        type:"REMOVETODO",
        payload:todoId
    }
}