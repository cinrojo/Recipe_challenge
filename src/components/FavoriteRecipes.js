import React from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeItem from './RecipeItem';

const FavoriteRecipes = () => {
  const { recipes } = useRecipeContext();

  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  if (favoriteRecipes.length === 0) {
    return <p>No tienes recetas favoritas aún.</p>;
  }

  return (
    <div>
      <h2>Recetas Favoritas</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteRecipes;
