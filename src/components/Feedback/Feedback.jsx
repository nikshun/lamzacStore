import React from "react";
import css from "./Feedback.module.css";
import Item from "./Item/Item";
// import Enjoyment_waves from "./Enjoyment_waves/Enjoyment_waves";
import Fade from "react-reveal/Fade";

const Feedback = (props) => {
  return (
    <div className={css.feedback} id="feedback">
      <Fade>
        <div className={css.componentName}>Отзывы</div>
        <Item />
      </Fade>
    </div>
  );
};

export default Feedback;
