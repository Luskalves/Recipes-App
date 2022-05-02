import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import Card from '../Components/Card';

function Food({ history }) {
  return (
    <div>
      <Header componente="Foods" />
      <SearchBar componente="Foods" history={ history } />
      <Card />
      <Footer />
    </div>
  );
}

Food.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default Food;
