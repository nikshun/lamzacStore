import React, { Component } from "react";
import "./NavBar.css";
import logo from "../../photos/logo.png";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar fixed="top" collaplseOnSelect expand="md" className="navbar">
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


