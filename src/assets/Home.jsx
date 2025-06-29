import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import TestimonialSection from './Testimonials';

const Home = () => {
  const slides = [
    {
      src: './img3.jpeg',
      alt: 'Slide 1',
      caption: 'Experience Peace and Serenity',
    },
    {
      src: './img2.jpeg',
      alt: 'Slide 2',
      caption: 'Discover the Power of Meditation',
    },
    {
      src: './img4.jpeg',
      alt: 'Slide 3',
      caption: 'Connect with Your Inner Self',
    },
  ];

  return (
    <>
      <Carousel fade interval={3000} controls indicators>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              src={slide.src}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '0.5rem',
                  borderRadius: '5px',
                }}
              >
                {slide.caption}
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Welcome section */}

      <div className="centered-section w-100">
        <div className="text-content mx-5">
          <h2>Welcome to Devatma Meditation</h2>
          <p>
            Devatma Meditation is a mystical meditation practice connected with the spiritual energy of the
            Himalayas. This activates the inner awareness and leads to the highest spiritual attainment. Baba
            Agastya is the main center figure of the study and the entire meditation process is related to the
            Himalayas.
          </p>
        </div>
        <div>
          <img src="./img7.jpg" alt="Meditation" />
        </div>
      </div>


      <div className='cards-section p-5' style={{ padding: '20px', borderRadius: '10px', alignContent: 'center' }}>
        <h2 className='text-center mb-4'>Explore Our Meditation Techniques</h2>
        <div className='cards d-flex justify-content-between align-items-center'>
          <div className='card p-3 text-center'>
            <img className='mx-auto mb-3' src="./man-meditation-vector.jpg" style={{ height: "300px", borderRadius: "10px" }} alt="" />
            <h3 className='mb-3'>Shakti Abhyas</h3>
            <button className='btn btn-primary'>Learn technique</button>
          </div>
          <div className='card p-3 text-center'>
            <img className='mx-auto mb-3' src="./man-meditation-vector.jpg" style={{ height: "300px", borderRadius: "10px" }} alt="" />
            <h3 className='mb-3'>Nirantar Anugraha</h3>
            <button className='btn btn-primary'>Learn technique</button>
          </div>
          <div className='card p-3 text-center'>
            <img className='mx-auto mb-3' src="./man-meditation-vector.jpg" style={{ height: "300px", borderRadius: "10px" }} alt="" />
            <h3 className='mb-3'>Sukshma Jagat</h3>
            <button className='btn btn-primary'>Learn technique</button>
          </div>
          <div className='card p-3 text-center'>
            <img className='mx-auto mb-3' src="./man-meditation-vector.jpg" style={{ height: "300px", borderRadius: "10px" }} alt="" />
            <h3 className='mb-3'>Bhav Samadhi</h3>
            <button className='btn btn-primary'>Learn technique</button>
          </div>
        </div>
      </div>


      <div className="centered-section w-100">

        <div>
          <img src="./img8.jpg" alt="Meditation" />
        </div>
        <div className="text-content mx-5">
          <h2>Welcome to Devatma Meditation</h2>
          <p>
            Devatma Meditation is a mystical meditation practice connected with the spiritual energy of the
            Himalayas. This activates the inner awareness and leads to the highest spiritual attainment. Baba
            Agastya is the main center figure of the study and the entire meditation process is related to the
            Himalayas.
          </p>
        </div>
      </div>

      <div className='grid-section mx-5 mb-5'>
        <div className='grid-item grid-item-1'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (in person)</p>
        </div>
        <div className='grid-item grid-item-2'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (online)</p>
        </div>
        <div className='grid-item grid-item-3'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (online)</p>
        </div>
        <div className='grid-item grid-item-4'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (online)</p>
        </div>
        <div className='grid-item grid-item-5'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (online)</p>
        </div>
        <div className='grid-item grid-item-6'>
          <a> <img src="./img1.jpeg" /> </a>
          <p className='grid-text'>Beginner (online)</p>
        </div>
      </div>


      <TestimonialSection/>

    </>
  );
};

export default Home;