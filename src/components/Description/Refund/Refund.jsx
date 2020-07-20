import React from "react";
import css from "./Refund.module.css";

const Refund = () => {
  return (
    <div className={css.refund}>
      <div className={css.name}>Возврат</div>
      <div className={css.text}>
        <div className={css.first}>
          Возврат и обмен товаров осущестляется согласно Закону «О защите прав
          потребителей». Возврат в течение 14 дней после получения товара.
          Обратная доставка товаров осуществляется за счет покупателя.
        </div>
        <div className={css.second}>
          Обмену или возврату подлежит новый товар, который не был в
          эксплуатации и не имеет следов использования (потертостей, царапин и
          прочих повреждений). Товар должен иметь полную комплектацию.
        </div>
      </div>
    </div>
  );
};

export default Refund;
