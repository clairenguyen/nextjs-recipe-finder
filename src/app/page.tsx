import Recipes from '@/components/Recipes';
import { getRecipes } from '@/app/helpers/getRecipes';
import * as example from '@/data/example-response.json';

export default async function Home() {
  const data: EdamamResponse = await getRecipes();
  const recipes: EdamamRecipe[] = data.hits.map((h) => h.recipe);

  // if API call doesn't work, use example data
  // const recipes: EdamamRecipe[] = example.hits.map((h) => h.recipe);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl mb-8">Recipe Finder</h1>
      <Recipes recipes={recipes} />
    </main>
  );
}
