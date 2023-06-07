import React, {useEffect, useState} from 'react';
import cart from "../../assets/cart.png"
import style from "./Cart.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Cart = () => {


  let getData = JSON.parse(localStorage.getItem('product'));

  let deleteData = useSelector((state) => state.deleteDataCart)
  console.log(deleteData)

  return (
    <NavLink to='cart' >
    <div className={style.container}>
      <img  src={cart} alt="cart-image"/> <span className={style.counter}>{getData ? getData.length : 0}</span>
    </div>
    </NavLink>
  );
};

export default Cart;