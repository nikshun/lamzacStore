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
            <div className={css.social}>Email</div>
            <div className={css.social}>OLX</div>
          </div>
          <div className={css.numbers}>
            <div className={css.name}>Контакты</div>
            <div className={css.number}>+380 (68) 729 15 97</div>
            <div className={css.number}>+380 (67) 248 22 14</div>
            <div className={css.number}>+380 (66) 067 03 01</div>
          </div>
          <div className={css.information}>
            <div className={css.name}>Информация</div>
            <div className={css.text}>
              В любой момент вы можете написать нам в соц сетях или позвонить
              нам по данным телефонам. Если у вас возникли вопросы, и ответы вы
              не нашли на нашем сайте или в воду сетях, то сообщите нам их также
              сообщением или с помощью телефонного звонка.
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
