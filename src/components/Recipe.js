import React from 'react';
import { Link } from 'react-router-dom';
import { MdPeopleOutline } from 'react-icons/md';
import './Recipe.scss';

const Recipe = ({ title, calories, image, yeld, ingrediendts }) => {
  return (
    <div className='recipe'>
      <img src={image} alt='' className='recipe__img' />
      <div className='recipe__box'>
        <h2 className='recipe__title'>{title}</h2>
        <hr />
        <div className='recipe__text'>
          <div className='recipe__text__serving'>
            <h2>
              <MdPeopleOutline size={30} /> {yeld}
            </h2>
            <h3>Serving</h3>
          </div>
          <div className='recipe__text__calories'>
            <h2>{Math.round(calories)}</h2>
            <h3>Calories</h3>
          </div>
        </div>
      </div>
      <Link
        to={{
          pathname: `/recipe/${title}`,
          state: { title, calories, image, yeld, ingrediendts }
        }}
        className='recipe__button'>
        View Details
      </Link>
    </div>
  );
};

export default Recipe;
