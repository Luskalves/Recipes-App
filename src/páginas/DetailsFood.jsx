import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import findFoodById from '../Components/Api/findFoodById';
import getDrinksApi from '../Components/Api/getDrinksApi';
import '../css/Details.css';
// import ReceitasApp from '../context/ReceitasApp';

function DetailsFood({ match: { params: { id } } }) {
  const [lista, setLista] = useState(null);
  const [listaMeasure, setMeasure] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [isNull, setIsNull] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
  const [recipeStorage, setRecipeStorage] = useState(false);

  function filtro() {
    if (!isNull) {
      const test = Object.entries(recipe);
      const listaIngredientes = test
        .filter((value) => value[0].includes('strIngredient'));
      const listaIngredientes2 = listaIngredientes.filter((value) => value[1] !== '');
      return listaIngredientes2;
    }
  }

  function filtroMeasure() {
    if (!isNull) {
      const test = Object.entries(recipe);
      const listaIngredientes = test
        .filter((value) => value[0].includes('strMeasure'));
      const listaIngredientes2 = listaIngredientes.filter((value) => value[1] !== '');
      return listaIngredientes2;
    }
  }

  function renderRecomendations() {
    const MAX_RECOMENDATIONS = 6;
    const listFilteredFood = [];
    recomendations.filter((food, idx) => {
      if (idx < MAX_RECOMENDATIONS) {
        listFilteredFood.push(food);
      }
      return listFilteredFood;
    });
    if (recomendations) {
      return listFilteredFood.map((food, idx) => (
        <div
          key={ idx }
          className="card"
          data-testid={ `${idx}-recomendation-card` }
        >
          <img
            src={ food.strDrinkThumb }
            alt={ food.strDrink }
            className="recomendation-card-image"
          />
          <span data-testid={ `${idx}-recomendation-title` }>
            {food.strDrink}
          </span>
        </div>
      ));
    }
  }

  function checkStorage() {
    localStorage.clear();
    localStorage.setItem('doneRecipes', recipe);
    const startedStorage = localStorage.getItem('doneRecipes');
    setRecipeStorage(false);
    console.log(startedStorage);
    // if (startedStorage.includes(recipe)) {
    //   setRecipeStorage(true);
    //   console.log('incluiu');
    // }
  }

  useEffect(() => {
    checkStorage();
    findFoodById(id).then((response) => {
      setRecipe(response);
      setIsNull(false);
    });
    setLista(filtro());
    setMeasure(filtroMeasure());
    getDrinksApi().then((response) => {
      setRecomendations(response);
    });
  }, [isNull, recipeStorage]);

  function renderIngredient() {
    return lista.map((value, idx) => (
      <div
        key={ idx }
        data-testid={ `${idx}-ingredient-name-and-measure` }
      >
        <p>
          {value[1]}
        </p>
      </div>
    ));
  }

  function renderMeasure() {
    return listaMeasure.map((value, idx) => (
      <div
        key={ value }
        data-testid={ `${idx}-ingredient-name-and-measure` }
      >
        <p>
          {value[1]}
        </p>
      </div>
    ));
  }

  function changeLocalStorage() {
    console.log('clickou');
  }

  function renderStartButton() {
    return (
      <button
        type="button"
        className="start-button"
        data-testid="start-recipe-btn"
        onClick={ () => changeLocalStorage() }
      >
        start recipe
      </button>
    );
  }

  return (
    <div>
      <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        height="150px"
        width="150"
        data-testid="recipe-photo"
      />
      <span
        data-testid="recipe-category"
      >
        { recipe.strCategory }
      </span>

      {lista ? renderIngredient() : ''}
      {listaMeasure ? renderMeasure() : ''}

      <span data-testid="instructions">{ recipe.strInstructions}</span>

      <iframe
        src={ recipe.strYoutube }
        data-testid="video"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div>
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

      <div className="recomendation-card">
        <div className="cards">
          {renderRecomendations()}
        </div>
      </div>

      {
        recipeStorage ? '' : renderStartButton()
      }
    </div>
  );
}

DetailsFood.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};

export default DetailsFood;
