import React, { useContext, useState, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import foodCategoryCardApi from './Api/foodCategoryCardApi';
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
          data-testid={ `${value.strCategory}-category-filter` }
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
    </div>
  );
}

export default Card;
