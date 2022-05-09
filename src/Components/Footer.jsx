import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReceitasApp from '../context/ReceitasApp';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const { setNewIngFood, setNewIngredient } = useContext(ReceitasApp);
  return (
    <footer data-testid="footer" className="footer">
      <Link
        type="button"
        to="/drinks"
        onClick={ () => setNewIngredient(null) }
      >
        <img src={ drinkIcon } alt="Drinks" data-testid="drinks-bottom-btn" />
      </Link>

      <Link to="/explore">
        <img src={ exploreIcon } alt="Explore" data-testid="explore-bottom-btn" />
      </Link>

      <Link
        to="/foods"
        onClick={ () => setNewIngFood(null) }
      >
        <img src={ mealIcon } alt="Foods" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
