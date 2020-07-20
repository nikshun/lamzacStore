import React from "react";
import css from "./Delivery.module.css";

const Delivery = () => {
  return (
    <div className={css.delivery}>
      <div className={css.name}>Доставка</div>
      <div className={css.text}>
        Заказы отправляются по всей Украине в день заказа службой доставки Нова
        Пошта. Про оплату вы можете узнать в дальнейшем блоке. Для отправки
        товара вам нужно ввести данные в секции "Ламзаки", при воде вашей
        информации, данные отправятся нашему менеджеру и он вам перезвонит.
      </div>
    </div>
  );
};

export default Delivery;
