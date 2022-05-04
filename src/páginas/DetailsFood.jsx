import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import ReceitasApp from '../context/ReceitasApp';
import findFoodById from '../Components/Api/findFoodById';

function DetailsFood({ match: { params: { id } } }) {
  // const { recipeDetail } = useContext(ReceitasApp);
  const [lista, setLista] = useState(null);
  const [recipe, setRecipe] = useState([]);

  function filtro() {
    const test = Object.entries(recipe);
    const listaIngredientes = test.filter((value) => value[0].includes('strIngredient'));
    const listaIngredientes2 = listaIngredientes.filter((value) => value[1] !== '');
    return listaIngredientes2;
  }

  useEffect(() => {
    findFoodById(id).then((response) => setRecipe(response));
    setLista(filtro());
    console.log('recipe', recipe);
  }, []);

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
        { recipe.category }
      </span>

      {lista ? renderIngredient() : ''}

      <span>{ recipe.strInstructions}</span>

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

        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          start recipe
        </button>
      </div>
    </div>
  );
}

DetailsFood.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};

export default DetailsFood;
