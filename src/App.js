import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import TelaLogin from './Components/TelaLogin';
import Food from './páginas/Food';
import Drinks from './páginas/Drinks';
import Explore from './páginas/Explore';
import FavoriteRecipes from './páginas/FavoriteRecipes';
import Profile from './páginas/Profile';
import DoneRecipes from './páginas/DoneRecipes';
import DetailsFood from './páginas/DetailsFood';
import DetailsDrinks from './páginas/DetailsDrinks';
import ExploreNationalities from './páginas/ExploreNationalities';
import ExploreDrinks from './páginas/ExploreDrinks';
import ExploreFoods from './páginas/ExploreFoods';
import DrinksIngredients from './páginas/DrinksIngredients';
import FoodsIngredients from './páginas/FoodsIngredients';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ TelaLogin } />
        <Route exact path="/foods" component={ Food } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/foods/:id" component={ DetailsFood } />
        <Route exact path="/drinks/:id" component={ DetailsDrinks } />
        <Route exact path="/foods/:id/in-progress" component={ DetailsFood } />
        <Route exact path="/drinks/:id/in-progress" component={ DetailsDrinks } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ DrinksIngredients }
        />
        <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
      </Switch>
    </Provider>
  );
}

export default App;
