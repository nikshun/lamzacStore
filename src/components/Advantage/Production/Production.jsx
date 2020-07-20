import React from "react";
import css from "./Production.module.css";

const Production = (props) => {
  return (
    <div className={css.Relax}>
      <div className={css.relax}>Качество и производство</div>
      <div className={css.product}>
        <div className={css.first}>
          <div className={css.item}>Ткань Oxford PU 240d</div>
          <div className={css.text}>
            На данный момент существует огромное количество совершенно разных
            тканей, которые распространяются под торговой маркой «Оксфорд». Их
            не следует путать с классической тканью данного типа. На нашем сайте
            предоставлены ламзаки с очень прочной тканью.
          </div>
        </div>
        <div className={css.second}>
          <div className={css.item}>Пленка 100 мкр</div>
          <div className={css.text}>
            Внутренние камеры наших стильных ламзаков сменные – это дает
            возможность заменить их в случае сильного повреждения, ведь пришитые
            наглухо камеры делают лежак одноразовым. Трехслойная пленка камеры
            имеет высокую плотность — 100 мкр.
          </div>
        </div>
        <div className={css.third}>
          <div className={css.item}>Надежный замок</div>
          <div className={css.text}>
            На наших ламзаках установлены крепкие замки которые устойчивы к
            изгибам. Надувные лежаки от недобросовестных производителей
            комплектуются замком из хрупкого пластика. Такой пластиковый замок
            будет расходиться от давления, что чревато внезапным сдуванием
            ламзака, когда на нем кто-то сидит.
          </div>
        </div>
        <div className={css.forth}>
          <div className={css.item}>Армированная нить</div>
          <div className={css.text}>
            Швы аэродивана прошиты специальной нитью, которая препятствует
            разрывам плотной ткани, сохраняя надувной лежак целым
          </div>
        </div>
        <div className={css.fifth}>
          <div className={css.item}>Сменная камера</div>
          <div className={css.text}>
            Камера для наполнения воздуха легко меняется в случае прокола, ее
            можно вынуть и постирать внешнюю оболочку ламзака
          </div>
        </div>
        <div className={css.sixth}>
          <div className={css.item}>Сумка - мешок - переноска</div>
          <div className={css.text}>
            Сумка с затяжками на 2 плеча сделает транспортировку ламзака на
            место установки легкой и беззаботной
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
