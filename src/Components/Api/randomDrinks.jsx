export default async function randomDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const data = await fetch(url).then((response) => response.json());
  console.log(data.drinks[0]);
  return data.drinks[0];
}
