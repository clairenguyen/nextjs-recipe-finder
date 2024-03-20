import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import Recipes from '@/components/Recipes';

describe('Recipes', () => {
  const recipe1 = {
    label: 'Chicken and Waffles',
    image: 'https://some-image111.com',
    externalId: '111',
  } as EdamamRecipe;

  const recipe2 = {
    label: 'Banana Pudding',
    image: 'https://some-image222.com',
    externalId: '222',
  } as EdamamRecipe;

  const recipes = [recipe1, recipe2];

  it('displays multiple recipes', () => {
    render(<Recipes recipes={recipes} />);

    expect(screen.getByText(recipe1.label)).toBeVisible();
    expect(screen.getByText(recipe2.label)).toBeVisible();
  });
});
