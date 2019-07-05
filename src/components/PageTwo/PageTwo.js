import React, { Component } from "react";
import { Image, Container, Col, Row } from "react-bootstrap";
import "./PageTwo.css";
import image1 from "./img/Capture1st.PNG";

class SecondPage extends Component {
  render() {
    return (
      <Container>
        <h2 className='secondh'> Rent cars near you </h2>
        <h4 className='secondp'> Convenient hourly and daily rentals. Insurance included</h4>
        <Row className='secondrow1'>
          <Col xs="6" sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='secondrow2'>
          <Col xs="6" sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="card">
              <Image className="card-img-top src" src={image1} />
              <div className="card-body">
                <h4 className="card-title"> SUV/Jeep </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SecondPage;
