import React from "react";
import css from "./Enjoyment.module.css";
import Content from "./Content/Content";
import Fade from "react-reveal/Fade";

const Enjoyment = () => {
  return (
    <div className={css.enjoyment} id="enjoyment">
      <Fade>
        <div className={css.componentName}>Как надуть</div>
          <Content className={css.text} />
      </Fade>
    </div>
  );
};

export default Enjoyment;
