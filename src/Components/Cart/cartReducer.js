import {initialState} from "../../redux/initialState";
export const SET_CURRENT= "SET_CURRENT";
export const CLEAR_COUNT = "CLEAR_COUNT"
export const cartReducer = (currentNum = initialState.currentOrders,action) => {
    switch (action.type) {
        case SET_CURRENT : {
            return action.data
        }
        case CLEAR_COUNT : {
            return currentNum = 0
        }
        default:return currentNum
    }
}

export const clearCountAction = () => {
    return{
        type:CLEAR_COUNT
    }
}