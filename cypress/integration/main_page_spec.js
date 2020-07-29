describe('Main page', () => {
  it('loads main page', () => {
      cy.visit('/');
      cy.get('.css-text-901oao').should('contain', 'Hello Mokus!');
      cy.get('.css-view-1dbjc4n').should('contain', 'Croissant');
      cy.get('.css-view-1dbjc4n').should('contain', 'Coffee');
  })
})
