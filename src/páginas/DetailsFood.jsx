import React, { useContext, useEffect, useState } from 'react';
import ReceitasApp from '../context/ReceitasApp';

function DetailsFood() {
  const { recipeDetail } = useContext(ReceitasApp);
  const [lista, setLista] = useState(null);
  const [recipe, setRecipe] = useState('');

  function filtro() {
    const test = Object.entries(recipeDetail);
    const listaIngredientes = test.filter((value) => value[0].includes('strIngredient'));
    const listaIngredientes2 = listaIngredientes.filter((value) => value[1] !== '');
    console.log(listaIngredientes2);
    return listaIngredientes2;
  }

  useEffect(() => {
    setLista(filtro());
    setRecipe(recipeDetail);
  }, []);

  function teste() {
    console.log('foi');
    if (lista !== null) {
      return lista.map((value, idx) => (
        <div
          key={ idx }
          data-testid={ `${idx}-ingredient-name-and-measure` }
        >
          {console.log(idx)}
          <p>
            {value[1]}
          </p>
        </div>
      ));
    }
  }

  return (
    <div>
      {/* <button type="button" onClick={ () => teste() }> teste </button> */}
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

      {teste()}

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

export default DetailsFood;
