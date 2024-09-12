import React, { useState, useEffect } from 'react';

const Home = ({ onAddToFavorites }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDeletedRecipe, setLastDeletedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/recipes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Find the deleted recipe before removing it from state
        const deletedRecipe = recipes.find((recipe) => recipe.id === id);
        setLastDeletedRecipe(deletedRecipe);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      } else {
        console.error('Failed to delete the recipe');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const restoreLastDeletedRecipe = async () => {
    if (!lastDeletedRecipe) {
      console.log('No recipe to restore');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lastDeletedRecipe),
      });

      if (response.ok) {
        const restoredRecipe = await response.json();
        setRecipes([...recipes, restoredRecipe]);
        setLastDeletedRecipe(null);
      } else {
        console.error('Failed to restore the recipe');
      }
    } catch (error) {
      console.error('Error restoring recipe:', error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Recipe Collection</h1>
      <button onClick={restoreLastDeletedRecipe} style={{ marginBottom: '20px', backgroundColor: 'green', color: 'white' }}>
        Restore Last Deleted Recipe
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              margin: '20px',
              border: '1px solid #ccc',
              padding: '10px',
              width: '300px',
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h2>{recipe.name}</h2>
            <p><strong>Origin:</strong> {recipe.origin}</p>
            <p><strong>Main Ingredients:</strong> {recipe.mainIngredients.join(', ')}</p>
            <button onClick={() => onAddToFavorites(recipe)}>
              Add to Favorites
            </button>
            <button
              onClick={() => deleteRecipe(recipe.id)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

