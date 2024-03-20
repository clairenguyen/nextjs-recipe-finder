import React from 'react';
import RecipeDetail from '@/components/RecipeDetail';
import { getRecipeByUri } from '@/app/services/recipes-service';

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}): Promise<React.ReactElement> {
  const data = await getRecipeByUri(params.id);
  const recipe: EdamamRecipe = data.hits[0].recipe;

  return <RecipeDetail recipe={recipe} />;
}
