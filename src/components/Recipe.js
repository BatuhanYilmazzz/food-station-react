import React from 'react';
import { Link } from 'react-router-dom';
import { MdPeopleOutline, MdAccessTime } from 'react-icons/md';
import './Recipe.scss';

const Recipe = ({
  title,
  calories,
  image,
  yeld,
  ingrediendts,
  totalTime,
  url
}) => {
  return (
    <div className='recipe'>
      <img src={image} alt='' className='recipe__img' />
      <div className='recipe__box'>
        <h3 className='recipe__title'>{title}</h3>
        <hr />
        <div className='recipe__text'>
          <div className='recipe__text__serving'>
            <h5>
              <MdPeopleOutline size={20} /> {yeld}
            </h5>
            <h5>Serving</h5>
          </div>
          <div className='recipe__text__minute'>
            <h5>
              <MdAccessTime size={20} /> {totalTime}
            </h5>
            <h5>Minutes</h5>
          </div>
          <div className='recipe__text__calories'>
            <h4>{Math.round(calories)}</h4>
            <h5>Calories</h5>
          </div>
        </div>
      </div>

      <Link
        to={{
          pathname: `/recipe/${title}`,
          state: { title, url }
        }}
        className='recipe__button'>
        Show Details
      </Link>
    </div>
  );
};

export default Recipe;
