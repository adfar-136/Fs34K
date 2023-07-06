const initialState = {
    backgroundColor:"blue"
}
const backgroundReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'setBackgrounColor':
            return {
                ...state,
                backgroundColor:action.payload,
            }
        default:
            return state
    }
}

export default backgroundReducer;