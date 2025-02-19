import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Row'

function Hero() {
  return (
    <>
      <div className='hero-section'>
        <div style={{ height: "100vh" }} className='hero-content d-flex flex-column justify-content-center align-items-center'>
            <h1 className='hero-heading'>Devatma Meditation</h1>
            <p className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora, sint perferendis nisi quisquam exercitationem totam veritatis eveniet neque? Totam et numquam quibusdam minus sint veritatis dolore delectus nulla ut.</p>
        </div>
        <div className='hero-overlay'></div>
      </div>
    </>
  )
}

export default Hero