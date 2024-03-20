import Link from 'next/link';

interface RecipeDetailProps {
  recipe: EdamamRecipe;
}

export default function RecipeDetail({
  recipe,
}: RecipeDetailProps): React.ReactElement {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link href={'/recipes'}>
          <span className="mr-1 mb-3 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            Back
          </span>
        </Link>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full"
                src={recipe.image}
                alt={`image of ${recipe.label}`}
              />
              <div className="absolute inset-0" />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Recipe
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {recipe.label}
              </h1>
              <div className="max-w-xl">
                <h3 className="mt-2 text-l">Ingredients</h3>
                <ul className="list-disc">
                  {recipe.ingredientLines.map((ingredient, i) => {
                    return (
                      <li key={i} className="ml-8 text-sm">
                        {ingredient}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="max-w-xl">
                <h3 className="mt-2 text-l">Dietary Needs</h3>
                {recipe.dietLabels.map((label, i) => (
                  <span
                    key={i}
                    className="mr-1 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    {label}
                  </span>
                ))}
                {recipe.healthLabels.map((label, i) => (
                  <span
                    key={i}
                    className="mr-1 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-xl">
              <h3 className="mt-2 text-l">Cuisine</h3>
              {recipe.cuisineType.map((label, i) => (
                <span
                  key={i}
                  className="mr-1 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-10 flex">
              <a
                href={recipe.url}
                className="text-base font-semibold leading-7 text-indigo-600"
                rel="noopener noreferrer"
                target="_blank"
                role="link"
              >
                Interested in this recipe? <br />
                Follow the instructions directly at {recipe.source}{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
