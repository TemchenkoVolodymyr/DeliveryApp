import React from 'react';
import {useSelector} from "react-redux";

const KebabSection = () => {

  let kebabData = useSelector((state) => state.restaurants);


  const addToCart = (e) => {
    let getParseData;
    let getData = localStorage.getItem('product');
    if (getData) {
      getParseData = JSON.parse(getData)
    } else {
      getParseData = []
    }

    for (let el of kebabData.kebab) {
      if (el.id === Number(e.target.id)) {
        let index = getParseData.findIndex(item => item.id === Number(e.target.id))
        if(index === -1){
          getParseData.push(el)
        }else{
          getParseData.splice(index,1)
        }

      }
    }

    localStorage.setItem('product', JSON.stringify(getParseData))
  }

  return (
    <div>
      {kebabData.kebab.map(item => <div>
        <img src={item.image} alt="image-product"/>
        <h3>{item.product}</h3>
        <p>Price of product {item.price}$</p>
        <button id={`${item.id}`} onClick={(e) => addToCart(e)}>add to cart</button>
      </div>)}
    </div>
  );
};

export default KebabSection;