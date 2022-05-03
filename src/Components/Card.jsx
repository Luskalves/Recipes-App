import React, { useContext, useState, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import foodCategoryCardApi from './Api/foodCategoryCardApi';

function Card({ componente }) {
  const MAX_CARDS = 12;
  const {
    filterSearchOption,
  } = useContext(ReceitasApp);
  const [categoryOptions, setCategoryOptions] = useState([]);

  function btnCategory() {
    if (componente === 'Foods') {
      foodCategoryCardApi().then((result) => {
        setCategoryOptions(result);
      });
    }
  }

  useEffect(() => {
    btnCategory();
  }, []);

  return (
    <div>
      { !categoryOptions ? '' : categoryOptions.map((value, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${value.strCategory}-category-filter` }
        >
          { value.strCategory }
        </button>
      ))}
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
