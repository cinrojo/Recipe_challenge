import React, { useState } from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import FormInput from './FormInput';
import Button from './Button';
import Notification from './Notification'; // Importa el nuevo componente

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [notification, setNotification] = useState(null); // Estado para la notificación
  const { addRecipe } = useRecipeContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      name,
      description,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions: instructions.split('.').map((step) => step.trim()),
      isFavorite: false,
    };

    addRecipe(newRecipe);

    // Mostrar la notificación
    setNotification({
      message: '¡Receta añadida con éxito!',
      type: 'success'
    });

    // Limpiar el formulario
    setName('');
    setDescription('');
    setIngredients('');
    setInstructions('');

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div>
      <h2>Añadir Nueva Receta</h2>
      <Notification message={notification?.message} type={notification?.type} />
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre de la Receta:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          label="Descripción:"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <FormInput
          label="Ingredientes (separados por comas):"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <FormInput
          label="Instrucciones (separadas por puntos):"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <Button type="submit">Añadir Receta</Button>
      </form>
    </div>
  );
};

export default RecipeForm;
