import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './home.css';

class home extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Jumbotron>
                    <h2>This is my website</h2>
                    <p>Welcome to my website</p>
                </Jumbotron>
                <Link to="/about.jsx">
                    <Button> About</Button>
                </Link>
            </Container>
         );
    }
}
 
export default home;