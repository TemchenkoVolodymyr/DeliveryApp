import React from 'react';

const KfcSection = () => {

  let data = [
    {
      product: "Wings Hot",
      price: 25.5,
      id: 7,
      image: 'https://th.bing.com/th/id/OIP.5HG97isK5ba4xdhofrbk3AHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
    },
    {
      product: "Dja Dja KFC",
      price: 55,
      id: 8,
      image: 'https://th.bing.com/th/id/OIP.33EPLPBHm8x63_K_WRtUkQHaFP?w=222&h=180&c=7&r=0&o=5&pid=1.7'
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

export default KfcSection;