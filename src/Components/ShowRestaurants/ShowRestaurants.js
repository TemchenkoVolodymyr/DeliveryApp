import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartAC} from "../Cart/CartAC";
import {totalPriceAC} from "../../Pages/CartPage/cartPageAC";
import {useParams} from "react-router";
import style from "./ShowRestaurants.module.scss"


const ShowRestaurants = () => {

    let param = useParams()
    console.log(param)

    let restaurantData = useSelector((state) => state.restaurants);
    if (param.showRestaurants === "mcdonalds") {
        restaurantData = restaurantData.mcDonalds;
    } else if (param.showRestaurants === "kfc") {
        restaurantData = restaurantData.kfc;
    } else if (param.showRestaurants === "kebab") {
        restaurantData = restaurantData.kebab;
    } else if (param.showRestaurants === "mcdays") {
        restaurantData = restaurantData.mcdays;

    }

    let dispatch = useDispatch()
    const addToCart = (e) => {
        let getParseData;
        let getData = localStorage.getItem('product');
        if (getData) {
            getParseData = JSON.parse(getData)
        } else {
            getParseData = []
        }

        for (let el of restaurantData) {
            if (el.id === Number(e.target.id)) {
                let index = getParseData.findIndex(item => item.id === Number(e.target.id))
                if (index === -1) {
                    getParseData.push(el)
                    dispatch(cartAC(getParseData))
                    dispatch(totalPriceAC(el.price))
                } else {
                    getParseData.splice(index, 1)
                    dispatch(cartAC(getParseData))
                }

            }
        }

        localStorage.setItem('product', JSON.stringify(getParseData))
    }
console.log(restaurantData)
    return (
        <div className={style.container}>
            {restaurantData && restaurantData.map(item => <div className={style.wrapper}>
                <img src={item.image} alt="image-product"/>
                <h3>{item.product}</h3>
                <p>Price of product {item.price}$</p>
                <button id={`${item.id}`} onClick={(e) => addToCart(e)}>add to cart</button>
            </div>)}
        </div>
    );
};

export default ShowRestaurants;