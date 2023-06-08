import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartAC} from "../Cart/CartAC";


const McDonaldsSection = () => {


  let mcDonaldsData = useSelector((state) => state.restaurants);
  let dispatch = useDispatch()
  const addToCart = (e) => {
    let getParseData;
    let getData = localStorage.getItem('product');
    if (getData) {
      getParseData = JSON.parse(getData)
    } else {
      getParseData = []
    }

    for (let el of mcDonaldsData.mcDonalds) {
      if (el.id === Number(e.target.id)) {
        let index = getParseData.findIndex(item => item.id === Number(e.target.id))
        if(index === -1){
          getParseData.push(el)
          dispatch(cartAC(getParseData))
        }else{
          getParseData.splice(index,1)
          dispatch(cartAC(getParseData))
        }

      }
    }

    localStorage.setItem('product', JSON.stringify(getParseData))
  }

  return (
    <div>
      {mcDonaldsData.mcDonalds.map(item => <div>
        <img src={item.image} alt="image-product"/>
        <h3>{item.product}</h3>
        <p>Price of product {item.price}$</p>
        <button id={`${item.id}`} onClick={(e) => addToCart(e)}>add to cart</button>
      </div>)}
    </div>
  );
};

export default McDonaldsSection;