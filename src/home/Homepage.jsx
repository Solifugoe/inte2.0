import React, { useState, useEffect } from 'react';
import '../home/homepage.css';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Cambia la diapositiva cada 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <span className="slideshow-arrow" onClick={prevSlide}>&#10094;</span>
      <div className="slide">
        <img className="slideshow-image" src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        <div className="overlay">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      <span className="slideshow-arrow" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export const Homepage = () => {
  const slides = [
    {
      image: 'src/assets/images/logo2.png', // Cambia la ruta de las imágenes según sea necesario
    },
    {
      image: 'src/assets/images/slide.png',
    },
    {
      image: 'src/assets/images/logo3.png',
    }
  ];

  return (
    <div className="home-container">
      <Slideshow slides={slides} />
      <div className="content-box">
        <h1>TheraGlow</h1>
        <p>El Cubo Emocional que te ayudará en tus tiempos más estresantes.</p>
      </div>
    </div>
  );
};

export default Homepage;
