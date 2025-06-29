import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Logo from '/devatma-logo1.png';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Header() {
  const renderTooltip = (text) => (
    <Tooltip>{text}</Tooltip>
  );

  return (
    <>
      <Navbar className='navbar' style={{ background: '#FFF2E0' }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img className='logo' src={Logo} alt="Devatma Logo" style={{ height: '70px' }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navItems' href="/home" style={{ color: '#276bab', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link className='navItems' href="/about" style={{ color: '#276bab', fontWeight: 'bold' }}>About Us</Nav.Link>
            <Nav.Link className='navItems' href="/gallery" style={{ color: '#276bab', fontWeight: 'bold' }}>Gallery</Nav.Link>
          </Nav>
          <Nav className='icons'>
            <OverlayTrigger placement="bottom" overlay={renderTooltip('Instagram')}>
              <Nav.Link className='icon mx-3' href="#instagram" style={{ color: '#E1306C', fontSize: '1.5rem' }}>
                <FaInstagram />
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={renderTooltip('Facebook')}>
              <Nav.Link className='icon mx-3' href="#facebook" style={{ color: '#4267B2', fontSize: '1.5rem' }}>
                <FaFacebook />
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={renderTooltip('YouTube')}>
              <Nav.Link className='icon mx-3' href="#youtube" style={{ color: '#FF0000', fontSize: '1.5rem' }}>
                <FaYoutube />
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header