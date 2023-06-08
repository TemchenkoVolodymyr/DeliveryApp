import {combineReducers} from "redux";
import {cartPageReducer, deleteDataCart, restaurantsReducer} from "../Pages/CartPage/cartPageReducer";
import {cartReducer} from "../Components/Cart/cartReducer";


export default combineReducers({
  cart:cartPageReducer,
  restaurants : restaurantsReducer,
  deleteDataCart: deleteDataCart,
  currentCart : cartReducer,
})