import {initialState} from "../../redux/initialState";

export const SET_CART_DATA = "SET_CART_DATA";
export const REMOVE_CART_DATA = "REMOVE_CART_DATA "

export const cartPageReducer = (cart = initialState.cart, action) => {
  switch (action.type) {

    case SET_CART_DATA : {
      return [...cart, action.data]
    }

    default :
      return cart
  }
}

export const restaurantsReducer = (rest = initialState.restaurants,action) => {
  switch (action.type) {

    default :
      return rest
  }
}