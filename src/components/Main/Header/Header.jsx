import React, { Component } from "react";
import css from "./Header.module.css";
import logo from "../../photos/logo.png";
import Captions from "./Captions/Captions";

export default class Header extends Component {
  render() {
    return (
      <div className={css.header}>
        <img src={logo} className={css.logo} />
        <Captions className={css.captions} />
      </div>
    );
  }
}
