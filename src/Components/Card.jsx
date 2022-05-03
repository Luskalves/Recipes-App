import React, { useContext, useState, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import foodCategoryCardApi from './Api/foodCategoryCardApi';
import categoryFoodApi from './Api/categoryFoodApi';
import openApi from './Api/openApi';

function Card() {
  const MAX_CARDS = 12;
  const {
    teste,
    setTeste,
    filterSearchOption,
    setfilterSearchOption,
  } = useContext(ReceitasApp);
  const [categoryOptions, setCategoryOptions] = useState([]);

  function btnCategory() {
    foodCategoryCardApi().then((result) => {
      setCategoryOptions(result);
    });
  }

  function filterByCategory({ target }) {
    categoryFoodApi(target.value).then((result) => {
      setTeste(result);
    });
  }

  useEffect(() => {
    btnCategory();
    openApi().then((result) => {
      setTeste(result);
    });
  }, []);

  // function sendToCardDetails({ target }) {
  //   console.log(target.value);
  // }

  return (
    <div>
      { !categoryOptions ? '' : categoryOptions.map((value, index) => (
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
        ? teste.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strMealThumb }
                alt={ value.strMeal }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                { value.strMeal }
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
                src={ value.strMealThumb }
                alt={ value.strMeal }
              />
              <h2
                data-testid={ `${index}-card-name` }
              >
                { value.strMeal }
              </h2>
            </div>
          ))}
      {/* { console.log(filterSearchOption) } */}
    </div>
  );
}

export default Card;
