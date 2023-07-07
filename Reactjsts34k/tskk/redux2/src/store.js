import { combineReducers, createStore } from "redux";
import todoReducer from "./Reducers/todoReducer";
import counterReducer from "./Reducers/Counterreducer";

const reducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer
})

const store = createStore(reducer)
export default store