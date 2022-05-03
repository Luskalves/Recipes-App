async function categoryDrinksApi(value) {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
  // const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
  const data = await fetch(endpoint).then((result) => result.json());
  // console.log(data);
  return data.drinks === null ? [] : data.drinks;
}

export default categoryDrinksApi;
