export default async function getDrinksApi() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(url).then((response) => response.json());
  console.log(data);
}
