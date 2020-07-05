import React from "react";
import css from "./Header.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Item = (props) => {
  return (
    <div className={css.bar}>
      <h4 className={css.item}><AnchorLink href={props.id}>{props.text}</AnchorLink></h4>
    </div>
  );
};

const Header = (props) => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src="https://www.freelogodesign.org/file/app/client/thumb/60fb90db-7abe-4440-9f74-7217d14c5fe3_200x200.png?1593445042380" />
      </div>
      <div className={css.name}>
        <h1>
          LAMZAC<strong>.store</strong>
        </h1>
      </div>
      <div class={css.vl}></div>
      <Item text="Что это такое?" id="1"/>
      <Item text="Ламзаки" id="2"/>
      <Item text="Преимущества" />
      <Item text="Как надуть" />
      <Item text="Доставка и оплата" />
      <Item text="Отзывы" />
      <Item text="Контакты" />
    </header>
  );

};

export default Header;
