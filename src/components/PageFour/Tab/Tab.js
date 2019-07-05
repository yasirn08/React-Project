import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import './Tab.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="8">
                <h4 class='list-item'>Sign up and search</h4>
                <p1>  
                  Quick and easy verification gets you on our network and
                  browsing cars fast.
                </p1>
                <h4 class='list-item'>Book a car</h4>
                <p1>
                  Rent cars, trucks, convertibles, and vans near you–by the
                  hour, or by the day.
                </p1>
                <h4 class='list-item'> Unlock and go</h4>
                <p1>
                  Getaround Connect™ technology helps you locate and unlock the
                  car with your phone.
                </p1>
                <h4 class='list-item'>Feel great</h4>
                <p1>
                  Carsharing reduces parking stress and the raw material used in
                  car manufacturing–good for your neighborhood and the
                  environment.
                </p1>
                <button class="btn btn-tab"> Rent a car</button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="8" className='data'>
                <h4 class='list-item'>Sign up and search</h4>
                <p1>
                  Quick and easy verification gets you on our network and
                  browsing cars fast.
                </p1>
                <h4 class='list-item'>Book a car</h4>
                <p1>
                  Rent cars, trucks, convertibles, and vans near you–by the
                  hour, or by the day.
                </p1>
                <h4 class='list-item'> Unlock and go</h4>
                <p1>
                  Getaround Connect™ technology helps you locate and unlock the
                  car with your phone.
                </p1>
                <h4 class='list-item'>Feel great</h4>
                <p1>
                  Carsharing reduces parking stress and the raw material used in
                  car manufacturing–good for your neighborhood and the
                  environment.
                </p1>
                <button class="btn btn-tab"> Start Earning</button>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
