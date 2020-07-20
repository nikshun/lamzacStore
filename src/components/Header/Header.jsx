import React from "react";
import css from "./Header.module.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

const Item = (props) => {
  return (
    <div className={css.bar}>
      <h4 className={css.item}>
        <Link to={props.id} smooth={true} duration={1000}>
          {props.text}
        </Link>
      </h4>
    </div>
  );
};

const Header = (props) => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/60fb90db-7abe-4440-9f74-7217d14c5fe3_200x200.png?1593445042380"
          onClick={() => scroll.scrollToTop()}
        />
      </div>
      <div className={css.name}>
        <h1 onClick={() => scroll.scrollToTop()}>
          LAMZAC<strong>.store</strong>
        </h1>
      </div>
      <div className={css.items}></div>
      <Item text="Преимущества" id="advantage" />
      <Item text="Ламзаки" id="product" />
      <Item text="Как надуть" id="enjoyment" />
      <Item text="Доставка и оплата" id="description" />
      <Item text="Отзывы" id="feedback" />
      <Item text="Контакты" id="contact" />
    </header>
  );
};

export default Header;
