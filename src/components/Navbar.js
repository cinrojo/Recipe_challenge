import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useAuth } from '../context/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo_.jpeg';

const NavbarComponent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // Utiliza useNavigate para redirigir

  const handleLogoClick = () => {
    if (user) {
      navigate('/carousel'); // Redirige a la ruta del carrusel si el usuario está logueado
    } else {
      navigate('/login'); // Redirige al login si el usuario no está logueado
    }
  };

  return (
    <>
      <Navbar bg="white" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand onClick={handleLogoClick} className="navbar-brand-custom" style={{ cursor: 'pointer' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '200px', marginRight: '90px' }}
            />
            <h3>Mi APP de Recetas</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
