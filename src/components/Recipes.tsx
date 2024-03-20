'use client';
import React from 'react';
import Card from '@/components/Card';
import Link from 'next/link';

interface RecipesProps {
  recipes: EdamamRecipe[];
}

function Recipes({ recipes }: RecipesProps): React.ReactElement {
  function extractRecipeId(url: string) {
    const parts = url.split('recipe_');
    return parts[parts.length - 1];
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {recipes.map((recipe) => {
        const id = extractRecipeId(recipe.uri);
        return (
          <Link key={id} href={`/recipes/${id}`}>
            <li
              key={id}
              className="relative border border-solid rounded-md p-2 bg-white"
            >
              <Card recipe={recipe} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Recipes;
