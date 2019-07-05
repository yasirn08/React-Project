import React, { Component } from "react";
import { Row, Col, Container, Image, Nav } from "react-bootstrap";
import image4 from "./5cdb22d943c13ee134197506_howitworks-v4.gif";
import "./PageFour.css";
import Example from "./Tab/Tab.js";

class FourthPage extends Component {
  render() {
    return (
      <Container className="fourthpage">
        <h2>How it works</h2>
        <Row>
          <Col xs="6">
            <Image src={image4} />
          </Col>
          <Col xs="6">
            <Example/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FourthPage;
