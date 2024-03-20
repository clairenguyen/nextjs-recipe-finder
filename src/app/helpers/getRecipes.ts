const defaultQuery = 'q=chicken&ingr=5-8&cuisineType=American';
export async function getRecipes(
  query: string = defaultQuery,
): Promise<EdamamResponse> {
  const requiredQueries = `type=public&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;
  const urlWithParams = `https://api.edamam.com/api/recipes/v2?${requiredQueries}&${query}`;

  const res = await fetch(urlWithParams);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
