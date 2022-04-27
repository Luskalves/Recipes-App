import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ componente }) {
  const [searchBtn, setSearchBtn] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <header>
      <h1 data-testid="page-title">{ componente }</h1>
      <Link to="/profile">
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      </Link>
      { componente === 'Foods' || componente === 'Explore Nationalities'
        || componente === 'Drinks' ? (
          <button type="button" onClick={ () => setSearchBtn(!searchBtn) }>
            <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
          </button>)
        : '' }
      { searchBtn
        && (
          <input
            type="text"
            data-testid="search-input"
            value={ searchInput }
            placeholder="Pesquise aqui..."
            onChange={ (e) => setSearchInput(e.target.value) }
          />)}
    </header>
  );
}

Header.propTypes = {
  componente: PropTypes.string.isRequired,
};

export default Header;
