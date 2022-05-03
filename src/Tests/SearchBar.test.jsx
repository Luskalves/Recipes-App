import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import App from '../App';
import Food from '../páginas/Food';

const INGREDIENT_SEARCH_ID = 'ingredient-search-radio';
const NAME_SEARCH_ID = 'name-search-radio';
const FIRST_LETTER_ID = 'first-letter-search-radio';
const SEARCH_BUTTON_ID = 'exec-search-btn';

describe('Testa o componente da barra de busca', () => {
  it('1- Verifica se os elementos de busca estão sendo renderizados corretamente', () => {
    renderWithRouter(<Food />);

    const ingredientSearch = screen.getByTestId(INGREDIENT_SEARCH_ID);
    const nameSearch = screen.getByTestId(NAME_SEARCH_ID);
    const firstLetter = screen.getByTestId(FIRST_LETTER_ID);
    const searchBtn = screen.getByTestId(SEARCH_BUTTON_ID);

    expect(ingredientSearch).toBeInTheDocument();
    expect(nameSearch).toBeInTheDocument();
    expect(firstLetter).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  // it('2- Verifica se ', () => {
  //   renderWithRouter(<Food />);

  // });
});
