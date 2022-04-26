import React from 'react';
// import ReceitasApp from '../context/ReceitasApp';

function TelaLogin() {
  // const {email, setEmail} = useContext(ReceitasApp);

  return (
    <form>
      <input type="text" data-testid="email-input" />
      <input type="password" data-testid="password-input" />
      <button type="button" data-testid="login-submit-btn">Entrar</button>
    </form>
  );
}

export default TelaLogin;
