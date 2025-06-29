import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="footer-section py-5"
        style={{
          background: "#FFF2E0",
          color: "#276bab",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Logo Section */}
            <div className="col-md-4 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                style={{ height: "150px" }}
                src="./devatma-logo.png"
                alt="Devatma Logo"
              />
            </div>

            {/* Navigation Links */}
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                Home
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                About Us
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                Gallery
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",
                  color: "#E1306C",
                  margin: "0 1rem",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",
                  color: "#4267B2",
                  margin: "0 1rem",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",
                  color: "#FF0000",
                  margin: "0 1rem",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="mt-4"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            paddingTop: "1rem",
            fontSize: "0.9rem",
          }}
        >
          © 2025 Devatma Meditation. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;