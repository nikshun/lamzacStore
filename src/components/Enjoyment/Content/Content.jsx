import React from "react";
import css from "./Content.module.css";

const Content = () => {
  return (
    <div className={css.content}>
      <div className={css.first}>
        Как надуть Ламзак?
        <div className={css.description}>
          В данном раздели представлена видео инструкция как надуть Ламзак. И
          как надуть его без ветра, видео. (EN)
        </div>
        <iframe
          className={css.left}
          src="https://www.youtube.com/embed/p7N9_IPeOt4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={css.second}>
        Как можно использовать Ламзак?
        <div className={css.description}>
          На видео показано как плавать на надувном диване и общее видео о том
          где еще можно использовать Lamzac. (RU)
        </div>
        <iframe
          className={css.right}
          src="https://www.youtube.com/embed/VA3rIR8Qpvg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
