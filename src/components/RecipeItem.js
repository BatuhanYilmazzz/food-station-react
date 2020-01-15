import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPeopleOutline, MdAccessTime } from 'react-icons/md';
import './RecipeItem.scss';

const API_ID = '189e1438';
const API_KEY = '8ed21eeb4bfb66412b93d58707992570';

const RecipeItem = props => {
  const [state, setState] = useState([]);
  const food = props.location.state.title;
  useEffect(() => {
    async function fetchMyData() {
      const req = await fetch(
        `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const res = await req.json();
      setState(res.hits[0].recipe);
    }
    fetchMyData();
  }, []);
  return (
    <div className='recipe-container'>
      <div className='recipe-item'>
        <img src={state.image} alt='Food' className='recipe-item__pht' />
        <div className='recipe-item__box'>
          <h2>{state.label}</h2>
        </div>
        <p>by {state.source}</p>
        <div className='recipe-item__info'>
          <div>
            <h4>
              <MdPeopleOutline /> {state.yield}
            </h4>
            <p>Serving</p>
          </div>
          <div>
            <h4>
              <MdAccessTime /> {state.totalTime}
            </h4>
            <p>Minutes</p>
          </div>
          <div>
            <h4>{state.calories}</h4>
            <p>Calories</p>
            {console.log(state)}
          </div>
        </div>
        <div className='recipe-item__igredients'>
          <ul>
            {state.ingredientLines ? (
              state.ingredientLines.map((num, index) => {
                return <li key={index}>{num}</li>;
              })
            ) : (
              <li></li>
            )}
          </ul>
        </div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default RecipeItem;
