import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReceitasApp from '../context/ReceitasApp';
import openApiDrinks from './Api/openApiDrinks';
import ingredientDrinkApi from './Api/ingredientDrinkApi';
import drinkCategoryCardApi from './Api/drinkCategoryCardApi';
import categoryDrinksApi from './Api/categoryDrinksApi';

function CardDrinks() {
  const MAX_CARDS = 12;
  const {
    filterSearchOption,
    drinks,
    setDrinks,
    setfilterSearchOption,
    newIngredient,
  } = useContext(ReceitasApp);

  const [categoryDrinkOptions, setCategoryDrinkOptions] = useState([]);
  const [drinkButton, setDrinkBtn] = useState('');

  function btnCategory() {
    drinkCategoryCardApi().then((result) => {
      setCategoryDrinkOptions(result);
    });
  }

  function filterByCategory({ target }) {
    if (target.name !== drinkButton) {
      setDrinkBtn(target.name);
      return (
        categoryDrinksApi(target.value).then((result) => {
          setfilterSearchOption(result);
        })
      );
    }
    if (target.name === drinkButton) {
      setfilterSearchOption([]);
    }
  }

  async function hasIngredient() {
    if (newIngredient !== '') {
      await ingredientDrinkApi(newIngredient).then((result) => {
        setDrinks(result);
      });
    } else {
      await openApiDrinks().then((result) => {
        setDrinks(result);
      });
    }
  }

  useEffect(() => {
    btnCategory();
    hasIngredient();
    // openApiDrinks().then((result) => {
    //   setDrinks(result);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { !categoryDrinkOptions ? '' : categoryDrinkOptions.map((value, index) => (
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
        onClick={ () => setfilterSearchOption([]) }
      >
        All
      </button>
      {filterSearchOption.length === 0
        ? drinks.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
            >
              <Link
                to={ `/drinks/${value.idDrink}` }
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
              </Link>
            </div>
          ))
        : filterSearchOption.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <Link
                to={ `/drinks/${value.idDrink}` }
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
              </Link>
            </div>
          ))}
      {/* {console.log(drinks)} */}
    </div>
  );
}

export default CardDrinks;
