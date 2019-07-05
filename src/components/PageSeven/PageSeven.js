import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./PageSeven.css";

class SeventhPage extends Component {
  render() {
    return (
      <Container className="seventh-container">
        <div className="components">
          <h3>Have a car? Earn with Getaround</h3>

          <button class="btn btn-earn">Start Earning </button>
        </div>
      </Container>
    );
  }
}

export default SeventhPage;
