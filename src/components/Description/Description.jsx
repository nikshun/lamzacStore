import React from "react";
import css from "./Description.module.css";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Refund from "./Refund/Refund";
import Fade from "react-reveal/Fade";

const Description = () => {
  return (
    <div className={css.description} id="description">
      <Fade left>
        <div className={css.componentName}>Доставка и оплата</div>
        <div className={css.content}>
          <Delivery className={css.delivery} />
          <Payment className={css.payment} />
          <Refund className={css.refund} />
        </div>
      </Fade>
    </div>
  );
};

export default Description;
