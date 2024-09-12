import React from 'react';

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {favorites.map((recipe) => (
            <div key={recipe.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', width: '300px' }}>
              <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h2>{recipe.name}</h2>
              <p><strong>Origin:</strong> {recipe.origin}</p>
              <p><strong>Main Ingredients:</strong> {recipe.mainIngredients.join(', ')}</p>
              <button onClick={() => onRemoveFromFavorites(recipe.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default Favorites;