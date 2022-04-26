import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitasApp from './ReceitasApp';

function Provider({ children }) {
  const [email, setEmail] = useState();

  const contextValue = {
    email,
    setEmail,
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
