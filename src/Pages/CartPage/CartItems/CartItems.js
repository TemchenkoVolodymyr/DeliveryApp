import React, {useState} from 'react';
import {totalPriceAC} from "../cartPageAC";
import {useDispatch, useSelector} from "react-redux";

const CartItems = (props) => {

    let [count, setCount] = useState(0);
    let dispatch = useDispatch()

    let {data, deleteItem} = props

    let price = useSelector((state) => state.total)
    let getData = JSON.parse(localStorage.getItem('product'));

    const incCountCart = (id) => {
        setCount(count + 1)
        getData.map(item => {
            if(item.id === id){
                dispatch(totalPriceAC(price + item.price))
            }
        })

    }
    const divCountCart = (id) => {
        if (count !== 0) {
            setCount(count - 1)
            getData.map(item => {
                if(item.id === id){
                    dispatch(totalPriceAC(price - item.price))
                }
            })

        }
    }
    return (
        <>
            <p>{data.product}</p>
            <p>{data.price}</p>
            <img src={data.image} alt="image"/>
            <p>{count}</p>
            <button onClick={() => incCountCart(data.id)}>+</button>
            <button onClick={() => divCountCart(data.id)}>-</button>
            <button onClick={() => deleteItem(data.id)}>delete product</button>
        </>
    );
};

export default CartItems;