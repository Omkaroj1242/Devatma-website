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
                    <p>Modern Meditation is a mystical meditation practice connected with the spiritual energy of the Himalayas. 
                    This activates the inner awareness and leads to the highest spiritual attainment. 
                    Baba Agastya is the main center figure of the study and the entire meditation process is related to the Himalayas. 
                    This meditation practice provides the highest inner spiritual activation through companionship and is a way of entering into the mystical world of Devatma. 
                    The night meditation session is combined with the mystical practice of "Dhyan Ratri," which experienced seekers are doing every day. 
                    By doing sadhana continuously the participants will soon be connected with Devatma Meditation. Modern Meditation is a meditation practice that creates special awareness at the inner level.</p>
                </Col>
                <Col className='text-center'>
                    <img style={{height: "500px", borderRadius: "30px"}} src="./img5.jpeg"/>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default AboutUs