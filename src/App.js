import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import TelaLogin from './Components/TelaLogin';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ TelaLogin } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
