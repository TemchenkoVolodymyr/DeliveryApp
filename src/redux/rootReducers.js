import {combineReducers} from "redux";
import {cartPageReducer, deleteDataCart, restaurantsReducer} from "../Pages/CartPage/cartPageReducer";


export default combineReducers({
  cart:cartPageReducer,
  restaurants : restaurantsReducer,
  deleteDataCart: deleteDataCart,
})