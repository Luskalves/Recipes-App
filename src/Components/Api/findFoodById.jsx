export default async function findFoodById(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = await fetch(url).then((response) => response.json());
  // console.log('data: ', data);
  return data.meals[0];
}
