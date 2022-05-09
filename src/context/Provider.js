import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasApp from './ReceitasApp';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [filterSearchOption, setfilterSearchOption] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [teste, setTeste] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categoryBtn, setcategoryBtn] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [aleatoria, setAleatoria] = useState([]);
  const [aleatoriaDrink, setAleatoriaDrink] = useState([]);
  const [startedRecipes, setStartedRecipes] = useState([]);

  const contextValue = {
    email,
    searchInput,
    filterSearchOption,
    setEmail,
    setfilterSearchOption,
    setSearchInput,
    teste,
    setTeste,
    drinks,
    setDrinks,
    categoryBtn,
    setcategoryBtn,
    recipeDetail,
    setRecipeDetail,
    aleatoria,
    setAleatoria,
    setAleatoriaDrink,
    aleatoriaDrink,
    startedRecipes,
    setStartedRecipes,
  };

  return (
    <ReceitasApp.Provider value={ contextValue }>
      { children }
    </ReceitasApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
