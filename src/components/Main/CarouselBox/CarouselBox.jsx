import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselBox.css";
import Carousel from "react-bootstrap/Carousel";
import main1 from "../../photos/main1.jpg";
import main2 from "../../photos/main2.jpg";
import main3 from "../../photos/main3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ПРИРОДА</h3>
            <p>Незаменимый атрибут для всех, кто любит отдыхать на природе</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ПУТЕШЕСТВИЯ</h3>
            <p>Комфорт в любом месте, будь то аэропорт или живописный пляж</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ГОРЫ</h3>
            <p>Всегда найдется место для друзей и неожиданно нагрянувших гостей</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
