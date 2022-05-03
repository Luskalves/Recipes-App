async function nameDrinkApi(value) {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  const data = await fetch(endpoint).then((result) => result.json());
  if (data.length === 1) {
    return data.drinks[0];
  }
  return data.drinks === null ? [] : data.drinks;
}

export default nameDrinkApi;
