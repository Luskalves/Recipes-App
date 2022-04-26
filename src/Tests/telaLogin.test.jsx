import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_VALUE = 'email-input';
const PASSWORD_VALUE = 'password-input';
const BTN_VALUE = 'login-submit-btn';
const EMAIL_TEST_VALUE = 'teste@email.com';

describe('Testa TelaLogin', () => {
  it('1- Verifica se os inputs estão na tela', () => {
    renderWithRouter(<App />);
    const loginEmail = screen.getByTestId(EMAIL_VALUE);
    const loginPassword = screen.getByTestId(PASSWORD_VALUE);
    const loginBtn = screen.getByTestId(BTN_VALUE);
    expect(loginEmail).toBeInTheDocument();
    expect(loginPassword).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('2- Os inputs estão podendo escrever', () => {
    renderWithRouter(<App />);
    const loginEmail = screen.getByTestId(EMAIL_VALUE);
    const loginPassword = screen.getByTestId(PASSWORD_VALUE);
    userEvent.type(loginEmail, EMAIL_TEST_VALUE);
    userEvent.type(loginPassword, '1234567');

    expect(loginEmail).toHaveValue(EMAIL_TEST_VALUE);
    expect(loginPassword).toHaveValue('1234567');
  });

  it('3-Verificar se o botão está ativado', () => {
    renderWithRouter(<App />);
    const loginBtn = screen.getByTestId(BTN_VALUE);
    expect(loginBtn).toBeDisabled(true);
  });

  // it('4-Verifica se troca de pagina', () => {
  //   const { history } = renderWithRouter(<App />);
  //   const loginBtn = screen.getByText('Entrar');
  //   const loginEmail = screen.getByTestId(EMAIL_VALUE);
  //   const loginPassword = screen.getByTestId(PASSWORD_VALUE);
  //   console.log(screen.getByTestId(EMAIL_VALUE));
  //   userEvent.type(loginEmail, EMAIL_TEST_VALUE);
  //   userEvent.type(loginPassword, '1234567');
  //   userEvent.click(loginBtn);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/foods');
  // });
});
