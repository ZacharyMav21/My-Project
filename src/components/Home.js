import React, { useState, useEffect } from 'react';

const Home = ({ onAddToFavorites }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Recipe Collection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              margin: '20px',
              border: '1px solid #ccc',
              padding: '10px',
              width: '300px'
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

