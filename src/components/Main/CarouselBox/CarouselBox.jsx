import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselBox.css";
import Carousel from "react-bootstrap/Carousel";
import main1 from "../../photos/main1.jpg";
import main2 from "../../photos/main2.jpg";
import main3 from "../../photos/main3.jpg";
import main_phone1 from "../../photos/main_phone1.jpg";
import main_phone2 from "../../photos/main_phone2.jpg";
import main_phone3 from "../../photos/main_phone3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
        <img
            className="main_pc"
            src={main1}
            alt="Third slide"
          />
        <img
            className="main_phone"
            src={main_phone1}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>ПРИРОДА</h3>
            <p>Незаменимый атрибут для всех, кто любит отдыхать на природе</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main_pc"
            src={main2}
            alt="Third slide"
          />
          <img
            className="main_phone"
            src={main_phone2}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>ПУТЕШЕСТВИЯ</h3>
            <p>Комфорт в любом месте, будь то аэропорт или живописный пляж</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main_pc"
            src={main3}
            alt="Third slide"
          />
          <img
            className="main_phone"
            src={main_phone3}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>ГОРЫ</h3>
            <p>Всегда найдется место для друзей и неожиданно нагрянувших гостей</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
