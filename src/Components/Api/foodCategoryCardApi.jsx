async function foodCategoryCardApi() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(endpoint).then((result) => result.json());
  const filtro = data.meals;
  const MAX_CATEGORYS = 5;
  return filtro.filter((value, index) => (
    index >= MAX_CATEGORYS ? ''
      : value));
}

export default foodCategoryCardApi;
