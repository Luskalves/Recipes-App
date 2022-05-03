async function drinkCategoryCardApi() {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(endpoint).then((result) => result.json());
  const filtro = data.drinks;
  const MAX_CATEGORYS = 5;
  return filtro.filter((value, index) => (
    index >= MAX_CATEGORYS ? ''
      : value));
}

export default drinkCategoryCardApi;
