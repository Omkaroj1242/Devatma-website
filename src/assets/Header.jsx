import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/devatma-logo1.png';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Header() {
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark">
        <Container className=''>
          <Navbar.Brand href="#home"><img className='logo' src={Logo} /></Navbar.Brand>
          <Nav className="me-auto text-end">
            <Nav.Link className='navItems' href="#home">Home</Nav.Link>
            <Nav.Link className='navItems' href="#features">About Us</Nav.Link>
            <Nav.Link className='navItems' href="#pricing">Gallery</Nav.Link>
          </Nav>
          <Nav className='icons text-end'>
            <Nav.Link className='icon mx-3' href="#pricing"><FaInstagram /></Nav.Link>
            <Nav.Link className='icon mx-3' href="#pricing"><FaFacebook /></Nav.Link>
            <Nav.Link className='icon mx-3' href="#pricing"><FaYoutube /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header