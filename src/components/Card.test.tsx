import { render, screen } from '@testing-library/react';
import Card from '@/components/Card';

describe('Card', () => {
  const recipe = {
    label: 'Chicken and Waffles',
    image: 'https://some-image111.com',
    externalId: '111',
    calories: 500,
  } as EdamamRecipe;

  it('displays recipe information', () => {
    render(<Card recipe={recipe} />);

    expect(screen.getByText(recipe.label)).toBeVisible();
    expect(screen.getByText(`${recipe.calories} Cal`)).toBeVisible();
  });

  it('displays an image of the dish', () => {
    render(<Card recipe={recipe} />);

    expect(screen.getByAltText(`image of ${recipe.label}`)).toBeVisible();
  });

  it('rounds up the calorie information', () => {
    render(<Card recipe={{ ...recipe, calories: 222.22222 }} />);

    expect(screen.getByText(`223 Cal`)).toBeVisible();
  });
});
