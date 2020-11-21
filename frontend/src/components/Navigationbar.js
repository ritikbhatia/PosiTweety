import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React from 'react';

export class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="/">Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/dashboard/tweets">Tweets</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/media">Media</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/news">News</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/resources">Resources</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}