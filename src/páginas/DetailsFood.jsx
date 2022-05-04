import React, { useContext } from 'react';
import ReceitasApp from '../context/ReceitasApp';

function DetailsFood() {
  const { recipeDetail } = useContext(ReceitasApp);
  // console.log('recipeS:', recipeDetail);
  return (
    <div>
      <h1 data-testid="recipe-title">{recipeDetail.strMeal}</h1>
      <img
        src={ recipeDetail.strMealThumb }
        alt={ recipeDetail.strMeal }
        height="150px"
        width="150"
      />
      <span
        data-testid="recipe-category"
      >
        { recipeDetail.category }
      </span>

      <button
        type="button"
        data-testid="share-btn"
      >
        share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        favorite
      </button>
    </div>
  );
}

export default DetailsFood;
