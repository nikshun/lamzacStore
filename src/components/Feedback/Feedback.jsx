import React from "react";
import css from "./Feedback.module.css";
import Item from "./Item/Item";
// import Enjoyment_waves from "./Enjoyment_waves/Enjoyment_waves";

const Feedback = (props) => {
  return (
    <div className={css.feedback} id="feedback">
      <div className={css.componentName}>Отзывы</div>
      <Item/>
    </div>
  );
};

export default Feedback;
