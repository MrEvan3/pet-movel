describe('Página Inicial', () => {
  it('deve exibir o nome do projeto', () => {
    cy.visit('http://localhost:4000'); // Altere a porta se necessário
    cy.contains('Pet Móvel').should('be.visible');
  });
});