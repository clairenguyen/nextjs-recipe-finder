import React from 'react';

interface RecipeCardProps {
  recipe: EdamamRecipe;
}

function RecipeCard({ recipe }: RecipeCardProps): React.ReactElement {
  return (
    <>
      <div className="group aspect-h-7 aspect-w-9 block w-full overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={recipe.image}
          alt={`image of ${recipe.label}`}
          className="w-full pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          type="button"
          className="absolute inset-0 focus:outline-none"
        ></button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {recipe.label}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {Math.ceil(recipe.calories)} Cal
      </p>
    </>
  );
}

export default RecipeCard;
