export default async function getFoodsApi() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(url).then((response) => response.json());
  console.log(data);
}
