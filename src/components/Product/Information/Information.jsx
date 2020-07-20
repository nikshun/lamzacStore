import React from "react";
import css from "./Information.module.css";
import BuyButton from "../BuyButton/BuyButton";

const Information = () => {
  return (
    <div className={css.info}>
      <div className={css.name}>Характеристики:</div>
      <ul>
        <li>- материал: Oxford PU 240d</li>
        <li>- в надутом виде: 190х90 см</li>
        <li>- в развернутом виде: 240х75 см</li>
        <li>- в переносной сумке: 10х20х35 см</li>
        <li>- вес Ламзака: 1.4 кг</li>
        <li>- максимальная нагрузка: 300 кг</li>
      </ul>
      <div className={css.buy}>
        <div className={css.cost}>Цена: 199</div>
        <BuyButton />
      </div>
    </div>
  );
};

export default Information;
