import React from "react";
import css from "./Description.module.css";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Refund from "./Refund/Refund";
import Description_waves from "./Description_waves/Description_waves";

const Description = () => {
  return (
    <div className={css.description} id="description">
      <div className={css.componentName}>Доставка и оплата</div>
      <div className={css.content}>
        <Delivery className={css.delivery} />
        <Payment className={css.payment} />
        <Refund className={css.refund} />
      </div>
      <Description_waves />
    </div>
  );
};

export default Description;
