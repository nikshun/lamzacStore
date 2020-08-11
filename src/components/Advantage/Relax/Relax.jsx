import React from "react";
import css from "./Relax.module.css";
import Fade from "react-reveal/Fade";
import lamzac1 from "../../photos/lamzac1.jpg";
import lamzac2 from "../../photos/lamzac2.jpg";
import lamzac3 from "../../photos/lamzac3.jpg";

const Relax = () => {
  return (
    <div className={css.relax} id="relax">
      <Fade left>
        <div className={css.name}>Отдыхай вместе с lamzac</div>
        <div className={css.product}>
          <div className={css.first}>
            <div className={css.relaxIn}>На море</div>
            <img src={lamzac1} />
            <div className={css.text}>
              У вас теперь есть возможность поплавать вдали от шумной береговой
              линии и окунуться в чистой воде. Единственное, что омрачает
              радость владельца матраса – необходимость каждый раз надувать его,
              испытывая прочность своих щек и легких.
            </div>
          </div>
          <div className={css.second}>
            <div className={css.relaxIn}>На природе</div>
            <img src={lamzac2} />
            <div className={css.text}>
              Если вы собираетесь встретиться с друзьями на этих выходных
              используйте lamzac, просто положите его в вашу сумку и при
              потребности надуйте его воздухом и просто ложитесь на него.
            </div>
          </div>
          <div className={css.third}>
            <div className={css.relaxIn}>На пляже</div>
            <img src={lamzac3} />
            <div className={css.text}>
              Пляжный отдых без надувного матраса теряет половину своей
              привлекательности. Загорать на его упругой поверхности намного
              приятнее, чем лежать на твердой гальке или липучем песке.
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Relax;
