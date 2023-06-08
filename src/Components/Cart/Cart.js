import React, {useEffect, useState} from 'react';
import cartImg from "../../assets/cart.png"
import style from "./Cart.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const Cart = () => {

    let current = useSelector((state) => state.currentCart)


    return (
        <NavLink to='cart'>
            <div className={style.container}>
                <img src={cartImg} alt="cart-image"/> <span
                className={style.counter}>{current ? current.length : 0}</span>
            </div>
        </NavLink>
    );
};

export default Cart;