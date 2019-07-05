import React, { Component } from "react";
import "./PageOne.css";
import Button from "react-bootstrap/Button";
import image from "./Capture.jpg";

class FirstPage extends Component {
  render() {
    return (
      <div className="First-page">
        <div className="writings">
          <h1>Instantly rent cars near you</h1>
          <h3>Unlock from you phone, by the hour or day</h3>

          <button className="btn btn-1"> Connect with Facebook </button>
          <button className="btn btn-2"> Connect with Google </button>
        </div>
      </div>
    );
  }
}

export default FirstPage;
