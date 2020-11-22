import { Link } from 'react-router-dom';
import React from 'react';
import {Navbar, Nav, Row, Col} from 'react-bootstrap';
import Logo from '../assets/help.svg';

export class NavigationBar extends React.Component{

    constructor(props){
        super(props);
        this.topic = this.props.topic
    }

    render() {
        return (
            <div>
                <Navbar sticky="top" bg="dark" variant="dark">
                    <Row>
                        <Col>
                            <Navbar.Brand>
                                <Link to="/" style={{textDecoration: "none"}}>
                                <img
                                alt=""
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />{' '}
                                <span style={{color:'#5f85db'}}>Positweety</span>
                                </Link>
                            </Navbar.Brand>
                        </Col>
                        <Col md="auto">
                        <Navbar.Brand as={Link} to={"/dashboard?topic="+this.topic}><h3>#Board for <span style={{color:'yellow'}}>#{this.topic}</span></h3></Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link} to={"/dashboard/tweets?topic="+this.topic}>Tweets and Resources</Nav.Link>
                            <Nav.Link as={Link} to={"/dashboard/about?topic="+this.topic}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/dashboard/media?topic="+this.topic}>Media</Nav.Link>
                            <Nav.Link as={Link} to={"/dashboard/news?topic="+this.topic}>News</Nav.Link>
                        </Nav>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        );
    }
}