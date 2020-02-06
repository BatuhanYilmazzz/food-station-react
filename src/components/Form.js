import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import './Form.scss';

const Form = () => {
  const API_ID = '189e1438';
  const API_KEY = '8ed21eeb4bfb66412b93d58707992570';

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const getRecipe = e => {
    e.preventDefault();
    setSearch(query);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9`
      )
      .then(res => setRecipes(res.data.hits))
      .catch(err => console.log(err));
  }, [search]);

  return (
    <div>
      <form className='form' onSubmit={getRecipe}>
        <input
          type='text'
          className='form__input'
          value={query}
          onChange={e => setQuery(e.target.value)}
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
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
