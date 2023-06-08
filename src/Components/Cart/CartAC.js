import {SET_CURRENT} from "./cartReducer";

export const cartAC = (data) => {
    return{
        type:SET_CURRENT,
        data:data
    }
}