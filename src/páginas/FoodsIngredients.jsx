import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ReceitasApp from '../context/ReceitasApp';
import ingredienteApi from '../Components/Api/ingredienteApi';

function FoodsIngredients() {
  const MAX = 12;
  const { ingrediente, setIngrediente, setNewIngFood } = useContext(ReceitasApp);

  useEffect(() => {
    ingredienteApi().then((result) => {
      setIngrediente(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header componente="Explore Ingredients" />
      {ingrediente.slice(0, MAX)
        .map((ing, index) => (
          <Link
            key={ index }
            onClick={ () => setNewIngFood(ing.strIngredient) }
            to="/foods"
          >
            <div
              className="ing-img"
              key={ index }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                className="ing-img"
                alt="imagem"
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png` }
              />
              <h5 data-testid={ `${index}-card-name` }>
                { ing.strIngredient }
              </h5>
            </div>
          </Link>
        ))}

      <Footer />
    </div>
  );
}

export default FoodsIngredients;
