describe('Main page', () => {
  it('loads main page', () => {
      cy.visit('/');
      cy.get('.css-text-901oao').should('contain', 'Hello Mokus!');
  })
})
