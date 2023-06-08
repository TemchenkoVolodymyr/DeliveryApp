import React, {useState} from 'react';
import {totalPriceAC} from "../cartPageAC";
import {useDispatch, useSelector} from "react-redux";
import style from "./CartItems.module.scss"

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
            <p className={style.title}>{data.product}</p>
            <p className={style.price}>{data.price} $</p>
            <img src={data.image} alt="image" className={style.image}/>
            <p className={style.count}>{count}</p>
            <div className={style.buttons}>
            <button onClick={() => incCountCart(data.id)}>+</button>
            <button onClick={() => divCountCart(data.id)}>-</button>
            <button onClick={() => deleteItem(data.id)}>Delete</button>
            </div>
        </>
    );
};

export default CartItems;