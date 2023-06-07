import React from 'react';
import cart from "../../assets/cart.png"
import style from "./Cart.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Cart = () => {

  let cartData = useSelector((state) => state.cart)

  return (
    <NavLink to='cart' >
    <div className={style.container}>
      <img  src={cart} alt="cart-image"/> <span className={style.counter}>{cartData.length}</span>
    </div>
    </NavLink>
  );
};

export default Cart;