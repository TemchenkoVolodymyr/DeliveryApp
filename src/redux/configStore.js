import {createStore} from "redux";
import reducer from "./rootReducers"
import {initialState} from "./initialState";

 const store = createStore(reducer, initialState)

export default store