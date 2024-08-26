import React from 'react';
import { Carousel } from 'react-bootstrap';  //  Carousel 
import { Link } from 'react-router-dom';  
import '../App.css'; 
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';


const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption-custom">
            <Link to="/recipes" className="carousel-button">Ver Recetas</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption-custom">
            <Link to="/recipes" className="carousel-button">Ver Recetas</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption-custom">
            <Link to="/recipes" className="carousel-button">Ver Recetas</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
