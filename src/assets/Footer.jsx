import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='footer-section py-5'>
            <div className='d-flex justify-content-around '>
                <div>
                    <img style={{height: "200px"}} src="./devatma-logo.png" alt="" />
                </div>
                <div className='d-flex flex-column justify-content-around'>
                    <a href='#'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Gallery</a>
                </div>
                <div className='d-flex flex-column justify-content-around'>
                    <a style={{fontSize: "22px"}} href='#'><FaInstagram /></a>
                    <a style={{fontSize: "22px"}} href='#'><FaFacebook /></a>
                    <a style={{fontSize: "22px"}} href='#'><FaYoutube /></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer