import {combineReducers} from "redux";
import {cartPageReducer, restaurantsReducer} from "../Pages/CartPage/cartPageReducer";


export default combineReducers({
  cart:cartPageReducer,
  restaurants : restaurantsReducer,
})