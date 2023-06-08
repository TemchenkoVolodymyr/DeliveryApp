import {REMOVE_CART_DATA, SET_CART_DATA, SET_TOTAL_PRICE} from "./cartPageReducer";

export const cartPageAC = (data) => {
  return{
    type:SET_CART_DATA,
    data:data
  }
}
export const removeDataAC = (data) => {
  return{
    type:REMOVE_CART_DATA,
    data:data
  }
}

export const totalPriceAC = (price) => {
  return{
    type:SET_TOTAL_PRICE,
    total:price
  }
}