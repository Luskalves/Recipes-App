import React, { useContext } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import nameSearchFetchApi from './Api/nameSearchFetchApi';
import igredientSearchFetchApi from './Api/igredientSearchFetchApi';

function SearchBar() {
  const {
    filterSearchOption,
    setfilterSearchOption,
    searchInput,
  } = useContext(ReceitasApp);

  function searchHandleChange({ target }) {
    if (target.id === 'name') {
      nameSearchFetchApi(searchInput).then((result) => {
        setfilterSearchOption(result);
      });
    }
    if (target.id === 'ingredient') {
      igredientSearchFetchApi().then((result) => {
        setfilterSearchOption(result);
      });
    }
  }

  return (
    <>
      <form>
        <label htmlFor="ingredient">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            placeholder="Pesquise aqui..."
            name="filtro"
            id="ingredient"
            onClick={ searchHandleChange }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            placeholder="Pesquise aqui..."
            name="filtro"
            id="name"
            onClick={ searchHandleChange }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            placeholder="Pesquise aqui..."
            name="filtro"
            id="firstLetter"
            onClick={ searchHandleChange }
          />
          First Letter
        </label>
        <br />
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
      <div>
        { filterSearchOption.map((meal, index) => (
          <h3 key={ index }>
            { meal.strMeal }
          </h3>
        ))}
        {console.log(filterSearchOption)}
      </div>
    </>
  );
}

export default SearchBar;
