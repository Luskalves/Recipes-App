import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Provider from '../context/Provider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  const contextValue = {
    email: '',
    searchInput: '',
  };

  return ({
    ...render(
      <Provider value={ contextValue }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>,
    ),
    history,
  });
};

export default renderWithRouter;
