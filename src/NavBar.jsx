import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaCog, FaDoorOpen } from 'react-icons/fa'

import logo from './media_assets/logo.png'
import profilePic from './media_assets/profilePic.jpeg'

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top rounded"
                        />{' '}
                        SMD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" menuVariant="dark" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/features">Features</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                        </Nav>
                        {/* <Navbar.Text>
                            Signed in as: <a href="/profile">Mark Otto</a>
                        </Navbar.Text> */}
                        <NavDropdown className="text-light" title={
                            <img
                                alt=""
                                src={profilePic}
                                width="30"
                                height="30"
                                className="d-inline-block align-top rounded-circle"
                            />}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings <FaCog /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Logout <FaDoorOpen />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar