import React from "react";
import css from "./Content.module.css";

const Content = () => {
  return (
    <div className={css.content}>
      <div className={css.about}>
        <div className={css.text}>
          <h1>Надувной диван ламзак</h1>
          <div className={css.input}>
            Недавно у нас появилась отличная вещь для отдыха и туризма –
            надувной диван ламзак. Мы давно хотели испробовать его в деле.
            Сегодня я напишу отзыв о нем, а также дам парочку полезных советов,
            как выбрать качественный ламзак, и быстро его надуть. На выходные мы
            испробовали наши крутые ламзаки и готовы поделиться впечатлениями.
          </div>
          <div className={css.button}>
            <button>Заказать</button>
          </div>
        </div>
        <div className={css.main}>
          <img
            className={css.lamzac}
            src="https://lamzak.store/img/brand.png"
          />
        </div>
      </div>

      <div className={css.waves}>
        <img src="https://www.doitlean.com/images/waves.svg" />
      </div>
    </div>
  );
};

export default Content;
