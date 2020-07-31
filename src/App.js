import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Production from "./components/Advantage/Advantage";
import Product from "./components/Product/Product";
import Enjoyment from "./components/Enjoyment/Enjoyment";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Contacts from "./components/Contacts/Contacts";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="wrapper">
      <Main />
      <Production />
      <Product />
      <Gallery />
      <Enjoyment />
      <Description />
      <Feedback />
      <Contacts />
    </div>
  );
}

export default App;
