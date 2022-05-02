async function firstLetterDrinkApi(value) {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
  const data = await fetch(endpoint).then((result) => result.json());
  // console.log(data.drinks[0]);
  if (data.length === 1) {
    return data.drinks[0];
  }
  return data.drinks === null ? [] : data.drinks;
}

export default firstLetterDrinkApi;
