import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasApp from '../context/ReceitasApp';
import ingredienteDrinkApi from '../Components/Api/ingredienteDrinkApi';

function DrinksIngredients() {
  const MAX = 12;
  const {
    ingredienteDrink,
    setIngredienteDrink,
    setNewIngredient } = useContext(ReceitasApp);

  useEffect(() => {
    ingredienteDrinkApi().then((result) => {
      setIngredienteDrink(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header componente="Explore Ingredients" />
      {ingredienteDrink.slice(0, MAX)
        .map((ing, index) => (
          <Link
            key={ index }
            onClick={ () => setNewIngredient(ing.strIngredient1) }
            to="/drinks"
          >
            <div
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              className="ing-img"
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${ing.strIngredient1}-Small.png` }
                alt="imagem"
                data-testid={ `${index}-card-img` }
                className="ing-img"
              />
              <h5 data-testid={ `${index}-card-name` }>{ing.strIngredient1}</h5>
            </div>
          </Link>
        ))}
      <Footer />
    </div>
  );
}

export default DrinksIngredients;
