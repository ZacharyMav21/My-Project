import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Favorites from './components/Favorites';  
import Form from './components/Form';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (recipe) => {
    if (!favorites.some(fav => fav.id === recipe.id)) {
      const updatedFavorites = [...favorites, recipe];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (recipeId) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== recipeId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onAddToFavorites={addToFavorites} />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/favorites" 
            element={<Favorites favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />} 
          />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
