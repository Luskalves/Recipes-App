import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';

function Food() {
  return (
    <div>
      <Header componente="Foods" />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Food;
