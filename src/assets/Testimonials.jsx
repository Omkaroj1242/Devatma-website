// TestimonialSection.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Sharma",
    text: "Devatma Meditation has transformed my life. I feel more peaceful and connected to my inner self every day.",
    image: "./user1.jpg",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "The instructors are so supportive and the techniques are truly powerful. Highly recommended!",
    image: "./user2.jpg",
    rating: 5,
  },
  {
    name: "Priya Singh",
    text: "A beautiful community and a serene environment. My spiritual journey has never felt so fulfilling.",
    image: "./user3.jpg",
    rating: 4,
  },
  {
    name: "Vikram Joshi",
    text: "I have found clarity and calmness through Devatma Meditation. The sessions are enlightening and energizing.",
    image: "./user4.jpg",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    text: "Joining this community was the best decision for my mental well-being. The support and guidance are unmatched.",
    image: "./user5.jpg",
    rating: 5,
  },
  {
    name: "Sandeep Rao",
    text: "Every session brings new insights and peace. I recommend Devatma Meditation to everyone seeking inner growth.",
    image: "./user6.jpg",
    rating: 4,
  },
];

const TestimonialSection = () => (
  <section className="testimonial-section py-5" style={{ backgroundColor: "#" }}>
    <div className="container">
      <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>What Our Members Say</h2>
      <Carousel indicators={true} controls={true} interval={4000} fade>
        {testimonials.map((t, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 350 }}>
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #1e3c72",
                  marginBottom: 20,
                }}
              />
              <FaQuoteLeft size={30} color="#2a5298" className="mb-3" />
              <p className="mb-3" style={{ fontStyle: "italic", color: "#333", maxWidth: 600 }}>{t.text}</p>
              <div className="mb-2 d-flex justify-content-center">
                {[...Array(t.rating)].map((_, i) => ( 
                  <FaStar key={i} color="#FFD700" />
                ))}
              </div>
              <h5 style={{ color: "#1e3c72", fontWeight: "bold" }}>{t.name}</h5>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);

export default TestimonialSection;