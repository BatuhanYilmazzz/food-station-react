import React, { useEffect, useState } from 'react';

const API_ID = '189e1438';
const API_KEY = '8ed21eeb4bfb66412b93d58707992570';

const RecipeItem = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const food = props.location.state.title;
    async function fetchMy() {
      const req = await fetch(
        `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const res = await req.json();
      setState(res.hits[0].recipe);
    }
    fetchMy();
  }, []);
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 className='App-title'>Food Station</h1>
        {console.log(state)}
      </div>
    </div>
  );
};

export default RecipeItem;
