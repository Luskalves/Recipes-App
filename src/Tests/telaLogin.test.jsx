import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_VALUE = 'email-input';
const PASSWORD_VALUE = 'password-input';
const BTN_VALUE = 'login-submit-btn';
const EMAIL_TEST_VALUE = 'teste@email.com';

describe('Testa a tela de login', () => {
  it('1- Verifica se os inputs estão na tela', () => {
    renderWithRouter(<App />);

    const loginEmail = screen.getByTestId(EMAIL_VALUE);
    const loginPassword = screen.getByTestId(PASSWORD_VALUE);
    const loginBtn = screen.getByTestId(BTN_VALUE);
    expect(loginEmail).toBeInTheDocument();
    expect(loginPassword).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('2- Verifica se os inputs estão podendo escrever', () => {
    renderWithRouter(<App />);

    const loginEmail = screen.getByTestId(EMAIL_VALUE);
    const loginPassword = screen.getByTestId(PASSWORD_VALUE);
    userEvent.type(loginEmail, EMAIL_TEST_VALUE);
    userEvent.type(loginPassword, '1234567');

    expect(loginEmail).toHaveValue(EMAIL_TEST_VALUE);
    expect(loginPassword).toHaveValue('1234567');
  });

  it('3- Verifica se o botão está desativado ao entrar na página', () => {
    renderWithRouter(<App />);

    const loginBtn = screen.getByTestId(BTN_VALUE);
    expect(loginBtn).toBeDisabled();
  });

  it('4- Verifica se redireciona para a página de receitas ao fazer o login', () => {
    renderWithRouter(<App />);

    const loginEmail = screen.getByTestId(EMAIL_VALUE);
    const loginPassword = screen.getByTestId(PASSWORD_VALUE);
    const loginBtn = screen.getByTestId(BTN_VALUE);

    userEvent.type(loginEmail, EMAIL_TEST_VALUE);
    userEvent.type(loginPassword, '1234567');
    userEvent.click(loginBtn);

    const title = screen.getByRole('heading', { name: /Foods/i, level: 1 });
    expect(title).toBeInTheDocument();
  });
});
