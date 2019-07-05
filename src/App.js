import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstPage from "./components/PageOne/PageOne.js";
import SecondPage from "./components/PageTwo/PageTwo.js";
import ThirdPage from "./components/PageThree/PageThree.js";
import FourthPage from "./components/PageFour/PageFour.js";
import FifthPage from "./components/PageFive/PageFive.js";
import SixthPage from "./components/PageSix/PageSix.js";
import CustomNavbar from "./components/NavBar/NavBar.js";
import SeventhPage from "./components/PageSeven/PageSeven.js";
import NinthPage from "./components/PageNine/PageNine.js"
import TenthPage from "./components/PageTen/PageTen.js"

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <CustomNavbar />
          <FirstPage/>
          <SecondPage/>
          <ThirdPage/>
          <FourthPage/>
          <FifthPage/>
          <SixthPage/>
          <SeventhPage/>
          <ThirdPage/>
          <NinthPage/>
          <TenthPage/>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
