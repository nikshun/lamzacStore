import React from "react";
import css from "./Advantage.module.css";
import Relax from "./Relax/Relax";
import Production from "./Production/Production";
import Advantage_waves from "./Advantage_waves/Advantage_waves";

const Advantage = (props) => {
  return (
    <div className={css.advantage} id="advantage">
      <hr
        align="center"
        width="200"
        size="2"
        color="#ffffff"
        className={css.indent}
      />
      <br />
      <div className={css.componentName}>Преимущества</div>
      <hr align="center" width="200" size="2" color="#595959" />
      <br />
      <Relax />
      <hr align="center" width="200" size="2" color="#595959" />
      <br />
      <Production />
      <Advantage_waves />
    </div>
  );
};

export default Advantage;
