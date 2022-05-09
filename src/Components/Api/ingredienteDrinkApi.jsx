async function ingredienteDrinkApi() {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const data = await fetch(endpoint).then((result) => result.json());
  console.log(data);
  return data.drinks;
}
export default ingredienteDrinkApi;
