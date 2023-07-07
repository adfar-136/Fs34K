const todoReducer = (state=[],action)=>{
   switch(action.type){
    case "ADDTODO":
        return [...state,action.payload];
    case "REMOVETODO":
        return state.filter((todo)=>todo.id !== action.payload);
    default:
        return state;
   }
}
export default todoReducer