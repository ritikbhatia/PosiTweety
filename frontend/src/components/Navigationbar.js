// import { Nav, Navbar } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import {Navbar, Nav, NavItem, Button, Glyphicon, Container} from 'react-bootstrap';
// import Sidebar from 'react-bootstrap-sidebar';
// import { slide as Menu } from 'react-burger-menu';

export class NavigationBar extends React.Component{
    render() {
        return (
            <div>
            <Navbar sticky="top" bg="dark" variant="dark" className="flex-column">
                <Navbar.Brand href="/">Dashboard</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/dashboard/tweets">Tweets</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/media">Media</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/news">News</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/resources">Resources</Nav.Link>
                </Nav>
            </Navbar>
            {/* // <Sidebar side='left'>
            //         <Nav>
            //           <NavItem href="#">Link 1</NavItem>
            //           <NavItem href="#">Link 2</NavItem>
            //           <NavItem href="#">Link 3</NavItem>
            //           <NavItem href="#">Link 4</NavItem>
            //         </Nav>
            //       </Sidebar>
        //     <div>
        //     <Sidebar side='left'>
        //       <Nav>
        //         <NavItem href="#">Link 1</NavItem>
        //         <NavItem href="#">Link 2</NavItem>
        //         <NavItem href="#">Link 3</NavItem>
        //         <NavItem href="#">Link 4</NavItem>
        //       </Nav>
        //     </Sidebar>
        // </div>
    //     <Menu>
    //     <a id="home" className="menu-item" href="/">Home</a>
    //     <a id="about" className="menu-item" href="/about">About</a>
    //     <a id="contact" className="menu-item" href="/contact">Contact</a>
    //     <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    //     <Nav.Link as={Link} to="/dashboard/tweets">Tweets</Nav.Link>
    //                 <Nav.Link as={Link} to="/dashboard/about">About</Nav.Link>
    //                 <Nav.Link as={Link} to="/dashboard/media">Media</Nav.Link>
    //                 <Nav.Link as={Link} to="/dashboard/news">News</Nav.Link>
    //                 <Nav.Link as={Link} to="/dashboard/resources">Resources</Nav.Link>
    //   </Menu> */}
    </div>
        );
    }
}