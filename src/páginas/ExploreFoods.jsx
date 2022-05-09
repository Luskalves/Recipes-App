import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import randomFood from '../Components/Api/randomFood';
import ReceitasApp from '../context/ReceitasApp';

function ExploreFoods({ history }) {
  const { setAleatoria, aleatoria } = useContext(ReceitasApp);

  useEffect(() => {
    randomFood().then((response) => {
      setAleatoria(response);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header componente="Explore Foods" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explore/foods/ingredients');
        } }
        value="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => {
          history.push('/explore/foods/nationalities');
        } }
        value="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push(`/foods/${aleatoria.idMeal}`);
        } }
        value="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default ExploreFoods;
