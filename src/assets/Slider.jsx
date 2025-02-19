import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/man-meditation-vector.jpg'

function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img className="d-block w-100" style={{height: "500px"}} src="./man-meditation-vector.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img className="d-block w-100" style={{height: "500px"}} src="./man-meditation-vector.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img className="d-block w-100" style={{height: "500px"}} src="./man-meditation-vector.jpg" alt="" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider