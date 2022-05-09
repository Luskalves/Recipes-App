import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReceitasApp from '../context/ReceitasApp';
import igredientSearchFetchApi from './Api/igredientSearchFetchApi';
// import ingredienteApi from './Api/ingredienteApi';
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
    newIngFood,
    // setNewIngFood,
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

  function newIngFoods() {
    // console.log(newIngFood);
    if (newIngFood !== '') {
      console.log(newIngFood);
      igredientSearchFetchApi(newIngFood).then((result) => {
        setTeste(result);
        // console.log(teste);
      });
    } else {
      openApi().then((result) => {
        setTeste(result);
        console.log(teste);
      });
    }
  }

  useEffect(() => {
    btnCategory();
    newIngFoods();
    // openApi().then((result) => {
    //   setTeste(result);
    // });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    </div>
  );
}

export default Card;
