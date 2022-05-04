export default async function findDrinkById(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = await fetch(url).then((response) => response.json());
  console.log('data: ', data);
  return data.drinks[0];
}
