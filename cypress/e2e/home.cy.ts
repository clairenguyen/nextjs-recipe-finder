// Jest currently does not support async Server Components. Next.js recommends doing E2E tests.
// src/app/page.tsx is being tested here instead of jest tests
// https://nextjs.org/docs/app/building-your-application/testing/jest
describe('Home Page E2E', () => {
  it('displays the correct heading text', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('Recipe Finder');
  });

  it('validates the external API response works', () => {
    cy.visit('http://localhost:3000');

    cy.get('li').then((items) => {
      const chickenItems = items.filter((index, item) => {
        return item.innerText.toLowerCase().includes('chicken');
      });
      expect(chickenItems.length).to.be.at.least(2);
    });
  });

  it('navigates to the individual recipe page', () => {
    cy.visit('http://localhost:3000');

    cy.get('li').first().click();

    cy.contains('Ingredients', { timeout: 10000 }).should('be.visible');
  });

  it('loads an individual recipe page with api response', () => {
    cy.visit('http://localhost:3000/recipes/0d6bfaa492fd47daa4c4b1270787d3c5');

    cy.contains('Drunken Chicken Recipe', { timeout: 10000 }).should(
      'be.visible',
    );
  });
});
