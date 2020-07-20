import React from "react";
import css from "./Content.module.css";
import brand from "../photos/brand.png";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import Content_waves from "./Content_waves/Content_waves";

const Item = (props) => {
  return (
    <div className={css.bar}>
        <Link to={props.id} smooth={true} duration={1000}>
          {props.text}
        </Link>
    </div>
  );
};

const Content = () => {
  return (
    <div className={css.content} id="content">
      <div className={css.about}>
        <div className={css.text}>
          <h1>Надувной диван ламзак</h1>
          <div className={css.input}>
            Давно известно, что лень движет прогрессом. А лучше всего лениться
            на море, в горах или на даче, главное, чтобы было время, свежий
            воздух и диван. Надувной. Голландский дизайнер Marijn Oomen в 2010
            году придумал ламзак, что в переводе означает «ленивый человек».
          </div>
          <div className={css.button}>
              <Item text="Заказать" id="product" />
          </div>
        </div>
        <div className={css.main}>
          <img className={css.lamzac} src={brand} />
        </div>
      </div>
      <Content_waves />
    </div>
  );
};

export default Content;
