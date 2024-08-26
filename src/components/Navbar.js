import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo_.jpeg';
import CarouselComponent from './CarouselComponent';  // Asegúrate de que la ruta sea correcta


// Importación de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faPinterest, faFacebook, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const NavbarComponent = () => {
  const { user, logout } = useAuth();
  const [showCarousel, setShowCarousel] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    if (user && location.pathname === "/carousel") {
      setShowCarousel(true);
    } else if (!user) {
      alert('Por favor, inicia sesión para ver el carrusel');
    }
  };

  if (location.pathname !== "/carousel" && showCarousel) {
    setShowCarousel(false);
  }

  return (
    <>
      <Navbar bg="white" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/carousel" className="navbar-brand-custom" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '200px', marginRight: '90px' }} 
            />
            <h3>Mi APP de Recetas</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {!user ? (
                <>
                  <Nav.Link as={Link} to="/register" className="nav-link-custom">
                    SUSCRIBITE
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" className="nav-link-custom">
                    INICIAR SESIÓN
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/recipes" className="nav-link-custom">
                    Mis Recetas
                  </Nav.Link>
                  <Nav.Link as={Link} to="/favorites" className="nav-link-custom">
                    Favoritos
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add-recipe" className="nav-link-custom">
                    Añadir Receta
                  </Nav.Link>
                  <Button variant="outline-danger" onClick={logout} className="logout-button-custom">
                    Cerrar Sesión
                  </Button>
                </>
              )}
              
              {/* Iconos de redes sociales */}
              <div className="social-icons">
                <a href="https://www.instagram.com/RevistaTigris/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="nav-icon-custom" />
                </a>
                <a href="https://ar.pinterest.com/revistatigris/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPinterest} size="lg" className="nav-icon-custom" />
                </a>
                <a href="https://www.facebook.com/RevistaTigris" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" className="nav-icon-custom" />
                </a>
                <a href="https://www.youtube.com/channel/UCEe8vFxnOV2WsBs9MclmCnQ" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="lg" className="nav-icon-custom" />
                </a>
                <a href="https://open.spotify.com/show/2SAyii0H9HeVMKRr5IUbsZ?si=viE0ICEWSEqRA17bjvNnIg" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSpotify} size="lg" className="nav-icon-custom" />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showCarousel && location.pathname === "/carousel" && <CarouselComponent />}
    </>
  );
};

export default NavbarComponent;
