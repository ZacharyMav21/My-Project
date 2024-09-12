import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    origin: '',
    mainIngredients: '',
    image: ''
  });

  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const newId = storedRecipes.length ? Math.max(storedRecipes.map(recipe => recipe.id)) + 1 : 1;

    const newRecipe = {
      id: newId,
      ...recipe
    };

    const updatedRecipes = [...storedRecipes, newRecipe];
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    setRecipe({
      name: '',
      origin: '',
      mainIngredients: '',
      image: ''
    });

    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={recipe.origin}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mainIngredients">Main Ingredients (comma-separated):</label>
          <input
            type="text"
            id="mainIngredients"
            name="mainIngredients"
            value={recipe.mainIngredients}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Form;