import React from "react";
import css from "./Enjoyment.module.css";
import Videos from "./Videos/Videos";
import Text from "./Text/Text";
import Fade from "react-reveal/Fade";

const Enjoyment = (props) => {
  return (
    <div className={css.enjoyment} id="enjoyment">
      <Fade>
        <div className={css.componentName}>Как надуть</div>

        <div className={css.content}>
          <Text className={css.text} />
          <Videos className={css.videos} />
        </div>
      </Fade>
    </div>
  );
};

export default Enjoyment;
