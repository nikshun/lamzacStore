import React, { Component } from "react";
import css from "./Gallery.module.css";
import stock from "../photos/stock.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <div className={css.gallery}>
        <img src={stock} className={css.stock} />
      </div>
    );
  }
}
