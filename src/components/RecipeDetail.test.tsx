import { render, screen } from '@testing-library/react';
import RecipeDetail from '@/components/RecipeDetail';

describe('Recipe Details', () => {
  const recipe = {
    label: 'Chicken and Waffles',
    image: 'https://some-image111.com',
    externalId: '111',
    ingredientLines: [
      '2 pounds chicken wings',
      '1 waffle',
      '1 tbsp maple syrup',
    ],
    cuisineType: ['Cajun'],
    dietLabels: ['High-Protein', 'Some Other Diet'],
    healthLabels: ['Dairy-Free', 'Some Other Health Label'],
    url: 'https://www.the-source-of-recipe.com',
  } as EdamamRecipe;

  it('displays recipe ingredients ', () => {
    render(<RecipeDetail recipe={recipe} />);

    expect(screen.getByText('2 pounds chicken wings')).toBeVisible();
    expect(screen.getByText('1 waffle')).toBeVisible();
    expect(screen.getByText('1 tbsp maple syrup')).toBeVisible();
  });

  it('displays recipe image ', () => {
    render(<RecipeDetail recipe={recipe} />);

    expect(screen.getByAltText(`image of Chicken and Waffles`)).toBeVisible();
  });

  it('displays dietary needs', () => {
    render(<RecipeDetail recipe={recipe} />);
    expect(screen.getByText('High-Protein')).toBeVisible();
    expect(screen.getByText('Some Other Diet')).toBeVisible();
    expect(screen.getByText('Dairy-Free')).toBeVisible();
    expect(screen.getByText('Some Other Health Label')).toBeVisible();
  });

  it('displays cuisine', () => {
    render(<RecipeDetail recipe={recipe} />);
    expect(screen.getByText(/Cajun/i)).toBeVisible();
  });

  it('links to external source', async () => {
    render(<RecipeDetail recipe={recipe} />);
    const link = screen.getByRole('link', {
      name: /Follow the instructions/,
    });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', recipe.url);
  });

  it('links back to the home page', async () => {
    render(<RecipeDetail recipe={recipe} />);
    const link = screen.getByRole('link', {
      name: /back/i,
    });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/recipes');
  });
});
