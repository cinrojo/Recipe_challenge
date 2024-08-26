import React from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const { recipes } = useRecipeContext();

  console.log(recipes); // Verifica que este array tiene recetas

  if (recipes.length === 0) {
    return <p>No hay recetas disponibles. ¡Agrega una nueva receta!</p>;
  }

  return (
    <div className="recipe-list-container">
      <h2>Lista de Recetas</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
