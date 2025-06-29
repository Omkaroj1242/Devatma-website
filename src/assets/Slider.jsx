import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const images = [
    { src: './img1.jpeg', alt: 'First Slide', caption: 'Experience Peace and Serenity' },
    { src: './img2.jpeg', alt: 'Second Slide', caption: 'Discover the Power of Meditation' },
    { src: './img3.jpeg', alt: 'Third Slide', caption: 'Connect with Your Inner Self' },
    { src: './img4.jpeg', alt: 'Fourth Slide', caption: 'Embrace a Journey of Self-Discovery' },
];

function Slider() {
    return (
        <Carousel fade interval={3000} controls indicators>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        style={{ height: '500px', objectFit: 'cover' }}
                        src={image.src}
                        alt={image.alt}
                    />
                    <Carousel.Caption>
                        <h3 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0.5rem', borderRadius: '5px' }}>
                            {image.caption}
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;