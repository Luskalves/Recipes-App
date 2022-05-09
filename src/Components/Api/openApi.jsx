async function openApi() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(endpoint).then((result) => result.json());
  return data.meals === null ? [] : data.meals;
}
export default openApi;

// faz requisição para quando a página monta
