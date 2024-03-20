import Recipes from '@/components/Recipes';
import { getRecipes } from '@/app/services/recipes-service';
import * as example from '@/data/example-response.json';

export default async function HomePage() {
  const data: EdamamResponse = await getRecipes();
  const recipes: EdamamRecipe[] = data.hits.map((h) => h.recipe);

  // if API call doesn't work above, use example data
  // const recipes: EdamamRecipe[] = example.hits.map((h) => h.recipe);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8">
        Recipe Finder
      </h1>
      <Recipes recipes={recipes} />
    </main>
  );
}
