import React from "react";
import css from "./Production.module.css";
import Fade from "react-reveal/Fade";

const Production = (props) => {
  return (
    <div className={css.production} id="production">
      <Fade right>
        <div className={css.name}>Качество и производство</div>
        <div className={css.product}>
          <div className={css.first}>
            <div className={css.item}>Ткань Oxford PU 240d</div>
            <div className={css.text}>
              На данный момент существует огромное количество совершенно разных
              тканей, которые распространяются под торговой маркой «Оксфорд». Их
              не следует путать с классической тканью данного типа. На нашем
              сайте предоставлены ламзаки с очень прочной тканью.
            </div>
          </div>
          <div className={css.second}>
            <div className={css.item}>Пленка 100 мкр</div>
            <div className={css.text}>
              Внутренние камеры наших стильных ламзаков сменные – это дает
              возможность заменить их в случае сильного повреждения, ведь
              пришитые наглухо камеры делают лежак одноразовым. Трехслойная
              пленка камеры имеет высокую плотность — 100 мкр.
            </div>
          </div>
          <div className={css.third}>
            <div className={css.item}>Прочная сумка</div>
            <div className={css.text}>
              В комплект к надувному мешку - ламзаку входит яркая сумка такого
              же цвета как и сам ламзак. К счастью в неё отлично влазит ламзак.
              Также у сумки есть "ремешок", который позволяет повесить данную
              сушку на ваше плече.
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Production;
