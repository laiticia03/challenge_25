import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipesPage = ({ token }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/recipes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecipes(response.data);
      } catch (error) {
        console.error('There was an error fetching the recipes!', error);
      }
    };

    fetchRecipes();
  }, [token]);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name} - ${recipe.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;