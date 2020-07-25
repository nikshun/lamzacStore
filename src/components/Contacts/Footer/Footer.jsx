import React from "react";
import css from "./Footer.module.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Item = (props) => {
  return (
    <div className={css.bar}>
      <div className={css.item}>
        <Link to={props.id} smooth={true} duration={1000}>
          {props.text}
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={css.footer}>
      <Fade>
        <div className={css.main}>
          <div className={css.menu}>
            <div className={css.name}>Категории</div>
            <Item text="Преимущества" id="advantage" />
            <Item text="Ламзаки" id="product" />
            <Item text="Как надуть" id="enjoyment" />
            <Item text="Доставка и оплата" id="description" />
            <Item text="Отзывы" id="feedback" />
          </div>
          <div className={css.location}>
            <div className={css.name}>Соц-сети</div>
            <div className={css.social}>Инстаграм</div>
            <div className={css.social}>Фейсбук</div>
            <div className={css.social}>Вайбер</div>
            <div className={css.social}>OLX</div>
          </div>
          <div className={css.numbers}>
            <div className={css.name}>Контакты</div>
            <div className={css.number}>(067) XXX-XXX-XXX</div>
            <div className={css.number}>(095) XXX-XXX-XXX</div>
            <div className={css.number}>(073) XXX-XXX-XXX</div>
          </div>
          <div className={css.information}>
            <div className={css.name}>Информация</div>
            <div className={css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              optio modi nisi ea architecto. Quasi unde laborum fugit rem
              quaerat.
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
