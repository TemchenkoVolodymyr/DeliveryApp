import {combineReducers} from "redux";
import {cartPageReducer} from "../Pages/CartPage/cartPageReducer";


export default combineReducers({
  cart:cartPageReducer,
})