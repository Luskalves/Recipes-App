import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import TelaLogin from './Components/TelaLogin';
import Food from './páginas/Food';
import Drinks from './páginas/Drinks';
import Explore from './páginas/Explore';
import FavoriteRecipes from './páginas/FavoriteRecipes';
import Profile from './páginas/Profile';
import DoneRecipes from './páginas/DoneRecipes';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ TelaLogin } />
          <Route exact path="/foods" component={ Food } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/foods/:id" component={ Food } />
          <Route exact path="/drinks/:id" component={ Drinks } />
          <Route exact path="/foods/:id/in-progress" component={ Food } />
          <Route exact path="/drinks/:id/in-progress" component={ Drinks } />
          <Route exact path="/explore/foods" component={ Explore } />
          <Route exact path="/explore/drinks" component={ Explore } />
          <Route exact path="/explore/drinks/ingredients" component={ Explore } />
          <Route exact path="/explore/foods/ingredients" component={ Explore } />
          <Route exact path="/explore/foods/nationalites" component={ Explore } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
