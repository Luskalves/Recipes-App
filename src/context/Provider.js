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
  const [doneRecipes, setDoneRecipes] = useState([
    {
      id: '52771',
      type: 'comida',
      nationality: '',
      category: 'Italian - Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '530501',
      type: 'comida',
      nationality: '',
      category: 'Alcoholic',
      alcoholicOrNot: '',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: 'Thu May 05 2022 18:17:39 GMT-0300 (Brasilia Standard Time)',
      tags: ['Pasta', 'Curry'],
    },
  ]);

  localStorage.setItem('doneRecipes', false);
  const [aleatoria, setAleatoria] = useState([]);
  const [aleatoriaDrink, setAleatoriaDrink] = useState([]);

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
    doneRecipes,
    setDoneRecipes,
    aleatoria,
    setAleatoria,
    setAleatoriaDrink,
    aleatoriaDrink,
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
