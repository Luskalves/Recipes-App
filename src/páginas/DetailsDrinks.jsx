import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import ReceitasApp from '../context/ReceitasApp';
import findDrinkById from '../Components/Api/findDrinkById';
import getFoodsApi from '../Components/Api/getFoodsApi';
import '../css/Details.css';

function DetailsDrinks({ match: { params: { id } } }) {
  // const { recipeDetail } = useContext(ReceitasApp);
  const [lista, setLista] = useState(null);
  const [listaMeasure, setMeasure] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [isNull, setIsNull] = useState(true);
  const [recomendations, setRecomendations] = useState([]);

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
  useEffect(() => {
    findDrinkById(id).then((response) => {
      setRecipe(response);
      setIsNull(false);
    });
    setLista(filtro());
    console.log('recipe', recipe);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNull]);

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
            src={ food.strMealThumb }
            alt={ food.strMeal }
            className="recomendation-card-image"
          />
          <span data-testid={ `${idx}-recomendation-title` }>
            {food.strMeal}
          </span>
        </div>
      ));
    }
  }

  useEffect(() => {
    findDrinkById(id).then((response) => {
      setRecipe(response);
      setIsNull(false);
    });
    setLista(filtro());
    setMeasure(filtroMeasure());
    getFoodsApi().then((response) => {
      setRecomendations(response);
    });
  }, [isNull]);

  return (
    <div>
      <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
      <img
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
        height="150px"
        width="150px"
        data-testid="recipe-photo"
      />
      <span
        data-testid="recipe-category"
      >
        { recipe.strAlcoholic }
      </span>

      {lista ? renderIngredient() : ''}
      {listaMeasure ? renderMeasure() : ''}

      <span data-testid="instructions">{ recipe.strInstructions}</span>

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

      <button
        type="button"
        className="start-button"
        data-testid="start-recipe-btn"
      >
        start recipe
      </button>
    </div>
  );
}

DetailsDrinks.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};

export default DetailsDrinks;
