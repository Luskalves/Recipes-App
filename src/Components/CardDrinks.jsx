import React, { useContext, useState, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import openApiDrinks from './Api/openApiDrinks';
import drinkCategoryCardApi from './Api/drinkCategoryCardApi';
import categoryDrinksApi from './Api/categoryDrinksApi';

function CardDrinks() {
  const MAX_CARDS = 12;
  const {
    filterSearchOption,
    drinks,
    setDrinks,
    setfilterSearchOption,
  } = useContext(ReceitasApp);

  const [categoryDrinkOptions, setCategoryDrinkOptions] = useState([]);

  function btnCategory() {
    drinkCategoryCardApi().then((result) => {
      setCategoryDrinkOptions(result);
    });
  }

  function filterByCategory({ target }) {
    categoryDrinksApi(target.value).then((result) => {
      setDrinks(result);
    });
  }

  useEffect(() => {
    btnCategory();
    openApiDrinks().then((result) => {
      setDrinks(result);
    });
  }, []);

  return (
    <div>
      { !categoryDrinkOptions ? '' : categoryDrinkOptions.map((value, index) => (
        <button
          key={ index }
          type="button"
          value={ value.strCategory }
          data-testid={ `${value.strCategory}-category-filter` }
          onClick={ filterByCategory }
        >
          { value.strCategory }
        </button>
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setfilterSearchOption([]) }
      >
        All
      </button>
      {filterSearchOption.length === 0
        ? drinks.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strDrinkThumb }
                alt={ value.strDrink }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                { value.strDrink }
              </h3>
            </div>
          ))
        : filterSearchOption.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strDrinkThumb }
                alt={ value.strDrink }
              />
              <h2
                data-testid={ `${index}-card-name` }
              >
                { value.strDrink }
              </h2>
            </div>
          ))}
    </div>
  );
}

export default CardDrinks;
