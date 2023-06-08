export const initialState = {
  restaurants : {
    kfc : [
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
      ],
    mcDonalds : [
      {
        product: "Coca-Cola",
        price: 25.5,
        id: 7,
        image: 'https://th.bing.com/th/id/OPE.dCUMgLEznRCjTw300C300?w=200&h=220&rs=1&pid=21.1'
      },
      {
        product: "Sandwich",
        price: 55,
        id: 8,
        image: 'https://th.bing.com/th/id/OIP.psD8eStPnGMYN1f3BCGqAQHaFP?w=256&h=181&c=7&r=0&o=5&pid=1.7'
      }
    ],
    kebab:[
      {
        product: "Turkish Keb",
        price: 22.5,
        id: 5,
        image: 'https://th.bing.com/th/id/OIP.ia3EbF_a9A0zSSe_VKmTowHaE8?w=225&h=180&c=7&r=0&o=5&pid=1.7'
      },
      {
        product: "Dja Dja Tasty",
        price: 50,
        id: 6,
        image: 'https://th.bing.com/th/id/OIP.9EdKMXGwfIYkUqhgz69DBgHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7'
      }
    ],
mcdays:[
  {
    product: "Fries",
    price: 25.5,
    id: 3,
    image: 'https://th.bing.com/th/id/OIP.sQa_WWkKGUOpifhATWclvwHaGv?w=199&h=182&c=7&r=0&o=5&pid=1.7'
  },
  {
    product: "McTasty",
    price: 10,
    id: 4,
    image: 'https://th.bing.com/th/id/OIP.ShIunFmEmHdm2-wxEDhB_gHaFP?w=253&h=180&c=7&r=0&o=5&pid=1.7'}],},

  cart:[],
  cartDelete : null,
  currentOrders:null,
}