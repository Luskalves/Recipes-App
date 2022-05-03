import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';

function Drinks({ history }) {
  return (
    <div>
      <Header componente="Drinks" />
      <SearchBar componente="Drinks" history={ history } />
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default Drinks;
