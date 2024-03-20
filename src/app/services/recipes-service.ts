const defaultQuery = {
  q: 'chicken',
  ingr: '5-8',
};

const params: Params = {
  app_id: process.env.EDAMAM_APP_ID ?? '',
  app_key: process.env.EDAMAM_APP_KEY ?? '',
  type: 'public',
  ...defaultQuery,
};

const createQueryString = () => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&');
};

export async function getRecipes(): Promise<EdamamResponse> {
  const queryString = createQueryString();
  const urlWithParams = `https://api.edamam.com/api/recipes/v2?${queryString}`;

  const res = await fetch(urlWithParams);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getRecipeByUri(id: string): Promise<EdamamResponse> {
  const uriParamBase = 'http://www.edamam.com/ontologies/edamam.owl#recipe_';
  const encodedUriParamBase = encodeURIComponent(uriParamBase);

  const encodedUri = encodedUriParamBase + id;
  const urlWithParams = `https://api.edamam.com/api/recipes/v2/by-uri?${createQueryString()}&uri=${encodedUri}`;

  const res = await fetch(urlWithParams);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
