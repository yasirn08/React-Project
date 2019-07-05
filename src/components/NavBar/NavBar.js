import React, { Component } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import "./NavBar.css";
import image1 from "./getaround_logo_white.png";
import { Container } from "react-bootstrap";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Container-fluid className="hooman">
        <Navbar expand="lg" className="hello">
          <Navbar.Brand className="phutu" href="/">
            <Image src={image1} height="70" alt="Apple" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="nada">
                <Nav.Link href="/">
                  <p className='paragraph'>How it works</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nada">
                <Nav.Link href="/">
                  <p className='paragraph'>Login|Join</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nada">
                <Nav.Link href="/">
                  <p className='paragraph'>List your car</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container-fluid>
    );
  }
}

export default NavBar;
