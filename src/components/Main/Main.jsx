import React from "react";
import css from "./Main.module.css";
import CarouselBox from "./CarouselBox/CarouselBox";
import NavBar from "./NavBar/NavBar";

const Main = () => {
  return (
    <div className={css.main} id="main">
      <NavBar className={css.navBar}/>
      <CarouselBox className={css.carousel}/>
    </div>
  );
};

export default Main;
