describe('Página Inicial', () => {
  it('deve exibir o nome do projeto', () => {
    cy.visit('http://localhost:4000'); // Altere a porta se necessário
    cy.contains('Pet Móvel').should('be.visible');
  });
});

describe('Fluxo de Agendamento', () => {
  it('deve preencher e enviar o formulário de agendamento', () => {
    cy.visit('http://localhost:4000/servicos/1/agendar');
    cy.get('input[placeholder="Nome do tutor"]').type('Maria Teste');
    cy.get('input[placeholder="E-mail"]').type('maria@teste.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');
    cy.get('input[placeholder="Nome do pet"]').type('Rex');
    cy.get('input[type="date"]').type('2025-06-01');
    cy.get('input[type="time"]').type('10:00');
    cy.get('button[type="submit"]').click();
    cy.contains('Agendamento realizado com sucesso!').should('be.visible');
  });
});