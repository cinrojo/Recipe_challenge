import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useRecipeContext();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Receta no encontrada.</p>;
  }

  return (
    <div className='recipe-detail'>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>
        <strong>Ingredientes:</strong> {recipe.ingredients.join(', ')}
      </p>
      <p>
        <strong>Instrucciones:</strong> {recipe.instructions.join('. ')}
      </p>
      <button onClick={() => navigate('/recipes')}>Volver a la Lista</button>
    </div>
  );
};

export default RecipeDetail;
