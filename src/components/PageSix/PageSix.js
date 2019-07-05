import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './PageSix.css'

class SixthPage extends Component {
    render() { 
        return ( 
            <Container className='sixth-container'>
                <h1> Get around in your area </h1>
                <p> Available in over 300 cities around the world</p>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem> <a href="#"> Barcelona </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> BerListGroupItemn </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Boston </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Chicago </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Denver </a></ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroupItem> <a href="#"> Barcelona </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> BerListGroupItemn </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Boston </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Chicago </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Denver </a></ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroupItem> <a href="#"> Barcelona </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> BerListGroupItemn </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Boston </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Chicago </a></ListGroupItem>
                            <ListGroupItem> <a href="#"> Denver </a></ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default SixthPage;