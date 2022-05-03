async function openApiDrinks() {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(endpoint).then((result) => result.json());
  return data.drinks === null ? [] : data.drinks;
}
export default openApiDrinks;
