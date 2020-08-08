import React from "react";
import "./Main.css";
import black from "../../photos/blackLamzac.jpg";
import darkBlue from "../../photos/darkBlueLamzac.jpg";
import blue from "../../photos/blueLamzac.jpg";
import skyBlue from "../../photos/skyBlueLamzac.jpg";
import green from "../../photos/greenLamzac.jpg";
import pink from "../../photos/pinkLamzac.jpg";
import orange from "../../photos/orangeLamazc.jpg";
import red from "../../photos/redLamzac.jpg";
import purple from "../../photos/purpleLamzac.jpg";

const { useState } = React;

const items = [
  {
    id: 1,
    color: "black",
    img: black,
  },
  {
    id: 2,
    color: "darkBlue",
    img: darkBlue,
  },
  {
    id: 3,
    color: "blue",
    img: blue,
  },
  {
    id: 4,
    color: "skyBlue",
    img: skyBlue,
  },
  {
    id: 5,
    color: "green",
    img: green,
  },
  {
    id: 6,
    color: "pink",
    img: pink,
  },
  {
    id: 7,
    color: "purple",
    img: purple,
  },
  {
    id: 8,
    color: "orange",
    img: orange,
  },
  // {
  //   id: 9,
  //   color: "red",
  //   img: red,
  // },
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
    <img src={img} className="lamzac" />
  </div>
);

const Main = () => {
  const [active, setActive] = useState(1);

  const activeColor = items.find((i) => i.id === active) || {};

  localStorage.setItem("color", activeColor);

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
