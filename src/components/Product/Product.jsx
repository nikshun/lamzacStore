import React from "react";
import css from "./Product.module.css";
import Main from "./Main/Main";
import Information from "./Information/Information";
import Headband from "./BuyButton/BuyButton";
import Fade from "react-reveal/Fade";

const Product = () => {
  return (
    <div className={css.product} id="product">
      <Fade>
        <Main />
        <Information />
      </Fade>
    </div>
  );
};

export default Product;
