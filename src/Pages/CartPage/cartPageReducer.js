import {initialState} from "../../redux/initialState";

export const SET_CART_DATA = "SET_CART_DATA";
export const REMOVE_CART_DATA = "REMOVE_CART_DATA "

export const cartPageReducer = (cart = initialState.cart, action) => {
  switch (action.type) {

    case SET_CART_DATA : {
      return [...cart, action.data]
    }
    case REMOVE_CART_DATA : {
      console.log(action.id)
      console.log(cart)
      return cart.splice(0,action.id)
    }

    default :
      return cart
  }
}