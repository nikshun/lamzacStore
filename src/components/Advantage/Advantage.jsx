import React from "react";
import css from "./Advantage.module.css";
import Relax from "./Relax/Relax";
import Production from "./Production/Production";

const Advantage = (props) => {
  return (
    <div className={css.advantage} id="advantage">
      <div className={css.componentName}>Преимущества</div>
      <Relax />
      <Production />
    </div>
  );
};

export default Advantage;
