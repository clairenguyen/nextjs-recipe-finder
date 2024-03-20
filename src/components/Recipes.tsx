'use client';
import React from 'react';
import RecipeCard from '@/components/RecipeCard';

interface RecipesProps {
  recipes: EdamamRecipe[];
}

function Recipes({ recipes }: RecipesProps): React.ReactElement {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {recipes.map((recipe) => (
        <li key={recipe.externalId + recipe.label} className="relative">
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}

export default Recipes;
