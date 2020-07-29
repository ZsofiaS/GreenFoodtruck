describe('Main page', () => {
  it('loads main page', () => {
      cy.visit('http://192.168.1.220:19006/');
      cy.get('.css-text-901oao').should('contain', 'Hello Mokus!');
  })
})
