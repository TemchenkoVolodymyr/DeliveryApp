import {REMOVE_CART_DATA, SET_CART_DATA} from "./cartPageReducer";

export const cartPageAC = (data) => {
  return{
    type:SET_CART_DATA,
    data:data
  }
}
export const removeDataAC = (id) => {
  return{
    type:REMOVE_CART_DATA,
    id:id
  }
}