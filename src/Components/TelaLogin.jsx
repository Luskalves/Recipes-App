/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReceitasApp from '../context/ReceitasApp';

function TelaLogin({ history }) {
  const { email, setEmail } = useContext(ReceitasApp);
  const [btnDisable, setBtnDisable] = useState(true);
  const [password, setPassword] = useState('');

  function validateEmail() {
    const PASSWORD_LIMIT = 6;
    const re = /\S+@\S+\.\S+/;

    if (re.test(email) && password.length > PASSWORD_LIMIT) {
      setBtnDisable(false);
    }
  }

  useEffect(() => {
    validateEmail();
  }, [email, password]);

  function btnSubmit() {
    const emailSubmit = { email };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(emailSubmit)); // JSON.stringify transforma para string
    history.push('/foods');
  }

  return (
    <form>
      <input
        type="text"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ btnDisable }
        onClick={ btnSubmit }
      >
        Entrar
      </button>
    </form>
  );
}

TelaLogin.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default TelaLogin;
