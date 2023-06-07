import React from 'react';


const McDonaldsSection = () => {


  let data = [
    {
      product: "Coca-Cola",
      price: 25.5,
      id: 1,
      image: 'https://th.bing.com/th/id/OPE.dCUMgLEznRCjTw300C300?w=200&h=220&rs=1&pid=21.1'
    },
    {
      product: "Sandwich",
      price: 30,
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.psD8eStPnGMYN1f3BCGqAQHaFP?w=256&h=181&c=7&r=0&o=5&pid=1.7'
    }
  ]


  const addToCart = (e) => {
    let getParseData;
    let getData = localStorage.getItem('product');
    if (getData) {
      getParseData = JSON.parse(getData)
    } else {
      getParseData = []
    }

    for (let el of data) {
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
      {data.map(item => <div>
        <img src={item.image} alt="image-product"/>
        <h3>{item.product}</h3>
        <p>Price of product {item.price}$</p>
        <button id={`${item.id}`} onClick={(e) => addToCart(e)}>add to cart</button>
      </div>)}
    </div>
  );
};

export default McDonaldsSection;