import React, { useContext } from 'react';
import ReceitasApp from '../context/ReceitasApp';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesComponent() {
  const { doneRecipes } = useContext(ReceitasApp);

  // link precisa ser /food/id da receita
  async function copyLink({ target }) {
    const { id } = target;
    await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`); // Salva no atalho do usuario o texto. Referencia retirada do site https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    // global.alert('Link copied!');
  }

  return (
    <>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      { doneRecipes.map((value, index) => (
        <div key={ value.id }>
          <img
            src={ value.image }
            alt={ value.name }
            data-testid={ `${index}-horizontal-image` }
            className="card-img"
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{ value.category }</p>
          <p data-testid={ `${index}-horizontal-name` }>{value.name}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{value.doneDate}</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ (e) => {
              global.alert('Link copied!');
              copyLink(e);
            } }
          >
            <img
              src={ shareIcon }
              alt="profile"
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
        </div>
      )) }
    </>
  );
}

export default DoneRecipesComponent;

// {
//   id: '53050',
//   type: 'comida',
//   nationality: '',
//   category: 'British - Dessert',
//   alcoholicOrNot: '',
//   name: 'Ayam Percik',
//   image: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
//   doneDate: 'Thu May 05 2022 18:17:39 GMT-0300 (Brasilia Standard Time)',
//   tags: ['Soup', 'Test'],
// },
