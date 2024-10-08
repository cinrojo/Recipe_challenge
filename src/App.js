import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FavoriteRecipes from './components/FavoriteRecipes';
import Navbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import { AuthProvider, useAuth } from './context/AuthProvider';
import { RecipeProvider } from './context/RecipeContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <Router>
          <div className="App">
            <Navbar />
            
            <h1>Aplicación de Recetas</h1>
           
            <Routes>
              <Route path="/" element={<Navigate to="/recipes" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/carousel"
                element={
                  <ProtectedRoute>
                    <CarouselComponent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-recipe"
                element={
                  <ProtectedRoute>
                    <RecipeForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recipes"
                element={
                  <ProtectedRoute>
                    <RecipeList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recipes/:id"
                element={
                  <ProtectedRoute>
                    <RecipeDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <FavoriteRecipes />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
