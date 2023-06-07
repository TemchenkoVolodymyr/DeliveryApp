import React from 'react';
import Navigations from "./Navigations/Navigations";
import {Outlet} from "react-router";
import style from './Layout.module.scss'
import Cart from "../Components/Cart/Cart";

const Layout = () => {


  return (
    <>
      <div className={style.containerTopLayout}>

        <div className={style.containerNav}>
          
          <Navigations/>
        </div>

        <div className={style.containerMain}>
          <Outlet/>
        </div>
        <div>
          <Cart />
        </div>

      </div>
    </>
  )
};

export default Layout;