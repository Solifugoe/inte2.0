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
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
      </div>
      <span className="slideshow-arrow" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export const Homepage = () => {
  const slides = [
    {
      image: 'src/assets/images/logo.png',
    },
    {
      image: 'src/assets/images/logo2.png',
    },
    {
      image: 'src/assets/images/slide.png',
    }
  ];

  return (
    <div className="home-container">
      <div className="home">
        <div className="event_image">
          <img src="src/assets/images/logo3.png" alt="alphaLogo" />
        </div>
        <div className="content">
          <h2>TheraGlow</h2>
          <p>
            El "Cubo Emocional" que te ayudará en tus tiempos más estresantes. TheraGlow es un innovador dispositivo diseñado para transformar la manera en que experimentamos nuestras emociones diarias. Este cubo emocional combina tecnología avanzada con un diseño elegante para ofrecer una experiencia única de bienestar emocional.
          </p>
        </div>
      </div>
      <Slideshow slides={slides} />
    </div>
  );
};

export default Homepage;
