import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PageThree.css";

class PageThree extends Component {
  render() {
    return (
      <Container>
        <div className="intro3">
          <h2>A car for every drive</h2>
          <p>Rent a Tesla or a truck, by the hour or day.</p>
        </div>
        <Row>
          <Col>
            <div class="icon-wrapper">
              <i class="fas fa-satellite-dish" />
            </div>
            <h4>Instant access</h4>
            <p3>
              {" "}
              Find, rent, and unlock cars near you. Our cars are connected so
              you can unlock with your phone and go{" "}
            </p3>
          </Col>
          <Col>
            <div class="icon-wrapper">
              <i class="fas fa-satellite-dish" />
            </div>
            <h4>Instant access</h4>
            <p3>
              {" "}
              Find, rent, and unlock cars near you. Our cars are connected so
              you can unlock with your phone and go{" "}
            </p3>{" "}
          </Col>
          <Col>
            <div class="icon-wrapper">
              <i class="fas fa-satellite-dish" />
            </div>
            <h4>Instant access</h4>
            <p3>
              {" "}
              Find, rent, and unlock cars near you. Our cars are connected so
              you can unlock with your phone and go{" "}
            </p3>{" "}
          </Col>
          <Col>
            <div class="icon-wrapper">
              <i class="fas fa-satellite-dish" />
            </div>
            <h4>Instant access</h4>
            <p3>
              {" "}
              Find, rent, and unlock cars near you. Our cars are connected so
              you can unlock with your phone and go{" "}
            </p3>{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageThree;
