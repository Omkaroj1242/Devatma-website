import React from 'react';

function Hero() {
  return (
    <>
      <div
        className="hero-section text-center d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url('../src/images/kailash-at-night.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '100vh',
          color: '#fff',
          display: 'flex',
          // flexDirection: 'column', // Ensures content stacks vertically
          // justifyContent: 'center',
          // alignItems: 'center',
          // textAlign: 'center', // Ensures text is centered horizontally
        }}
      >
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 20px',
          }}
        >
          <h1 className="hero-heading" style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Devatma Meditation
          </h1>
          <p className="hero-text" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem'}}>
            Discover the transformative power of meditation. Embark on a journey of self-discovery, peace, and inner harmony.
          </p>
          <button
            className="hero-button"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = 'linear-gradient(90deg, #2a5298, #1e3c72)')}
            onMouseOut={(e) => (e.target.style.background = 'linear-gradient(90deg, #1e3c72, #2a5298)')}
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;