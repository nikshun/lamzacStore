import React from "react";
import css from "./Main.module.css";
import CarouselBox from "./CarouselBox/CarouselBox";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className={css.main} id="main">
      <Header className={css.header}/>
      <CarouselBox className={css.carousel}/>
    </div>
  );
};

export default Main;
