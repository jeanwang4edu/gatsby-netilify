import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'gatsby';
import SiteLogo from "../components/SiteLogo";

const Header = () => (
    <header>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
            <SiteLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                    <b className="text-dark">Home</b>
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                    <b className="text-dark">About Us</b>
                </Nav.Link>            
                <Nav.Link as={Link} to="/contact">
                    <b className="text-dark">Contact Us</b>
                </Nav.Link>  
                <Nav.Link as={Link} to="/test">
                    <b className="text-dark">Test</b>
                </Nav.Link>             
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </header>

);

export default Header;