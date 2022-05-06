
import React, { useContext, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import randomDrink from '../Components/Api/randomDrinks';
import ReceitasApp from '../context/ReceitasApp';

function ExploreDrinks({ history }) {
  const { aleatoriaDrink, setAleatoriaDrink } = useContext(ReceitasApp);
  useEffect(() => {
    randomDrink().then((response) => {
      setAleatoriaDrink(response);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


function ExploreDrinks({ history }) {
  return (
    <div>
      <Header componente="Explore Drinks" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explore/drinks/ingredients');
        } }
        value="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"

        onClick={ () => {
          history.push(`/drinks/${aleatoriaDrink.idDrink}`);
        } }
        onClick={ () => {} }

        value="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default ExploreDrinks;
