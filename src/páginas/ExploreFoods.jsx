import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreFoods() {
  return (
    <div>
      <Header componente="Explore Foods" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {} }
        value="explore-by-ingredient"
      >
        By Ingridient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => {} }
        value="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-ingredient"
        onClick={ () => {} }
        value="explore-by-ingredient"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
