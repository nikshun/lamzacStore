import React from "react";
import css from "./Item.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Person = (props) => {
  return (
    <div className={css.person}>
      <img
        src="https://institutoloureiro.com.br/wp-content/uploads/2016/10/aspas.png"
        className={css.dots}
      />
      <div className={css.name}>{props.name}</div>
      <div className={css.comment}>{props.comment}</div>
      <img
        src="https://institutoloureiro.com.br/wp-content/uploads/2016/10/aspas.png"
        className={css.reverse}
      />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}

export default class Item extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      afterChange: false,
      responsive: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className={css.wrapper}>
        <h3>Пишите коментарии в наш инстаграмм!</h3>
        <Slider className={css.slider} {...settings}>
          <div>
            <Person
              name="Andre Z"
              comment="Диван lamzac - это удобно! Пригодится на даче, на пляже, нравится деткам. Можно надуть без насоса, быстро сдувается и надувается, в машине занимает мало места "
            />
          </div>
          <div>
            <Person
              name="Solodkina"
              comment="Обращалась уже 2 раза и буду ещё:). Рекомендую всем, кто интересуется этой продукцией. Спасибо Вам большое за продукцию и обслуживание. Развития и процветания! "
            />
          </div>
          <div>
            <Person
              name="Alex Dorozhek"
              comment="Приятно удивлена отзывчивости, порядочности и компетентности продавца. Решает все вопросы связанные с предоставляемым товаром. Качеством продукции полностью удовлетворенна (ламзаки отслужили сезон и не изменились, держат хорошо)"
            />
          </div>
          <div>
            <Person
              name="Alex Dorozhek"
              comment="Купил базовые две штуки. Пробовал уже пару раз. надуваются легко. Держат полчаса вообще без изменений, на часа 3 плотного лежака под нагрузкой - точно хватит. Без нагрузки стоят себе день и ничего им не делается. Хорошие."
            />
          </div>
          <div>
            <Person
              name="Alex Dorozhek"
              comment="Решает все вопросы связанные с предоставляемым товаром. Качеством продукции полностью удовлетворенна (ламзаки отслужили сезон и не изменились, держат хорошо)."
            />
          </div>
          <div>
            <Person
              name="Alex Dorozhek"
              comment="Приятно удивлена отзывчивости, порядочности и компетентности продавца. Решает все вопросы связанные с предоставляемым товаром. Качеством продукции полностью удовлетворенна (ламзаки отслужили сезон и не изменились, держат хорошо)"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
