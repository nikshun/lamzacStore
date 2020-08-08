import React, { Component } from "react";
import "./Header.css";
import logo from "../../photos/logo.png";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <Navbar collaplseOnSelect expand="md" className="navbar">
        <Container>
          <Navbar.Brand className="brand">
            <img
              src={logo}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link className="link">
                <Link
                  to="advantage"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Преимущества
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="product"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Ламзаки
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="enjoyment"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Как надуть
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="description"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Опции
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="feedback"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Отзывы
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="contacts"
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFF" }}
                >
                  Контакты
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

/*      <div className="captions">
        <Caption text="Преимущества" id="advantage" className="advantage" />
        <Caption text="Ламзаки" id="product" className="product" />
        <Caption text="Как надуть" id="enjoyment" className="enjoyment" />
        <Caption text="Опции" id="description" className="description" />
        <Caption text="Отзывы" id="feedback" className="feedback" />
        <Caption text="Контакты" id="contacts" className="contacts" />
      </div>  */
