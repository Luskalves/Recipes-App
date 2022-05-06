export default async function randomFood() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const data = await fetch(url).then((response) => response.json());
  console.log(data.meals[0]);
  return data.meals[0];
}
