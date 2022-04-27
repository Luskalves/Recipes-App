import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <h1 data-testid="page-title">  </h1>
      <label htmlFor="profileBtn">
        <input
          name="profileBtn"
          type="button"
          src={ profileIcon }
          data-testid="profile-top-btn"
        />
      </label>
      <label htmlFor="SearchBtn">
        <input
          name="searchBtn"
          type="button"
          src={ searchIcon }
          data-testid="search-top-btn"
        />
      </label>
    </header>
  );
}

// Header.propTypes = {
//   history: PropTypes.shape(Object).isRequired,
// };

export default Header;
