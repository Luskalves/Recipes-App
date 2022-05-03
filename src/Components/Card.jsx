import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // categoryBtn,
    setcategoryBtn,
    setRecipeDetail,
  } = useContext(ReceitasApp);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [foodButton, setFoodBtn] = useState('beef');

  function btnCategory() {
    foodCategoryCardApi().then((result) => {
      setCategoryOptions(result);
    });
  }

  function filterByCategory({ target }) {
    if (target.name !== foodButton) {
      setFoodBtn(target.name);
      setcategoryBtn(true);
      return (
        categoryFoodApi(target.value).then((result) => {
          setfilterSearchOption(result);
        })
      );
    }
    if (target.name === foodButton) {
      setfilterSearchOption([]);
      setcategoryBtn(false);
    }
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
          name={ value.strCategory }
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
        name="all"
        onClick={ () => setfilterSearchOption([]) }
      >
        All
      </button>
      {filterSearchOption.length === 0
        ? teste.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div key={ index }>
              <Link
                onClick={ () => setRecipeDetail(value) }
                to={ `/foods/${value.idMeal}` }
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
              </Link>
            </div>
          ))
        : filterSearchOption.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
            >
              <Link
                onClick={ () => setRecipeDetail(value) }
                to={ `/foods/${value.idMeal}` }
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
              </Link>
            </div>
          ))}
      {/* { console.log(filterSearchOption) } */}
    </div>
  );
}

export default Card;
