import React, { useState } from 'react';
import Recipe from './Recipe';
import './Form.scss';

const Form = () => {
  const API_ID = '189e1438';
  const API_KEY = '8ed21eeb4bfb66412b93d58707992570';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const getRecipe = async e => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setSearch('');
  };
  return (
    <div>
      <form className='form' onSubmit={getRecipe}>
        <input
          type='text'
          className='form__input'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className='form__button'>Search</button>
      </form>
      <div className='wrapper'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            yeld={recipe.recipe.yield}
            ingredients={recipe.recipe.ingredientLines}
            totalTime={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
