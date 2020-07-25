import React, { Component } from "react";
import css from "./Captions.module.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Caption = (props) => {
  return (
    <div className={css.bar}>
      <button className={css.button}>
        <h4 className={css.caption}>
          <Link to={props.id} smooth={true} duration={1000}>
            {props.text}
          </Link>
        </h4>
      </button>
    </div>
  );
};

const CaptionDD = (props) => {
  return (
    <div className={css.dropdown}>
      <button className={css.button}>
        <h4 className={css.caption}>
          <Link to={props.id} smooth={true} duration={1000}>
            {props.text}
          </Link>
        </h4>
      </button>
      <Fade bottom>
        <div className={css.content}>
            <Link to="relax" smooth={true} duration={1000}>
              {props.a1}
            </Link>
          <Link to="production" smooth={true} duration={1000}>
            {props.a2}
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default class Captions extends Component {
  render() {
    return (
      <div className={css.captions}>
        <CaptionDD
          text="Преимущества"
          id="advantage"
          a1="Отдых"
          a2="Качество"
        />
        <Caption text="Ламзаки" id="product" />
        <Caption text="Как надуть" id="enjoyment" />
        <Caption text="Доставка и оплата" id="description" />
        <Caption text="Отзывы" id="feedback" />
        <Caption text="Контакты" id="contacts" />
      </div>
    );
  }
}
