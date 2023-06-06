import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Navigations.module.scss"

const Navigations = () => {
  return (
    <>
      <div className={style.container}>
    <NavLink to="mcdonalds">McDonalds</NavLink>
    <NavLink to="kfc">KFC</NavLink>
    <NavLink to="kebab">Kebab</NavLink>
    <NavLink to="mcdays">McDays</NavLink>
      </div>
    </>

  );
};

export default Navigations;