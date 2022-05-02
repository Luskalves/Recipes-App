import React, { useContext } from 'react';
import ReceitasApp from '../context/ReceitasApp';

function Card() {
  const MAX_CARDS = 12;
  const {
    filterSearchOption,
  } = useContext(ReceitasApp);
  return (
    <div>
      {filterSearchOption.slice(0, MAX_CARDS)
        .map((value, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              className="card-img"
              src={ value.strMealThumb || value.strDrinkThumb }
              alt={ value.strMeal || value.strDrink }
            />
            <h3
              data-testid={ `${index}-card-name` }
            >
              { value.strMeal || value.strDrink }
            </h3>
          </div>
        ))}
    </div>
  );
}

export default Card;
