import {initialState} from "../../redux/initialState";
export const SET_CURRENT= "SET_CURRENT";
export const cartReducer = (currentNum = initialState.currentOrders,action) => {
    switch (action.type) {
        case SET_CURRENT : {
            return action.data
        }
        default:return currentNum
    }
}