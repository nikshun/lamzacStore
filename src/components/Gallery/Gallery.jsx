import React, { Component } from "react";
import css from "./Gallery.module.css";
import lamzac4 from "../photos/lamzac4.jpg";
import lamzac5 from "../photos/lamzac5.jpg";
import lamzac6 from "../photos/lamzac6.jpg";
import lamzac7 from "../photos/lamzac7.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <div className={css.gallery}>
        <a className={css.first}>
          <div>
            <img src={lamzac4} />
          </div>
        </a>
        <a className={css.second}>
          <div>
            <img src={lamzac5} />
          </div>
        </a>
        <div className={css.grid}>
          <a className={css.third}>
            <div>
              <img src={lamzac6} />
            </div>
          </a>
          <a className={css.fourth}>
            <div>
              <img src={lamzac7} />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
