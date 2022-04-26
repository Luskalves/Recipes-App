import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasApp from '../context/ReceitasApp';

function TelaLogin({ history }) {
  const { email, setEmail } = useContext(ReceitasApp);
  const [btnDisable, setBtnDisable] = useState(true);
  const [password, setPassword] = useState('');

  function validateEmail() {
    const PASSWORD_LIMIT = 6;
    const re = /\S+@\S+\.\S+/;
    // console.log(email);
    // console.log(password);
    if (re.test(email) && password.length >= PASSWORD_LIMIT) {
      setBtnDisable(!btnDisable);
    }
  }

  function emailSetState(e) {
    setEmail(e.target.value);
    validateEmail();
  }

  function passwordSetState(e) {
    setPassword(e.target.value);
    validateEmail();
  }

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
        onChange={ emailSetState }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ passwordSetState }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ btnDisable }
        onClick={ btnSubmit }
      >
        Entrar
      </button>
      {/* {console.log(email)} */}
      {/* {console.log(password)} */}
    </form>
  );
}

TelaLogin.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default TelaLogin;
