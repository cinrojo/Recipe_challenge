import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';
import Notification from './Notification'; // Importa el componente de notificación

const RecipeItem = ({ recipe }) => {
  const { deleteRecipe, toggleFavorite } = useRecipeContext();
  const [notification, setNotification] = useState(null);

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta receta?')) {
      deleteRecipe(recipe.id);

      // Mostrar la notificación
      setNotification({
        message: 'Receta eliminada con éxito.',
        type: 'success'
      });

      // Ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  return (
    <li className="recipe-item">
      <Notification message={notification?.message} type={notification?.type} />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <div className="recipe-buttons">
        <Link to={`/recipes/${recipe.id}`} className="recipe-button">Ver receta</Link>
        <button onClick={handleDelete} className="recipe-button">Eliminar</button>
        <button onClick={() => toggleFavorite(recipe.id)} className="recipe-button">
          {recipe.isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
        </button>
      </div>
    </li>
  );
};

export default RecipeItem;
