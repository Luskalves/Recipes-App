async function ingredientDrinkApi(value) {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
  const data = await fetch(endpoint).then((result) => result.json());
  return data.drinks === null ? [] : data.drinks;
}

export default ingredientDrinkApi;
