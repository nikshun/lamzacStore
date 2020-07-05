import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Production from "./components/Production/Production";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Content id="1"/>
      <Production id="2"/>
    </div>
  );
}

export default App;
