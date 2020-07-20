import React from "react";
import css from "./Videos.module.css";

const Videos = () => {
  return (
    <div className={css.videos}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p7N9_IPeOt4"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VA3rIR8Qpvg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videos;
