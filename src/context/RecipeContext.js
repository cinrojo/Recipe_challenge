import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de recetas
const RecipeContext = createContext();

// Crear un hook para usar el contexto de recetas
export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    return storedRecipes;
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  const toggleFavorite = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      )
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};
