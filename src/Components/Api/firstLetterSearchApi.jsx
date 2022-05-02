async function firstLetterSearchApi(value) {
  const firstLetter = value.split('');
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter[0]}`;
  const data = await fetch(endpoint).then((result) => result.json());
  return data.meals === null ? [] : data.meals;
}

export default firstLetterSearchApi;
