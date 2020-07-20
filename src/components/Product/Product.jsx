import React from "react";
import css from "./Product.module.css";
import Main from "./Main/Main";
import Information from "./Information/Information";
import Product_waves from "./Product_waves/Product_waves";
import Headband from "./BuyButton/BuyButton";

const Product = () => {
  return (
    <div className={css.product} id="product">
      <Main />
      <Information />
      <Product_waves />
    </div>
  );
};

export default Product;
