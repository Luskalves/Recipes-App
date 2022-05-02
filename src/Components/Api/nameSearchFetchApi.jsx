async function nameSearchFetchApi(value) {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  const data = await fetch(endpoint).then((result) => result.json());
  return data.meals === null ? [] : data.meals;
}

export default nameSearchFetchApi;
