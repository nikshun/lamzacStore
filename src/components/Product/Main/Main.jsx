import React from "react";
import "./Main.css";

const { useState } = React;

const items = [
  {
    id: 1,
    color: "green",
    img: "https://lamzak.store/img/dark_green.jpg",
  },
  {
    id: 2,
    color: "orange",
    img: "https://lamzak.store/img/orange.jpg",
  },
  {
    id: 3,
    color: "red",
    img: "https://lamzak.store/img/red.jpg",
  },
  {
    id: 4,
    color: "blue",
    img: "https://lamzak.store/img/blue.jpg",
  },
  {
    id: 5,
    color: "dark-blue",
    img: "https://lamzak.store/img/navy_blue.jpg",
  },
];

const ColorBlock = ({ color, onClick }) => (
  <div className={`color-block ${color}`} onClick={onClick} />
);

const ColorPicker = ({ onSelect }) => (
  <div className="color-picker">
    {items.map(({ id, color }) => (
      <ColorBlock key={id} id={id} color={color} onClick={() => onSelect(id)} />
    ))}
  </div>
);

const SelectedColor = ({ img = "" }) => (
  <div className="selected-color">
    <img src={img} />
  </div>
);

const Main = () => {
  const [active, setActive] = useState(1);

  const activeColor = items.find((i) => i.id === active) || {};

  console.log(activeColor);

  return (
    <>
      <div className="productName">Ламзаки</div> <br />
      <ColorPicker onSelect={setActive} />
      <SelectedColor {...activeColor} />
    </>
  );
};

export default Main;
