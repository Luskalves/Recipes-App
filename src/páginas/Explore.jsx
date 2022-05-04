import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Explore({ history }) {
  return (
    <div>
      <Header componente="Explore" />
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ () => {
          history.push('/explore/foods');
        } }
        value="Explore Foods"
      >
        Explore Foods
      </button>
      <br />
      <button
        type="button"
        value="Eplore Drinks"
        data-testid="explore-drinks"
        onClick={ () => {
          history.push('/explore/drinks');
        } }
      >
        Explore Drinks
      </button>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default Explore;
