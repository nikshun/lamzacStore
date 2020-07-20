import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Production from "./components/Advantage/Advantage";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Enjoyment from "./components/Enjoyment/Enjoyment";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Content />
      <Production />
      <Product />
      <Enjoyment />
      <Description />
      <Feedback />
    </div>
  );
}

export default App;
