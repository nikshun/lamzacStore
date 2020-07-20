import React from "react";
import css from "./Text.module.css";

const Text = () => {
  return (
    <div className={css.text}>
      <div className={css.first}>
        Как надуть Ламзак?
        <div className={css.description}>
          В данном раздели представлена видео инструкция как надуть Ламзак. И
          как надуть его без ветра, видео. (EN)
        </div>
      </div>
      <div className={css.second}>
        Как можно использовать Ламзак?
        <div className={css.description}>
          На видео показано как плавать на надувном диване и общее видео о том
          где еще можно использовать Lamzac. (RU)
        </div>
      </div>
    </div>
  );
};

export default Text;
