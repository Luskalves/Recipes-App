import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Food from '../páginas/Food';
import Explore from '../páginas/Explore';

const DRINKS_ID = 'drinks-bottom-btn';
const EXPLORE_ID = 'explore-bottom-btn';
const FOOD_ID = 'food-bottom-btn';

describe('Testa o Menu inferior', () => {
  it('1- Verifica se renderiza os atributos corretos', () => {
    renderWithRouter(<Food />);

    const footer = screen.getByTestId('footer');
    const drinks = screen.getByTestId(DRINKS_ID);
    const explore = screen.getByTestId(EXPLORE_ID);
    const food = screen.getByTestId(FOOD_ID);

    expect(footer).toBeInTheDocument();
    expect(drinks).toBeInTheDocument();
    expect(explore).toBeInTheDocument();
    expect(food).toBeInTheDocument();
  });

  it('2- Verifica se os ícones corretamente', () => {
    renderWithRouter(<Food />);

    const drinksBtn = screen.getByTestId(DRINKS_ID);
    const exploreBtn = screen.getByTestId(EXPLORE_ID);
    const foodBtn = screen.getByTestId(FOOD_ID);

    expect(drinksBtn.src).toBe('http://localhost/drinkIcon.svg');
    expect(exploreBtn.src).toBe('http://localhost/exploreIcon.svg');
    expect(foodBtn.src).toBe('http://localhost/mealIcon.svg');
  });

  it(`3- Verifica se é redirecionado para página de cocktails ao clicar no ícone
      de bebidas`, () => {
    const { history } = renderWithRouter(<Food />);

    const drinksBtn = screen.getByTestId(DRINKS_ID);
    userEvent.click(drinksBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/drinks');
  });

  it(`4- Verifica se é redirecionado para a página de explorar ao clicar no ícone
      de exploração`, () => {
    const { history } = renderWithRouter(<Food />);

    const exploreBtn = screen.getByTestId(EXPLORE_ID);
    userEvent.click(exploreBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/explore');
  });

  it(`5- Verifica se é redirecionado para a página de comidas ao clicar no ícone
      de comidas`, () => {
    const { history } = renderWithRouter(<Explore />);

    const foodBtn = screen.getByTestId(FOOD_ID);
    userEvent.click(foodBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
