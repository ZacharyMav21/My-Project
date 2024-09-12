import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About This App</h1>
      <p>Welcome to my Recipe App! This app allows you to explore a variety of recipes from around the world, add your favorite recipes to a list, and view them anytime you like.</p>
      
      <h2>How It Works</h2>
      <p>Here’s a quick guide on how to use the app:</p>
      
      <ol>
        <li>
          <strong>Home Page:</strong> Browse through a diverse list of recipes from different cuisines. Each recipe provides details such as name, origin, main ingredients, and an image.
        </li>
        <li>
          <strong>Adding to Favorites:</strong> If you find a recipe you like, click the “Add to Favorites” button next to the recipe. This will save the recipe to your favorites list.
        </li>
        <li>
          <strong>Favorites Page:</strong> Visit the “Favorites” page to see all the recipes you’ve marked as favorites. You can view details of each recipe and remove any recipe from your favorites list if you change your mind.
        </li>
        <li>
          <strong>Form Page:</strong> Use the form page to input or submit additional data related to recipes, such as adding new recipes.
        </li>
        <li>
          <strong>About Page:</strong> You’re here! This page provides information about how the app works and how to use it.
        </li>
      </ol>

      <h2>Features</h2>
      <ul>
        <li>Browse recipes by different cuisines.</li>
        <li>Add and remove recipes from your favorites list.</li>
        <li>View information about each recipe.</li>
      </ul>

      
    </div>
  );
};

export default About;