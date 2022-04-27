import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <label htmlFor="drinkButton">
        <input
          name="drinkButton"
          type="button"
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
        />
      </label>
      <label htmlFor="exploreButton">
        <input
          name="exploreButton"
          type="button"
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
        />
      </label>

      <label htmlFor="hmm">
        <input
          type="button"
          src={ mealIcon }
          data-testid="food-bottom-btn"
        />
      </label>
      {/* <button
        type="button"
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="" />
      </button> */}

      {/* <button
        type="button"
        data-testid="food-bottom-btn"
      >
        <img src={ mealIcon } alt="" />
      </button> */}
    </footer>
  );
}

export default Footer;
