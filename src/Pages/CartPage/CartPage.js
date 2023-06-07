import React, {useEffect, useState} from 'react';


const CartPage = () => {


  let getData = localStorage.getItem('product');
  let parseData = JSON.parse(getData)

  const deleteItemCart = (id) => {

    for(let i = 0; i < parseData.length;i++ ) {
      if(parseData[i].id === id) {
        console.log('s')
        parseData.splice(i,1)
        localStorage.setItem('product', JSON.stringify(parseData))
      }
    }


  }

  return (
    <div>
      {parseData ? parseData.map(item => <div>
        <p>{item.product}</p>
        <p>{item.price}</p>
        <img src={item.image} alt="image"/>
        <button onClick={() => deleteItemCart(item.id)}>delete product</button>
      </div>) : null}
    </div>
  );
};

export default CartPage;