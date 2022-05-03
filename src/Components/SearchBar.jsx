import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ReceitasApp from '../context/ReceitasApp';
import nameSearchFetchApi from './Api/nameSearchFetchApi';
import igredientSearchFetchApi from './Api/igredientSearchFetchApi';
import firstLetterSearchApi from './Api/firstLetterSearchApi';
import ingredientDrinkApi from './Api/ingredientDrinkApi';
import nameDrinkApi from './Api/nameDrinkApi';
import firstLetterDrinkApi from './Api/firstLetterDrinkApi';
import Card from './Card';
import CardDrinks from './CardDrinks';

function SearchBar({ history, componente }) {
  const {
    filterSearchOption,
    setfilterSearchOption,
    searchInput,
    setSearchInput,
    categoryBtn,
  } = useContext(ReceitasApp);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  function checkRender() {
    if (componente === 'Drinks') {
      if (filterSearchOption.length === 1 && !categoryBtn) {
        history.push(`/drinks/${filterSearchOption[0].idDrink}`);
      }
      return <CardDrinks />;
    }
    if (filterSearchOption.length === 1 && !categoryBtn) {
      history.push(`/foods/${filterSearchOption[0].idMeal}`);
    }
    return <Card />;
  }

  function alertGlobal(result) {
    const TEXT_ALERT = 'Sorry, we haven\'t found any recipes for these filters.';
    if (result.length === 0) {
      global.alert(TEXT_ALERT);
    }
  }

  function drinkSearchHandleChange() {
    switch (opcaoSelecionada) {
    case 'name':
      nameDrinkApi(searchInput).then((result) => {
        console.log(result);
        alertGlobal(result);
        setfilterSearchOption(result);
      });
      break;
    case 'ingredient':
      ingredientDrinkApi(searchInput).then((result) => {
        alertGlobal(result);
        setfilterSearchOption(result);
      });
      break;
    case 'firstLetter':
      if (searchInput.length > 1) {
        setSearchInput('');
        return global.alert('Your search must have only 1 (one) character');
      }
      firstLetterDrinkApi(searchInput).then((result) => {
        alertGlobal(result);
        setfilterSearchOption(result);
      });
      break;
    default: return [];
    }
  }

  function searchHandleChange() {
    if (componente !== 'Drinks') {
      switch (opcaoSelecionada) {
      case 'name':
        nameSearchFetchApi(searchInput).then((result) => {
          alertGlobal(result);
          setfilterSearchOption(result);
        });
        break;
      case 'ingredient':
        igredientSearchFetchApi(searchInput).then((result) => {
          alertGlobal(result);
          setfilterSearchOption(result);
        });
        break;
      case 'firstLetter':
        if (searchInput.length > 1) {
          setSearchInput('');
          return global.alert('Your search must have only 1 (one) character');
        }
        firstLetterSearchApi(searchInput).then((result) => {
          alertGlobal(result);
          setfilterSearchOption(result);
        });
        break;
      default: return [];
      }
    } else {
      drinkSearchHandleChange();
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
            onClick={ ({ target }) => setOpcaoSelecionada(target.id) }
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
            onClick={ ({ target }) => setOpcaoSelecionada(target.id) }
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
            onClick={ ({ target }) => setOpcaoSelecionada(target.id) }
          />
          First Letter
        </label>
        <br />
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ searchHandleChange }
        >
          Search
        </button>
      </form>
      <div>
        { checkRender() }
      </div>
    </>
  );
}

SearchBar.propTypes = {
  componente: PropTypes.string.isRequired,
  history: PropTypes.shape(Object).isRequired,
};

export default SearchBar;
