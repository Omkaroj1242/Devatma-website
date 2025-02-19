import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutUs() {
  return (
    <>
        <div className='about'>
            <Row className='p-5 w-100'>
                <Col className='text-center align-self-center'>
                    <h2 style={{}}>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aperiam quasi quo non id quaerat ab. Natus exercitationem cum voluptatibus quod quidem explicabo praesentium dignissimos, optio doloremque, illum veniam labore!</p>
                </Col>
                <Col className='text-center'>
                    <img style={{height: "500px", borderRadius: "30px"}} src="./cute-meditation-vector.jpg"/>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default AboutUs