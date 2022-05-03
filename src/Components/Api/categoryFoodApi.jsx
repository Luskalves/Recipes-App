async function categoryFoodApi(value) {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
  const data = await fetch(endpoint).then((result) => result.json());
  // console.log(data);
  return data.meals === null ? [] : data.meals;
}

export default categoryFoodApi;
