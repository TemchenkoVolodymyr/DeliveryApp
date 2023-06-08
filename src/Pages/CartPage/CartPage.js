import React, {useEffect, useState} from 'react';
import style from './CartPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteDataCart} from "./cartPageReducer";
import {removeDataAC} from "./cartPageAC";
import {cartAC} from "../../Components/Cart/CartAC";
import CartItems from "./CartItems/CartItems";


const CartPage = () => {

  let [count, setCount] = useState(0);

  let [parseData, setParseData] = useState(null)

  let [email, setEmail] = useState("")
  let [name, setName] = useState("")
  let [address, setAddress] = useState("")
  let [phone, setPhone] = useState("")

  let deleteData = useSelector((state) => state.deleteDataCart)
  let dispatch = useDispatch()


  useEffect(() => {
    let getData = localStorage.getItem('product');
    setParseData(JSON.parse(getData))
    dispatch(removeDataAC(parseData))

  }, [])

  const deleteItemCart = (id) => {

    for (let i = 0; i < parseData.length; i++) {
      if (parseData[i].id === id) {
        parseData.splice(i, 1)
        localStorage.setItem('product', JSON.stringify(parseData))
        dispatch(removeDataAC(parseData))
        dispatch(cartAC(parseData))
      }
    }
  }
  let totalPrice = 0
  parseData && parseData.map(item => {
    totalPrice += item.price
  })


  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  const changePhone = (e) => {
    setPhone(e.target.value)
  }

  const submitForm = () => {
    let form = {
      order:{
        email,
        name,
        address,
        phone
      }
    }
    localStorage.setItem('form', JSON.stringify(form))
    setName("")
    setEmail("")
    setAddress("")
    setPhone("")
  }

  return (
    <div className="container">
      <div className={"products"}>
        {parseData && parseData.map(item => <CartItems data={parseData} deleteItem={deleteItemCart}></CartItems>)}
        <p>TOTAL PRICE : {totalPrice} </p>
      </div>
      <div className={"form"}>
        <h1> ORDER PAGE</h1>
        <input placeholder="Name" value={name} onChange={changeName}/>

        <input placeholder="email" value={email} type="email" onChange={changeEmail}/>

        <input placeholder="Address" value={address} onChange={changeAddress}/>

        <input placeholder="phone" value={phone} type="number" onChange={changePhone}/>
        <button onClick={submitForm}>Send</button>
      </div>
    </div>
  );
};

export default CartPage;