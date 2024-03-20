import { render, screen } from '@testing-library/react';
import RecipeCard from '@/components/RecipeCard';

describe('RecipeCard', () => {
  const recipe = {
    label: 'Chicken and Waffles',
    image: 'https://some-image111.com',
    externalId: '111',
    calories: 500,
  } as EdamamRecipe;

  it('displays recipe information', () => {
    render(<RecipeCard recipe={recipe} />);

    expect(screen.getByText(recipe.label)).toBeVisible();
    expect(screen.getByText(`${recipe.calories} Cal`)).toBeVisible();
  });

  it('displays an image of the dish', () => {
    render(<RecipeCard recipe={recipe} />);

    expect(screen.getByAltText(`image of ${recipe.label}`)).toBeVisible();
  });

  it('rounds up the calorie information', () => {
    render(<RecipeCard recipe={{ ...recipe, calories: 222.22222 }} />);

    expect(screen.getByText(`223 Cal`)).toBeVisible();
  });
});
