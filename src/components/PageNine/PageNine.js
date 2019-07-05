import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./PageNine.css";

class NinthPage extends Component {
  render() {
    return (
      <div className="area-one">
        <Row>
          <Col xs="6">
            <h2>We've Crossed the pond</h2>
            <p>London or Los Angeles? Madrid or Miami? Take your pick.</p>
          </Col>
          <Col xs="6" className='buttons-nine'>
            <button class="btn btn-carseurope"> See cars in Europe</button>
            <button class="btn btn-carsus"> See cars in US</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NinthPage;
