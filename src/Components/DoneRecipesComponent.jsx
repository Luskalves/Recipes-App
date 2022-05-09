import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReceitasApp from '../context/ReceitasApp';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesComponent() {
  const { doneRecipes } = useContext(ReceitasApp);
  const [filterRecipes, setfilterRecipes] = useState([]);
  const [spamAlert, setSpamAlert] = useState('');

  useEffect(() => {
    setfilterRecipes(doneRecipes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterSet({ target }) {
    // console.log(doneRecipes.filter((value) => value.type === 'foods'));
    let filtro = '';
    switch (target.name) {
    case 'foods':
      filtro = doneRecipes.filter((value) => value.type === 'foods');
      setfilterRecipes(filtro);
      break;
    case 'drinks':
      filtro = doneRecipes.filter((value) => value.type === 'drinks');
      setfilterRecipes(filtro);
      break;
    case 'all':
      filtro = doneRecipes;
      setfilterRecipes(filtro);
      break;
    default: return '';
    }
  }

  async function copyLink({ target }) {
    const { id } = target;
    await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`); // Salva no atalho (ctrl+v) do usuario o texto.    Referencia retirada do site https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    setSpamAlert('Link copied!');
  }

  return (
    <>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ filterSet }
      >
        All
      </button>
      <button
        type="button"
        name="foods"
        data-testid="filter-by-food-btn"
        onClick={ filterSet }
      >
        Food
      </button>
      <button
        type="button"
        name="drinks"
        data-testid="filter-by-drink-btn"
        onClick={ filterSet }
      >
        Drinks
      </button>
      { filterRecipes.map((value, index) => (
        <div key={ value.id }>
          <Link to={ `/${value.type}/${value.id}` }>
            <img
              src={ value.image }
              alt={ value.name }
              data-testid={ `${index}-horizontal-image` }
              className="card-img"
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>{ value.category }</p>
          <Link to={ `/${value.type}/${value.id}` }>
            <p data-testid={ `${index}-horizontal-name` }>
              {value.name}
            </p>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{value.doneDate}</p>
          <button
            type="button"
            onClick={ (event) => {
              copyLink(event);
            } }
          >
            <img
              src={ shareIcon }
              alt="profile"
              data-testid={ `${index}-horizontal-share-btn` }
              id={ value.id }
            />
          </button>
          {value.tags.map((valor, index2) => (
            <p
              data-testid={ `${index}-${valor}-horizontal-tag` }
              key={ index2 }
            >
              {valor}
            </p>
          ))}
          {spamAlert}
        </div>
      )) }
    </>
  );
}

export default DoneRecipesComponent;
