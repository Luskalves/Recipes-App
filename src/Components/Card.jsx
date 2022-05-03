import React, { useContext, useEffect } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import openApi from './Api/openApi';

function Card() {
  const MAX_CARDS = 12;
  const {
    teste,
    setTeste,
    filterSearchOption,
  } = useContext(ReceitasApp);

  useEffect(() => {
    openApi().then((result) => {
      setTeste(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {filterSearchOption.length === 0
        ? teste.slice(0, MAX_CARDS)
          .map((value, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img"
                src={ value.strMealThumb }
                alt={ value.strMeal }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                { value.strMeal }
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
                src={ value.strMealThumb }
                alt={ value.strMeal }
              />
              <h2
                data-testid={ `${index}-card-name` }
              >
                { value.strMeal }
              </h2>
            </div>
          ))}
    </div>
  );
}

export default Card;