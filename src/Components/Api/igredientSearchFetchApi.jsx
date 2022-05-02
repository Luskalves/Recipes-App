async function igredientSearchFetchApi() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const data = await fetch(endpoint).then((result) => result.json());
  console.log(data);
  return data.meals;
}

export default igredientSearchFetchApi;
