import React, { useContext, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import openApiDrinks from './Api/openApiDrinks';

function CardDrinks() {
  const MAX_CARDS = 12;
  const {
    filterSearchOption,
    drinks,
    setDrinks,
  } = useContext(ReceitasApp);

  useEffect(() => {
    openApiDrinks().then((result) => {
      setDrinks(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {filterSearchOption.length === 0
        ? drinks.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strDrinkThumb }
                alt={ value.strDrink }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                { value.strDrink }
              </h3>
            </div>
          ))
        : filterSearchOption.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strDrinkThumb }
                alt={ value.strDrink }
              />
              <h2
                data-testid={ `${index}-card-name` }
              >
                { value.strDrink }
              </h2>
            </div>
          ))}
    </div>
  );
}

export default CardDrinks;
