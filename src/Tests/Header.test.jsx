import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import Food from '../páginas/Food';
import Drinks from '../páginas/Drinks';
import ExploreNationalities from '../páginas/ExploreNationalities';
import DetailsFood from '../páginas/DetailsFood';

const PROFILE_TESTID = 'profile-top-btn';
const SEARCH_TESTID = 'search-top-btn';

describe('Testa o componente Header', () => {
  it(`1- Verifica se os elementos do header estão sendo renderizados na
      tela de receitas`, () => {
    renderWithRouter(<Food />);

    const profileBtn = screen.getByTestId(PROFILE_TESTID);
    const searchBtn = screen.getByTestId(SEARCH_TESTID);
    const profileTitle = screen.getByTestId('page-title');

    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });

  it('2- Verifica se os ícones estão sendo renderizados corretamente', () => {
    renderWithRouter(<Food />);

    const profileBtn = screen.getByTestId(PROFILE_TESTID);
    const searchBtn = screen.getByTestId(SEARCH_TESTID);
    const profileTitle = screen.getByRole('heading', { name: /Foods/i, level: 1 });

    expect(profileBtn.src).toBe('http://localhost/profileIcon.svg');
    expect(searchBtn.src).toBe('http://localhost/searchIcon.svg');
    expect(profileTitle).toBeInTheDocument();
  });

  it(`3- Verifica se é redirecionado para a página de perfil
      ao clicar no botão perfil`, () => {
    const { history } = renderWithRouter(<Food />);

    const profileBtn = screen.getByTestId(PROFILE_TESTID);
    expect(profileBtn).toBeInTheDocument();
    userEvent.click(profileBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });

  it('4- Verifica se ao clicar no botão de busca, apareça o input de busca', () => {
    renderWithRouter(<Food />);

    const searchBtn = screen.getByTestId(SEARCH_TESTID);
    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });

  it(`5- Verifica se nas páginas Drinks e Explore, o header esta sendo
      renderizado corretamente`, () => {
    const { history } = renderWithRouter(<Drinks />);

    const profileTitle = screen.getByRole('heading', { name: /Drinks/i, level: 1 });
    const profileBtn = screen.getByTestId(PROFILE_TESTID);
    const searchBtn = screen.getByTestId(SEARCH_TESTID);

    expect(profileTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    userEvent.click(exploreBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/explore');
    expect(profileBtn).toBeInTheDocument();
  });

  it(`6- Verifica se a página Explore Nationalities é renderizado com os ícones
      corretos`, () => {
    renderWithRouter(<ExploreNationalities />);

    const profileTitle = screen.getByRole('heading', {
      name: /Explore Nationalities/i, level: 1 });
    const profileBtn = screen.getByTestId(PROFILE_TESTID);
    const searchBtn = screen.getByTestId(SEARCH_TESTID);

    expect(profileTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  it('7- Verifica se o header não esta sendo renderizado na tela de login', () => {
    renderWithRouter(<App />);

    const loginEmail = screen.getByTestId('email-input');
    const loginPassword = screen.getByTestId('password-input');

    expect(loginEmail).toBeInTheDocument();
    expect(loginPassword).toBeInTheDocument();
  });

  it('8- Verifica se na página Detalhes da Comida não esta sendo renderizado o header',
    () => {
      renderWithRouter(<DetailsFood />);

      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
    });

  it('9- Verifica se consegue escrever no input de busca', () => {
    renderWithRouter(<Drinks />);

    const searchBtn = screen.getByTestId(SEARCH_TESTID);
    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'teste');

    expect(searchInput).toHaveValue('teste');
  });
});
