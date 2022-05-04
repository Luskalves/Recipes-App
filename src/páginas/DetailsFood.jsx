import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import ReceitasApp from '../context/ReceitasApp';
import findFoodById from '../Components/Api/findFoodById';

function DetailsFood({ match: { params: { id } } }) {
  // const { recipeDetail } = useContext(ReceitasApp);
  const [lista, setLista] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [isNull, setIsNull] = useState(true);

  function filtro() {
    if (!isNull) {
      const test = Object.entries(recipe);
      const listaIngredientes = test
        .filter((value) => value[0].includes('strIngredient'));
      const listaIngredientes2 = listaIngredientes.filter((value) => value[1] !== '');
      return listaIngredientes2;
    }
  }

  useEffect(() => {
    findFoodById(id).then((response) => {
      setRecipe(response);
      setIsNull(false);
    });
    setLista(filtro());
    console.log('recipe', recipe);
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

      <span data-testid="instructions">{ recipe.strInstructions}</span>

      {/* {console.log('aaaaaaa', recipe.strYoutube)} */}
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

        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          start recipe
        </button>

        <div data-testid="0-recomendation-card"> card </div>
      </div>
    </div>
  );
}

DetailsFood.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};

export default DetailsFood;
