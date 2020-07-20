import React from "react";
import css from "./Enjoyment.module.css";
import Videos from "./Videos/Videos";
import Text from "./Text/Text";
import Enjoyment_waves from "./Enjoyment_waves/Enjoyment_waves";

const Enjoyment = (props) => {
  return (
    <div className={css.enjoyment} id='enjoyment'>
      <div className={css.componentName}>Как надуть</div>

      <div className={css.content}>
        <Text className={css.text}/>
        <Videos className={css.videos}/>
      </div>
      <Enjoyment_waves />
    </div>
  );
};

export default Enjoyment;
