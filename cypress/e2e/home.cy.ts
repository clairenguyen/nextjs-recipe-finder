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
});
